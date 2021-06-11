import { Args, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import { Op } from 'sequelize'
import { ArgId, likeSearch } from '@server/gql'

import Country from '../../entities/Location/Country'
import State from '../../entities/Location/State'

import { CountriesArg, NestedPlace } from './types'

@Resolver(() => Country)
export class CountryResolver {
    @FieldResolver(() => [State])
    async states(
        @Args() { name, ...cursor }: NestedPlace,
        @Root() country: Country
    ): Promise<State[]> {
        const namefilter = likeSearch(name)

        let filters: Record<string, unknown> = {
            country_id: country.id,
        }

        if (!namefilter?.name) {
            filters = {
                [Op.and]: {
                    country_id: country.id,
                    ...namefilter,
                },
            }
        }

        return State.findAll({
            ...cursor,
            where: filters,
        })
    }

    @Query(() => Country, { nullable: true })
    async country(@Args() { id }: ArgId): Promise<Country | null> {
        return Country.findByPk(id)
    }

    @Query(() => [Country])
    async countries(
        @Args() { name, ...cursor }: CountriesArg
    ): Promise<Country[]> {
        return Country.findAll({
            ...cursor,
            where: likeSearch(name),
        })
    }
}
