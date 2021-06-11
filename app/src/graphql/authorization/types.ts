import { ArgsType, InputType, ObjectType, Field, ID } from 'type-graphql'
import { PaginatedResponseType, EdgeType, ConnectionType } from '@server/gql'
import { IRole, ROLE_LEVEL } from '@server/auth'
import Role from '../../entities/Authorization/Role'

@ObjectType()
export class Roles extends PaginatedResponseType(Role) {
    // for paginate
}

@ObjectType()
export class RoleNode extends EdgeType(Role) {
    // for paginate
}

@ObjectType()
export class RoleConnection extends ConnectionType(RoleNode) {
    // for paginate
}

@InputType()
export class RoleInput implements Omit<IRole, 'id' | 'permissions'> {
    @Field(() => String)
    name: string

    @Field(() => [ID])
    permissions: number[]

    @Field(() => String, { nullable: true })
    description?: string

    @Field(() => ROLE_LEVEL, { nullable: true, defaultValue: ROLE_LEVEL.USER })
    level?: ROLE_LEVEL

    @Field(() => Boolean, { nullable: true })
    isSpecial?: boolean
}

@InputType()
export class UpdateRoleInput
    implements Partial<Omit<IRole, 'id' | 'permissions'>>
{
    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    description?: string

    @Field(() => [ID], { nullable: true })
    permissions?: number[]

    @Field(() => ROLE_LEVEL, { nullable: true })
    level?: ROLE_LEVEL

    @Field(() => Boolean, { nullable: true })
    isSpecial?: boolean
}

@ArgsType()
export class UpdateRoleArgs {
    @Field(() => ID)
    id: number

    @Field(() => UpdateRoleInput)
    data: UpdateRoleInput
}
