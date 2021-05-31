import { GraphQLError } from "graphql";
import { IUser } from "./IUser";
import IAuth from "./IAuth";

export const UNAME_KEY: keyof IUser = "email"

export type LocalFinder<U extends IUser = IUser> = (email: string) => Promise<U | null>;

export interface AuthContext {
    info?: GraphQLError
    error?: GraphQLError
    token?: string
}

export default class Auth implements IAuth {
    user: IUser = null;
    token: string = null;
    // tslint:disable-next-line: variable-name
    readonly __typename: string = "Auth";

    constructor(user: IUser, token: string) {
        this.user = user;
        this.token = token;
    }
}
