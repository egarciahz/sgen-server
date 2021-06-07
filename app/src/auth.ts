import { Response } from 'express'
import { AuthChecker } from 'type-graphql'
import {
    Strategy,
    Authentication,
    IUser,
    Statement,
    IRole,
    IPermission,
} from '@server/auth'
import User from './entities/User'

export const KeyName = 'email'
export const Algorithm = 'HS256'

const findByName = (name: string, statements: Statement[]) =>
    statements.findIndex((statement) => statement.name === name) > -1

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mapRolePermission = (
    statements: string[],
    user: IUser<unknown>
) => {
    const matchStatement = (
        arr: (IRole | IPermission)[],
        verb: (string | never)[]
    ) => {
        return (
            arr.findIndex((role) => {
                return (
                    verb[0 /*role name*/] === role.name &&
                    (verb[1 /*permission name*/]
                        ? findByName(verb[1], (role as IRole)?.permissions)
                        : true)
                )
            }) > -1
        )
    }

    return statements
        .filter((statement) => statement && statement.trim() !== '')
        .map((statement) => {
            const verb: (string | never)[] = /^\:.+/.test(statement)
                ? [void 0, statement.replace(':', '')]
                : [...statement.split(':'), void 0].slice(0, 1)

            if (!verb[0]) {
                return matchStatement(user.permissions, [verb[1], void 0])
            }

            return matchStatement(user.roles, verb)
        })
}

export const GQLAuthMiddleware: AuthChecker<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    response: Response & { auth: any }
}> = ({ context: { response } }, roles) => {
    const { user } = response.auth

    if (!roles?.length) {
        response.status(403)
        return !!user
    }

    if (!user) {
        response.status(401)
        return false
    }

    const hasGranted = mapRolePermission(roles, user)
    if (hasGranted.every((pred) => pred)) {
        return true
    }

    return false
}

const Auth = new Authentication(
    new Strategy({
        algorithm: Algorithm,
        expiresIn: 1000 * 60 * 60,
        keyName: KeyName,
        passwordField: 'password',
        usernameField: 'email',
        secret: 'the_g1g0-secret',
        async finder(KeyValue) {
            if (!KeyValue) {
                return Promise.resolve(null)
            }

            return User.findOne({
                where: {
                    [KeyName]: KeyValue,
                    active: true,
                },
            })
        },
    })
)

export default Auth
