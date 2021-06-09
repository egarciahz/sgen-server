import { InputType, Field, ID, ArgsType } from 'type-graphql'
import Phone, { PHONE_TYPE } from '../../entities/Phone'

@ArgsType()
export class AddPhoneArgs {
    @Field(() => ID)
    id: number

    @Field(() => [NewPhoneInput])
    phones: NewPhoneInput[]
}

@InputType()
export class NewPhoneInput implements Partial<Phone> {
    @Field(() => String)
    number: string

    @Field(() => PHONE_TYPE)
    type: PHONE_TYPE
}

@InputType()
export class UpdatePhoneInput implements Partial<Phone> {
    @Field(() => ID, { defaultValue: 'new' })
    id: number

    @Field(() => String, { nullable: true })
    number?: string

    @Field(() => PHONE_TYPE, { nullable: true })
    type?: PHONE_TYPE
}
