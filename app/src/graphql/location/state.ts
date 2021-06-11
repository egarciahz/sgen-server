import { Args, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import { Op } from 'sequelize'
import { ArgId, likeSearch } from '@server/gql'

import City from '../../entities/Location/City'
import State from '../../entities/Location/State'
import Country from '../../entities/Location/Country'

import { StatesArg, NestedPlace } from './types'

@Resolver(() => State)
export class StateResolver {
    @FieldResolver(() => Country, { nullable: true })
    async country(@Root() parent: State): Promise<Country | null> {
        return Promise.resolve(parent?.country).then((country) => {
            if (country) {
                return country
            }

            if (!parent?.country_id) {
                return null
            }

            return Country.findByPk(parent.country_id)
        })
    }

    @FieldResolver(() => [City])
    async cities(
        @Args() { name, ...cursor }: NestedPlace,
        @Root() state: State
    ): Promise<City[]> {
        const namefilter = likeSearch(name)

        let filters: Record<string, unknown> = {
            state_id: state.id,
        }

        if (!namefilter?.name) {
            filters = {
                [Op.and]: {
                    state_id: state.id,
                    ...namefilter,
                },
            }
        }

        return City.findAll({
            ...cursor,
            where: filters,
        })
    }

    @Query(() => [State])
    async states(
        @Args() { name, countryId, ...cursor }: StatesArg
    ): Promise<State[]> {
        const namefilter = likeSearch(name)
        let filters: Record<string, unknown> = {}
        
        if(countryId) filters.country_id = countryId
        
        if (!namefilter?.name) {
            filters = {
                [Op.and]: {
                    ...filters,
                    ...namefilter,
                },
            }
        }

        return State.findAll({
            ...cursor,
            where: filters,
        })
    }

    @Query(() => State, { nullable: true })
    async state(@Args() { id }: ArgId): Promise<State | null> {
        return State.findByPk(id)
    }
}
