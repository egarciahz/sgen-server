import {
    Strategy as JwtStrategy,
    ExtractJwt,
    StrategyOptions,
} from 'passport-jwt'
import _ from 'lodash'
import { Request } from 'express'
import { Algorithm } from 'jsonwebtoken'
import { Strategy as LocalStrategy, IStrategyOptions } from 'passport-local'

import Encoder, { Deserialize } from './Encoder'
import { IUser, LocalFinder } from './Interfaces'
import Secret from './Secret'

type Next = (...args: unknown[]) => void

type Options<T> = {
    finder: LocalFinder<IUser<T>>
    keyName: string
    algorithm: Algorithm
    expiresIn: number
    secret: string
}

type Config<T> = Options<T> & IStrategyOptions

// eslint-disable-next-line @typescript-eslint/ban-types
export default class Strategy<T extends {}> {
    private options: Config<T>
    deserialize: () => Deserialize

    constructor(options: Config<T>) {
        this.options = options
        this.deserialize = () => Encoder.deserialize(options.finder)
    }

    isSession(): boolean {
        return !!this.options?.session
    }

    getOptions(): Omit<Options<T>, 'finder'> {
        return _.pick(
            this.options,
            'algorithm',
            'expiresIn',
            'secret',
            'keyName'
        )
    }

    setSecret(secret: string): void {
        this.options.secret = secret
    }

    authenticate(): (email: string, password: string, next: unknown) => void {
        return (email: string, password: string, next: Next): void => {
            this.options
                .finder(email)
                .then((user) => {
                    if (!user) {
                        return next(null, false, {
                            message: 'User not found',
                            code: 404,
                        })
                    }

                    Secret.has(password, { salt: user.salt, hash: user.hash })
                        .then(() => next(null, user))
                        .catch((error) => next(null, false, error))
                })
                .catch((error) => next(null, false, error))
        }
    }

    extractToken(request: Request): string | never {
        return ExtractJwt.fromAuthHeaderAsBearerToken()(request)
    }

    createLocalStrategy(): LocalStrategy {
        return new LocalStrategy(this.options, this.authenticate())
    }

    createJwtStrategy(
        config?: Omit<
            StrategyOptions,
            'jwtFromRequest' | 'algorithms' | 'secretOrKey'
        >
    ): JwtStrategy {
        const _conf = _.defaults(config ?? {}, {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            algorithms: [this.options.algorithm],
            secretOrKey: this.options.secret,
        })
        const finderProxy = this.deserialize()

        return new JwtStrategy(_conf, (payload, next) =>
            finderProxy(payload[this.options.keyName], next)
        )
    }
}
