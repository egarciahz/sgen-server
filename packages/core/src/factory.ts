import cors from 'cors'
import path from 'path'
import morgan from 'morgan'
import { isArray, isString, pick, omit } from 'lodash'
import fs from 'fs'

import { Express } from 'express'
import { graphqlHTTP } from 'express-graphql'
import { json as parserJSON } from 'body-parser'
import { makeExecutableSchema } from '@graphql-tools/schema'
import {
    buildTypeDefsAndResolvers,
    BuildSchemaOptions,
    NonEmptyArray,
} from 'type-graphql'
import {
    GraphQLUpload,
    graphqlUploadExpress,
    UploadOptions,
} from 'graphql-upload'

import { normalizePort } from './utils/normalizePort'
import { ENV, isProdMode } from './env'
import { loadTypeDirectories } from './loaders'

export const HOST: string = ENV?.HOST ?? 'http://localhost'
export const PORT: number = normalizePort(ENV?.PORT ?? '8080')
export const URI: string = [ENV?.HOST, PORT].join(':')

const buildPath: (
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
        types?: NonEmptyArray<string>
    }

export async function composer(
    app: Express,
    { rootDir, graphiql, ...config }: ComposerConfig
): Promise<void> {
    const uploadConfig = pick(config, 'maxFiles', 'maxFileSize', 'maxFieldSize')
    const {
        resolvers: _resolvers = [],
        types = [],
        ...builderSchema
    } = omit(config, 'maxFiles', 'maxFileSize', 'maxFieldSize')

    if (!fs.existsSync(rootDir)) {
        throw new Error(
            `rootDir is not found: ${rootDir}. Consider using absolute paths`
        )
    }

    const PathResolvers = buildPath(rootDir, [
        path.join('graphql', 'resolvers'),
        ..._resolvers,
    ])
    const PathTypes = buildPath(rootDir, [
        path.join('graphql', 'types'),
        ...types,
    ])
    const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
        resolvers: PathResolvers,
        ...builderSchema,
    })
    const schema = makeExecutableSchema({
        resolvers: Object.assign({ Upload: GraphQLUpload }, resolvers),
        typeDefs: loadTypeDirectories(PathTypes, [typeDefs]),
    })

    app.use(
        cors({
            origin: (origin, callback) => {
                if (!ENV?.ORIGINS) {
                    ENV?.URL === origin
                        ? callback(null, true)
                        : callback(
                              new Error(
                                  'Not allowed by CORS. Only accept same origin'
                              )
                          )
                    return
                }
                if (ENV.ORIGINS === '*') {
                    callback(null, true)
                    return
                }
                const whitelist = isArray(ENV.ORIGINS)
                    ? ENV.ORIGINS
                    : [ENV.ORIGINS]

                whitelist.indexOf(origin) !== -1
                    ? callback(null, true)
                    : callback(
                          new Error('Not allowed by CORS. Site not allowed')
                      )
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
}
