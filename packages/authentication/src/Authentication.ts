import jwt from 'jsonwebtoken'
import passport from 'passport'
import { Request, NextFunction, Response } from 'express'
import _ from 'lodash'

import makePayload from './makePayload'
import Strategy from './Strategy'
import { IUser } from './Interfaces'

/**
 * @privateRemarks
 * tareas pendientes
 * implementar flujo de recuperacion de contracenia.
 * implementar flujo de verificacion de correo.
 * implementar flujo de creacion de cuenta.
 * todo esto como una estrategia. [ok]
 *
 * separar a middleware como una funcion independiente [ok]
 */
export default class Authentication<U> {
    debug = true
    strategy: Strategy<U>

    constructor(strategy: Strategy<U>) {
        this.strategy = strategy
    }

    login(
        require: Request,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        response: Response & { auth: any },
        next: NextFunction
    ): void {
        passport.authenticate('local', { session: false }, (error, user) => {
            if (error) {
                if (this.debug && error.message)
                    console.error('authenticate jwt:', error.message)
                return next(error)
            }

            if (!user) {
                return next(new Error('User not found'))
            }
            const config = this.strategy.getOptions()
            const data = makePayload(user, config)
            jwt.sign(
                data,
                config.secret,
                { algorithm: config.algorithm },
                (error, token) => {
                    if (error) {
                        return next(error)
                    }
                    if (!_.isObject(response.auth)) {
                        response.auth = {}
                    }

                    response.auth.user = user
                    response.json({ data: { token, user } })
                }
            )
        })(require, response, next)
    }

    async loginWithPasswort<T>(
        email: string,
        password: string
    ): Promise<{ user: IUser<T>; token: string }> {
        const auth = this.strategy.authenticate()
        return new Promise((res, rej) => {
            auth(email, password, (_, user, error: Error) => {
                if (error) {
                    return rej(new Error(error.message))
                }

                if (!user) {
                    return rej(new Error('User not found'))
                }

                const config = this.strategy.getOptions()
                const data = makePayload(user, config)

                jwt.sign(
                    data,
                    config.secret,
                    { algorithm: config.algorithm },
                    (error, token) => {
                        if (error) {
                            return rej(new Error(error.message))
                        }

                        res({ user, token })
                    }
                )
            })
        })
    }

    async loginWithUser<T>(
        user: IUser<T>
    ): Promise<{ user: IUser<T>; token: string }> {
        return new Promise((res, rej) => {
            if (!user) {
                return rej(new Error('User not found'))
            }

            const config = this.strategy.getOptions()
            const data = makePayload(user, config)

            jwt.sign(
                data,
                config.secret,
                { algorithm: config.algorithm },
                (error, token) => {
                    if (error) {
                        return rej(new Error(error.message))
                    }

                    res({
                        user,
                        token,
                    })
                }
            )
        })
    }
}
