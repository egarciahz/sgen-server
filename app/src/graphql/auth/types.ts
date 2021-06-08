import { Field, InputType, ObjectType, ID } from 'type-graphql'
import { IAuth } from '@server/auth'
import User from '../../entities/User'

@InputType()
export class SiginIn {
    @Field(() => String)
    username: string

    @Field(() => String)
    password: string
}

@InputType()
export class ChangePassword {
    @Field(() => String)
    newPassword: string

    @Field(() => String)
    password: string
}

@ObjectType()
export class Auth implements IAuth<unknown> {
    @Field(() => ID, { nullable: true })
    id: number

    @Field(() => User, { nullable: true })
    user: User

    @Field(() => String, { nullable: true })
    token: string

    constructor(user: User, token: string) {
        this.user = user
        this.token = token
        this.id = user.id as number
    }
}
