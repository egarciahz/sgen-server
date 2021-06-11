import { ObjectType, InputType, Field, ID, ArgsType } from 'type-graphql'
import {
    ArgId,
    ArgPaginate,
    EdgeType,
    ConnectionType,
    ConnectionArgs,
} from '@server/gql'
import User from '../../entities/User'

@ObjectType()
export class UserNode extends EdgeType(User) {
    // for paginate
}

@ObjectType()
export class UserConnection extends ConnectionType(UserNode) {
    // for paginate
}

@ArgsType()
export class UserConnectionArgs extends ConnectionArgs {
    @Field(() => String, {
        description: 'to filter by email match',
        nullable: true,
    })
    email?: string
}

@ArgsType()
export class UsersArgs extends ArgPaginate {
    @Field(() => String, {
        description: 'to filter by email match',
        nullable: true,
    })
    email?: string
}

@ArgsType()
export class UserStatus extends ArgId {
    @Field(() => Boolean)
    active: boolean
}

@InputType()
export class Autorization {
    @Field(() => ID)
    roleId: number

    @Field(() => [ID])
    permissionIds: number[]
}

@InputType()
export class UserPermissionsInput {
    @Field(() => ID)
    id: number

    @Field(() => [ID])
    permissionIds: number[]
}

@InputType()
export class UserAuthorizationInput {
    @Field(() => ID)
    id: number

    @Field(() => [ID])
    statementsIds: number[]
}

@InputType()
export class NewUserInput
    implements Partial<Omit<User, 'roles' | 'permissions' | 'owner'>>
{
    @Field(() => String)
    email: string

    @Field(() => String)
    password: string

    @Field(() => Boolean)
    active: boolean

    @Field(() => Boolean)
    verify: boolean

    @Field(() => [ID])
    permissions: number[]

    @Field(() => [ID])
    roles: number[]

    @Field(() => ID, {
        nullable: true,
        description:
            'This field is optional in the case of a nested creation from a owner',
    })
    ownerId?: number
}
