import { AuthChecker, createParamDecorator } from 'type-graphql'
import {
    Strategy,
    Authentication,
    IUser,
    Statement,
    IRole,
    IPermission,
    IAuth,
} from '@server/auth'
import User from './entities/User'
import { IContext } from '@server/core'

export const KeyName = 'email'
export const Algorithm = 'HS256'

/**
 * @description
 * look for coincidence in the statements by name
 *
 * @param {Array<IRole | IPermission>} source user roles or permissions list
 * @param {Array<string | never>} query role or permission names to match
 *
 * @returns boolean
 */
const matchStatementByName = (
    source: (IRole | IPermission)[],
    query: (string | never)[]
) => {
    const findByName = (name: string, statements: Statement[]) =>
        statements.findIndex((statement) => statement.name === name) > -1

    return (
        source.findIndex(
            (role) =>
                query[0 /*role name*/] === role.name &&
                (query[1 /*permission name*/]
                    ? findByName(query[1], (role as IRole)?.permissions)
                    : true)
        ) > -1
    )
}

/**
 * @description
 * filter empty entries and map permission pairs to compare with user entries
 *
 * @example
 * ['role-name:permission-name', ...] -> [['role-name', 'permission-name'], ...]
 * ['role-name']                      -> [['role-name', undefined]]
 * [':permission-name']               -> [[undefined 'permission-name']]
 *
 * @description
 * then remap the result to get matches in the user's permission tree and return a boolean array
 *
 * @example
 * ['role-name', ':permission-name', 'role-name:permission-name'] -> [mapping] -> [true, false, false]
 *
 * @returns Array<boolean>
 */
export const mapRolePermission: (
    statements: string[],
    user: IUser<unknown>
) => boolean[] = (statements, user) => {
    return statements
        .filter((statement) => statement && statement.trim() !== '') // clean
        .map((statement) => {
            // decode
            const verb: (string | never)[] = /^\:.+/.test(statement)
                ? [void 0, statement.replace(':', '')]
                : [...statement.split(':'), void 0].slice(0, 1)
            // if a single permission
            if (!verb[0]) {
                return matchStatementByName(user.permissions, [verb[1], void 0])
            }
            // if role or role->permission value
            return matchStatementByName(user.roles, verb)
        })
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type IAuthContext = IContext<{ auth: IAuth<{}> }>

// eslint-disable-next-line @typescript-eslint/ban-types
export type IUseAuth<T = {}> = IAuth<T>

/**
 * @description
 * property decrator for access to authentication context
 *
 * @example
 * class ResolverClass {
 *  method(@UserAuth() auth:IUseAuth): any {
 *      const { user, token } = auth
 *      ...
 *  }
 * }
 */
export function UseAuth(): ParameterDecorator {
    return createParamDecorator<IAuthContext>(({ context: { response } }) => {
        return response.auth ?? null
    })
}

export const GQLAuthMiddleware: AuthChecker<IAuthContext> = (
    { context: { response } },
    roles
) => {
    const { user } = response.auth

    if (!user) {
        response.status(401)
        return false
    }

    if (!roles?.length) {
        response.status(403)
        return !!user
    }

    const hasGranted = mapRolePermission(roles, user)

    return hasGranted.some((pred) => pred)
}

const AuthStrategy = new Authentication(
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

export default AuthStrategy
