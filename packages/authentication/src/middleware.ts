import passport from 'passport'
import { Request, Response, NextFunction } from 'express'

import {
    ForbiddenError,
    UnavailableTokenError,
    UnauthorizedError,
} from './Errors'
import Authentication from './Authentication'

export default function Middleware<U>(auth: Authentication<U>) {
    return (
        request: Request,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        response: Response & { auth: any },
        next: NextFunction
    ): void => {
        passport.authenticate(
            'jwt',
            { session: auth.strategy.isSession() },
            async (error, user, info) => {
                response.auth = {}

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
                    response.auth.token = auth.strategy.extractToken(request)
                    response.auth.user = user
                    next()
                })
            }
        )(request, response)
    }
}
