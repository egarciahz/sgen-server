import { InputType, Field, ID, ArgsType } from 'type-graphql'
import Address from '../../entities/Location/Address'

@InputType()
export class AddressInput implements Partial<Address> {
    @Field(() => ID)
    cityId: number

    @Field(() => String)
    address: string

    @Field(() => String)
    name: string
}

@InputType()
export class UpdateAddressInput implements Partial<Address> {
    @Field(() => ID, { nullable: true })
    cityId?: number

    @Field(() => String, { nullable: true })
    address?: string

    @Field(() => String, { nullable: true })
    name?: string
}

@ArgsType()
export class UpdateAddressArgs {
    @Field(() => ID)
    id: number

    @Field(() => UpdateAddressInput)
    data: UpdateAddressInput
}

@ArgsType()
export class CreateAddressArgs {
    data: AddressInput
}
