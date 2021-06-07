import { Strategy, Authentication } from '@server/auth'

export const KeyName = 'email'
export const Algorithm = 'HS256'

const auth = new Authentication(
    new Strategy({
        algorithm: Algorithm,
        expiresIn: 1000 * 60 * 60,
        keyName: KeyName,
        passwordField: 'password',
        usernameField: 'email',
        secret: 'the_g1g0-secret',
        async finder(email) {
            console.log(email)
            if (!email) {
                return Promise.resolve(null)
            }

            return Promise.resolve(null)
        },
    })
)

export default auth
