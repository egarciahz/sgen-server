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

@ArgsType()
export class UpdateLisenceCount {
    @Field(() => ID)
    id: number

    @Field(() => Int)
    lisenceCount: number
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
        description: 'initialize enabled licence count for this tenant',
        nullable: true,
    })
    enabledLicenceCount: number
}

@InputType()
export class UpdateTenantInput implements Partial<Tenant> {
    @Field(() => String)
    name: string

    @Field(() => String)
    description: string
}

@ArgsType()
export class UpdateTenantArgs {
    @Field(() => ID)
    id: number

    @Field(() => UpdateTenantInput)
    data: UpdateTenantInput
}

@ObjectType()
export class TenantNode extends EdgeType(Tenant) {
    // for paginate
}

@ObjectType()
export class TenantConnection extends ConnectionType(TenantNode) {
    // for paginate
}
