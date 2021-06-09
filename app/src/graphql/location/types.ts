import { ArgsType, Field, InputType, ID } from 'type-graphql'
import { ArgPaginate } from '@server/gql'

import City from '../../entities/Location/City'

@ArgsType()
export class CountriesArg extends ArgPaginate {
    @Field(() => String, { nullable: true })
    name?: string
}

@ArgsType()
export class NestedPlace extends ArgPaginate {
    @Field(() => String, { nullable: true })
    name?: string
}

@ArgsType()
export class StatesArg extends ArgPaginate {
    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => ID, { nullable: true })
    countryId?: number
}

@ArgsType()
export class CitiesArg extends ArgPaginate {
    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => ID, { nullable: true })
    stateId?: number
}

@InputType()
export class NewCityInput implements Partial<City> {
    @Field(() => String)
    name: string

    @Field(() => ID)
    state_id: number
}
