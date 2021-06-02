import cors from 'cors'
import path from 'path'
import morgan from 'morgan'
import { isArray, isString, pick, omit } from 'lodash'
import fs from 'fs'

import { Express } from 'express'
import { graphqlHTTP } from 'express-graphql'
import { json as parserJSON } from 'body-parser'
import {
    BuildSchemaOptions,
    NonEmptyArray,
    buildSchemaSync,
} from 'type-graphql'
import {
    GraphQLUpload,
    graphqlUploadExpress,
    UploadOptions,
} from 'graphql-upload'
import Upload from 'graphql-upload/public/Upload.js'

import { normalizePort } from './utils/normalizePort'
import { ENV, isProdMode } from './env'

export const HOST: string = ENV?.HOST ?? 'http://localhost'
export const PORT: number = normalizePort(ENV?.PORT ?? '8080')
export const URI: string = [ENV?.HOST, PORT].join(':')

export const buildPaths: (
    rootDir: string,
    paths: NonEmptyArray<string>
) => NonEmptyArray<string> = (rootDir, paths) =>
    paths
        .map((pt) => {
            pt = path.join(rootDir, pt)
            !isProdMode && console.log(`PathsResolvers ${pt}`)
            return fs.existsSync(pt) ? pt : null
        })
        .filter(isString) as NonEmptyArray<string>

type ComposerConfig = UploadOptions &
    Omit<BuildSchemaOptions, 'resolvers'> & {
        rootDir: string
        graphiql?: boolean
        resolvers?: NonEmptyArray<string>
    }

export async function composer(
    app: Express,
    { rootDir, graphiql, ...config }: ComposerConfig
): Promise<Express> {
    const uploadConfig = pick(config, 'maxFiles', 'maxFileSize', 'maxFieldSize')
    const {
        resolvers: _resolvers = [],
        // ...builderOptions
    } = omit(config, 'maxFiles', 'maxFileSize', 'maxFieldSize')
    /**
     * check rootDir
     */
    if (!fs.existsSync(rootDir)) {
        throw new Error(
            `rootDir is not found: ${rootDir}. Consider using absolute paths`
        )
    }
    /**
     * Resolve paths for definitions of kind resolver
     */
    const PathResolvers = buildPaths(rootDir, [
        path.join('graphql'),
        ..._resolvers,
    ]).map((pt) => path.join(pt, '/**/*.{ts,js}')) as NonEmptyArray<string>
    /**
     * make executable schema
     */
    const schema = buildSchemaSync({
        resolvers: [...PathResolvers],
        scalarsMap: [{ scalar: GraphQLUpload, type: Upload }],
    })

    app.use(
        cors({
            origin: (origin, next) => {
                const WHITELIST = (
                    isArray(ENV.ORIGINS) ? ENV.ORIGINS : [ENV.ORIGINS]
                ).filter(isString)
                /**
                 * in production, abort if origin is undefined
                 */
                if (!origin && isProdMode) {
                    return next(
                        new Error(
                            'Not allowed by CORS. Unassigned origin is only available in development mode'
                        )
                    )
                }
                /**
                 * in development, accept if origin is undefined
                 */
                if (!origin) {
                    return next(null, true)
                }
                /**
                 * if accept all origins its present
                 */
                if (WHITELIST.indexOf('*') > -1) {
                    return next(null, true)
                }
                /**
                 * if origin is not present or not equal to URL
                 */
                if (WHITELIST.indexOf(origin) < 0) {
                    return next(
                        new Error('Not allowed by CORS. Site not allowed')
                    )
                } else if (origin !== ENV?.URL) {
                    return next(
                        new Error(
                            'Not allowed by CORS. Only accept same origin'
                        )
                    )
                }

                return next(null, true)
            },
            optionsSuccessStatus: 200,
            preflightContinue: true,
            credentials: true,
        })
    )
    app.use(parserJSON())
    app.use(
        morgan(
            ':remote-addr :method :url :status :res[content-length] - :response-time ms'
        )
    )
    app.use(
        '/graphql',
        graphqlUploadExpress({
            maxFileSize: 10_000_000,
            maxFiles: 6,
            ...uploadConfig,
        }),
        graphqlHTTP((request, response, params) => ({
            context: {
                params,
                request,
                response,
            },
            schema,
            graphiql: graphiql ?? !isProdMode,
        }))
    )

    return app
}
