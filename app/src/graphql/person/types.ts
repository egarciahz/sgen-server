import { InputType, Field, ArgsType } from 'type-graphql'
import { ArgId, ArgPaginate, ConnectionArgs } from '@server/gql'

import Person, { GENDER } from '../../entities/Org/People'
import { NewUserInput } from '../user/types'
import { PhoneInput, UpdatePhoneInput } from '../phone/types'
import { AddressInput, UpdateAddressInput } from '../address/types'

@ArgsType()
export class PeopleFilter extends ArgPaginate {
    @Field(() => Boolean, { nullable: true })
    isUser?: boolean

    @Field(() => String, { nullable: true })
    fullname?: string
}

@ArgsType()
export class PeopleFilterConnection extends ConnectionArgs {
    @Field(() => Boolean, { nullable: true })
    isUser?: boolean

    @Field(() => String, { nullable: true })
    fullname?: string
}

@InputType()
export class NewPersonInput
    implements Partial<Omit<Person, 'user' | 'addresses' | 'phones'>>
{
    @Field(() => String)
    dni: string

    @Field(() => String)
    firstname: string

    @Field(() => String)
    lastname: string

    @Field(() => GENDER)
    gender: GENDER

    @Field(() => Date)
    dateOfBirth: Date

    @Field(() => [AddressInput])
    addresses: AddressInput[]

    @Field(() => [PhoneInput])
    phones: PhoneInput[]

    @Field(() => NewUserInput, { nullable: true })
    user?: NewUserInput
}

@InputType()
export class UpdatePersonInput
    implements Partial<Omit<Person, 'user' | 'addresses' | 'phones'>>
{
    @Field(() => String, { nullable: true })
    dni?: string

    @Field(() => String, { nullable: true })
    firstname?: string

    @Field(() => String, { nullable: true })
    lastname?: string

    @Field(() => GENDER, { nullable: true })
    gender?: GENDER

    @Field(() => Date, { nullable: true })
    dateOfBirth?: Date

    @Field(() => [UpdateAddressInput], { nullable: 'itemsAndList' })
    addresses?: UpdateAddressInput[]

    @Field(() => [UpdatePhoneInput], { nullable: 'itemsAndList' })
    phones?: UpdatePhoneInput[]
}

@ArgsType()
export class UpdatePersonArg extends ArgId {
    @Field(() => UpdatePersonInput)
    data: UpdatePersonInput
}
