import { IUser, IAuth, IID } from './Interfaces'

// eslint-disable-next-line @typescript-eslint/ban-types
export default class Auth<U extends {}> implements IAuth<U> {
    id: IID
    user: IUser<U>
    token: string
    constructor(user: IUser<U>, token: string) {
        this.id = user.id
        this.user = user
        this.token = token
    }
}
