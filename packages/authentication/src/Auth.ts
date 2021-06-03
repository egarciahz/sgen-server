import { GraphQLError } from 'graphql'
import { IUser, IAuth } from './IUser'

// eslint-disable-next-line @typescript-eslint/ban-types
export const UNAME_KEY: keyof IUser<{}> = 'email'

export type LocalFinder<T> = (key: string) => Promise<IUser<T> | null>

export interface AuthContext {
    info?: GraphQLError
    error?: GraphQLError
    token?: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
export default class Auth<U extends {}> implements IAuth<U> {
    user: IUser<U> = null
    token: string = null
    // tslint:disable-next-line: variable-name
    readonly __typename: string = 'Auth'

    constructor(user: IUser<U>, token: string) {
        this.user = user
        this.token = token
    }
}
