import { Strategy as JwtStrategy } from 'passport-jwt'
import { Strategy as LocalStrategy, IStrategyOptions } from 'passport-local'

import { LocalFinder, UNAME_KEY } from './Auth'
import Encoder, { Deserialize } from './Encoder'

import Secret from './Secret'
import { IUser } from './IUser'

type Next = (...args: unknown[]) => void
type Options<T> = {
    finder: LocalFinder<IUser<T>>
} & IStrategyOptions

// eslint-disable-next-line @typescript-eslint/ban-types
export default class Strategy<T extends {}> {
    private options: Options<T>
    deserialize: () => Deserialize

    constructor(options: Options<T>) {
        this.options = options
        this.deserialize = () => Encoder.deserialize(options.finder)
    }

    authenticate(): (email: string, password: string, next: unknown) => void {
        return (email: string, password: string, next: Next): void => {
            this.options
                .finder(email)
                .then((user) => {
                    if (!user) {
                        return next(null, false, { message: 'User not found' })
                    }

                    Secret.has(password, { salt: user.salt, hash: user.hash })
                        .then(() => next(null, user)) //omitFields(user, BLACK_BOX)
                        .catch((error) => next(null, false, error))
                })
                .catch((error) => next(null, false, error))
        }
    }

    createLocalStrategy(): LocalStrategy {
        return new LocalStrategy(this.options, this.authenticate())
    }

    createJwtStrategy(): JwtStrategy {
        const finder = this.deserialize()
        return new JwtStrategy(JWT_STRATEGY_OPTIONS, (payload, next) =>
            finder(payload[UNAME_KEY], next)
        )
    }
}
