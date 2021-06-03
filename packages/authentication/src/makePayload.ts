import { IUser } from './Interfaces'

type PayloadOptions = {
    keyName: string
    expiresIn: number
}

// eslint-disable-next-line @typescript-eslint/ban-types
export default function makePayload<U extends IUser<{}>>(
    user: U,
    { keyName, expiresIn }: PayloadOptions
): string {
    const payload = {
        exp: expiresIn,
        sub: user.id,
        [keyName]: user[keyName],
    }

    return JSON.stringify(payload)
}
