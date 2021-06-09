import { Field, ArgsType, ID, Int, InputType, ObjectType } from 'type-graphql'
import { EdgeType, ConnectionType } from '@server/gql'
import Tenant from '../../entities/Tenant'

@ArgsType()
export class TenantFilter implements Partial<Tenant> {
    @Field(() => ID, { nullable: true })
    id?: number

    @Field(() => String, { nullable: true })
    token?: string
}

@InputType()
export class NewTenantInput implements Partial<Tenant> {
    @Field(() => String, {
        nullable: true,
        description:
            'Optional field, set the token value for this tenant, otherwise the system will generate it for you',
    })
    token?: string

    @Field(() => String)
    name: string

    @Field(() => String)
    description: string

    @Field(() => Int, {
        defaultValue: 20,
        description: 'initialize available licence count for this tenant',
        nullable: true,
    })
    availableLicenceCount?: number

    @Field(() => Boolean, { nullable: true })
    active?: boolean
}

@ObjectType()
export class TenantNode extends EdgeType(Tenant) {
    // for paginate
}

@ObjectType()
export class TenantConnection extends ConnectionType(TenantNode) {
    // for paginate
}

@ObjectType({
    description: 'Summary of tenant resources, staff and dependencies',
})
export class TenantResumen implements Partial<Omit<Tenant, 'users'>> {
    @Field(() => ID, {
        description: 'Tenant Id',
    })
    id: number

    @Field(() => String)
    name: string

    @Field(() => String)
    token: string

    @Field(() => Int, {
        description: 'Total people Count for this Tenant',
        defaultValue: 0,
    })
    peopleCount: number

    @Field(() => Int, {
        description: 'Total enableds licence count for this Tenant',
        defaultValue: 0,
    })
    enabledLicencesCount: number

    @Field(() => Int)
    availableLicenceCount: number

    @Field(() => String, {
        description: 'Description of tenant',
        nullable: true,
    })
    description?: string
}
