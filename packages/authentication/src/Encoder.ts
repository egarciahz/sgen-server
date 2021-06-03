import { IUser } from './IUser'
import { LocalFinder, UNAME_KEY } from './Auth'

export type Next = (...args: unknown[]) => void
export type Deserialize = (email: string, next: Next) => Promise<IUser<unknown>>
export type Serialize = (user: IUser<unknown>, next: Next) => void

export default class Encoder {
    static serialize<U extends Record<string, unknown>>() {
        return (user: IUser<U>, next: Next): void => {
            next(null, user[UNAME_KEY])
        }
    }

    static deserialize<U extends Record<string, unknown>>(
        finder: LocalFinder<U>
    ): Deserialize {
        return (email: string, next: Next): Promise<IUser<unknown>> =>
            finder(email)
                .then((user) => {
                    next(null, user)
                    return user
                })
                .catch((error) => {
                    next(null, false, error)
                    return error
                })
    }
}
