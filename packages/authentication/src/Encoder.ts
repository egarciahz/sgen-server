import { IUser } from './Interfaces'
import { LocalFinder } from './Interfaces'

export type Next = (...args: unknown[]) => void
export type Deserialize = (email: string, next: Next) => Promise<IUser<unknown>>
export type Serialize = (user: IUser<unknown>, next: Next) => void

export default class Encoder {
    static serialize<U extends Record<string, unknown>>(
        keyName: keyof IUser<U>
    ) {
        return (user: IUser<U>, next: Next): void => {
            next(null, user[keyName])
        }
    }

    static deserialize<U extends Record<string, unknown>>(
        finder: LocalFinder<U>
    ): Deserialize {
        return (keyValue: string, next: Next): Promise<IUser<unknown>> =>
            finder(keyValue)
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
