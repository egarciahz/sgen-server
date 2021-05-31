import { SignOptions } from 'jsonwebtoken';
import { JWT_SIGN_TOKEN } from '../../config/auth/config';
import { IUser } from './IUser';

type Payload = SignOptions & {
    data: string,
    secret: string
};

export default function makePayload<U extends IUser>(user: U, usernameKey: keyof U = 'email'): Payload {
    const payload = {
        sub: user.id,
        exp: JWT_SIGN_TOKEN.expiresIn,
        [usernameKey]: user[usernameKey]
    };

    return {
        ...JWT_SIGN_TOKEN,
        data: JSON.stringify(payload)
    };
}