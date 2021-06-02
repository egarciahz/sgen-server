import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Request, NextFunction } from 'express';

import makePayload from './makePayload';
import AuthResponse from './AuthResponse';
import Strategy from './Strategy';
import { IUser } from './IUser';

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
export default class Authentication {

    debug = true;
    strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    login = (require: Request, response: AuthResponse, next: NextFunction): void => {
        passport.authenticate("local", { session: false }, (error, user) => {
            if (error) {
                if (this.debug && error.message) console.error("authenticate jwt:", error.message);
                return next(error);
            }

            if (!user) {
                return next(new Error("User not found"))
            }

            const { data, ...config } = makePayload(user);
            jwt.sign(data, config.secret, { algorithm: config.algorithm }, (error, token) => {
                if (error) {
                    return next(error);
                }
                response.user = user;
                response.json({ data: { token, user } });
            })
        })(require, response, next);
    }

    async loginWithPasswort<U extends IUser = IUser>(email: string, password: string): Promise<{ user: U, token:string }> {
        const auth = this.strategy.authenticate();
        return new Promise((res, rej) => {
            auth(email, password, (_, user, error: Error) => {
                if (error) {
                    return rej(new Error(error.message));
                }
                if (!user) {
                    return rej(new Error("User not found"));
                }

                const { data, ...config } = makePayload(user);
                jwt.sign(data, config.secret, { algorithm: config.algorithm }, (error, token) => {
                    if (error) {
                        return rej(new Error(error.message));
                    }

                    res({ user, token });
                })
            });
        })
    }

    async loginWithUser<U extends IUser>(user: U): Promise<{ user: U, token:string }> {
        return new Promise((res, rej) => {
            if (!user) {
                return rej(new Error("User not found"));
            }

            const { data, ...config } = makePayload(user);
            jwt.sign(data, config.secret, { algorithm: config.algorithm }, (error, token) => {
                if (error) {
                    return rej(new Error(error.message));
                }

                res({
                    user,
                    token
                });
            });
        });
    }
}