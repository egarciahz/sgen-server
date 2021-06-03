import { GraphQLError } from 'graphql'

export type IID = string | number

export type Statement = {
    id: number
    name: string
    description?: string
}

export enum ROLE_LEVEL {
    ROOT = 2,
    ADMIN = 1,
    USER = 0,
}

export type IPermission = Statement

export type IRole = Statement & {
    permissions: IPermission[]
    level?: ROLE_LEVEL
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type IUser<U extends {}> = {
    email: string
    active: boolean
    verify: boolean
    salt: string
    hash: string
    id: IID
    roles: IRole[]
    permissions: IPermission[]
    ownerId: number
} & U

export type LocalFinder<T> = (value: string) => Promise<IUser<T> | null>

export interface AuthContext {
    info?: GraphQLError
    error?: GraphQLError
    token?: string
}

export interface IAuth<U> {
    id: IID
    user: IUser<U>
    token: string
}
