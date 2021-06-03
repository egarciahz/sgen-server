import { IUser } from './IUser'

type Payload = {
    data: string
    secret: string
}

type PayloadOptions = {
    keyname: string
    exp: string | Date
    secret: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
export default function makePayload<U extends IUser<{}>>(
    user: U,
    { keyname, exp, secret }: PayloadOptions
): Payload {
    const payload = {
        exp,
        sub: user.id,
        [keyname]: user[keyname],
    }

    return {
        secret,
        data: JSON.stringify(payload),
    }
}
