import passport from 'passport'
import { Request, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import {
    ForbiddenError,
    UnavailableTokenError,
    UnauthorizedError,
} from './errors'
import AuthResponse from './AuthResponse'
import Authentication from './Authentication'

export default function Middleware(auth: Authentication) {
    return (
        request: Request,
        response: AuthResponse,
        next: NextFunction
    ): void => {
        passport.authenticate(
            'jwt',
            { session: false },
            async (error, user, info) => {
                response.auth = {
                    info: null,
                    error: null,
                    token: null,
                }

                if (auth.debug && (info || error)) {
                    console.info(
                        'ensureJwt Info:',
                        JSON.stringify({ info: info.message, user, error })
                    )
                }

                if (info) {
                    switch (info.name) {
                        case 'JsonWebTokenError':
                            response.auth.info = new UnavailableTokenError(
                                info.message
                            )
                            break
                        case 'TokenExpiredError':
                            response.auth.info = new ForbiddenError(
                                'Token has been expired'
                            )
                            break
                        case 'Error':
                            response.auth.info = null
                            break
                        default:
                            response.auth.info = new ForbiddenError(
                                info.message
                            )
                    }

                    if (response.auth.info) {
                        return next()
                    }
                }

                if (error) {
                    response.auth.error = new UnauthorizedError(error.message)
                    return next()
                }

                const deserializer = auth.strategy.deserialize()
                deserializer(user.email, () => null).then((user) => {
                    response.auth.token = request.headers.authorization
                    response.user = user
                    next()
                })
            }
        )(request, response)
    }
}
