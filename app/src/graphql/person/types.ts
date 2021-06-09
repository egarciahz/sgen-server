import { InputType, Field, ID, ArgsType } from 'type-graphql'
import { ArgId, ArgPaginate, ConnectionArgs } from '@server/gql'

import Person, { GENDER } from '../../entities/Org/People'

@ArgsType()
export class UpdatePersonArg extends ArgId {
    @Field(() => UpdatePersonInput)
    data: UpdatePersonInput
}

@ArgsType()
export class PeopleFilter extends ArgPaginate implements Partial<Person> {
    @Field(() => ID)
    tenantId: number

    @Field(() => Boolean, { nullable: true })
    isUser?: boolean

    @Field(() => String, { nullable: true })
    fullname?: string
}

@ArgsType()
export class PeopleFilterCon extends ConnectionArgs implements Partial<Person> {
    @Field(() => ID)
    tenantId: number

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
    firstname: string

    @Field(() => String)
    lastname: string

    @Field(() => GENDER)
    gender: GENDER

    @Field(() => Date)
    dateOfBirth: Date

    @Field(() => ID)
    tenantId: number

    // @Field(() => [NewAddressInput])
    // addresses: NewAddressInput[]

    // @Field(() => [NewPhoneInput])
    // phones: NewPhoneInput[]

    // @Field(() => NewUserInput, { nullable: true })
    // user?: NewUserInput
}

@InputType()
export class UpdatePersonInput
    implements Partial<Omit<Person, 'user' | 'addresses' | 'phones'>>
{
    @Field(() => String, { nullable: true })
    firstname?: string

    @Field(() => String, { nullable: true })
    lastname?: string

    @Field(() => GENDER, { nullable: true })
    gender?: GENDER

    @Field(() => Date, { nullable: true })
    dateOfBirth?: Date

    @Field(() => Boolean, { nullable: true })
    isIntegrator?: boolean

    // @Field(() => [UpdateAddressInput], { nullable: 'itemsAndList' })
    // addresses?: UpdateAddressInput[]

    // @Field(() => [UpdatePhoneInput], { nullable: 'itemsAndList' })
    // phones?: UpdatePhoneInput[]
}
