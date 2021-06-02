import crypto from 'crypto';
import _ from 'lodash';

interface PasswordOptions {
    salten: number
    keylen: number
    iterations: number
    digest: string
}

export type PasswordChunk = {
    salt: string
    hash: string
}

const defaultPasswordOptions: PasswordOptions = {
    salten: 32,
    keylen: 100,
    iterations: 12000,
    digest: 'sha1'
}

export default class Secret {

    static async has(password: string, { salt, hash }: PasswordChunk, options?: Partial<PasswordOptions>): Promise<boolean> {
        options = _.defaults(options || {}, defaultPasswordOptions);

        if (!salt || !hash || !password) {
            return Promise.reject({ message: "Invalid argument definitions [password,hash,salt] " })
        }

        return new Promise<boolean>((res, rej) => {
            crypto.pbkdf2(password, salt, options.iterations, options.keylen, options.digest, (err, hashRaw) => {
                if (err) {
                    return rej(err);
                }

                const _hash = Buffer.from(hashRaw).toString('hex');
                if (_hash === hash) {
                    return res(true);
                }

                rej({ message: "Incorrect Password" });
            });
        })
    }

    static async make(password: string, options?: Partial<PasswordOptions>): Promise<PasswordChunk> {
        options = _.defaults(options || {}, defaultPasswordOptions);
        return new Promise<PasswordChunk>((res, rej) => {
            crypto.randomBytes(options.salten, (err, buf) => {
                if (err) {
                    return rej(err);
                }

                const salt = buf.toString('hex');
                crypto.pbkdf2(password, salt, options.iterations, options.keylen, options.digest, (err2, hashRaw) => {
                    if (err2) {
                        return rej(err2);
                    }

                    res({
                        hash: Buffer.from(hashRaw).toString('hex'),
                        salt
                    });
                });
            });
        });
    }

    static async token(length = 8): Promise<string> {
        return new Promise<string>((res, rej) => {
            crypto.randomBytes(length, (err, buf) => {
                if (err) {
                    return rej(err);
                }

                res(buf.toString('hex'));
            });
        })
    }
}
