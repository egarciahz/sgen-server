import {
    Args,
    Arg,
    FieldResolver,
    Query,
    Resolver,
    Root,
    Mutation,
    Authorized,
} from 'type-graphql'
import { Op } from 'sequelize'
import { likeSearch, ArgId } from '@server/gql'

import City from '../../entities/Location/City'
import State from '../../entities/Location/State'
import Country from '../../entities/Location/Country'

import { CitiesArg, NewCityInput } from './types'

@Resolver(() => City)
export class CityResolver {
    @FieldResolver(() => State, { nullable: true })
    async state(@Root() parent: City): Promise<State | null> {
        return Promise.resolve(parent.state).then(async (state) => {
            if (state) {
                return state
            }

            if (!parent.state_id) {
                return null
            }

            return await State.findByPk(parent.state_id)
        })
    }

    @Query(() => City, { nullable: true })
    async city(@Args() { id }: ArgId): Promise<City | null> {
        return City.findByPk(id)
    }

    @Query(() => [City])
    async cities(
        @Args() { stateId, name, ...cursor }: CitiesArg
    ): Promise<City[]> {
        const namefilter = likeSearch(name)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let filters: Record<string, any> = {
            state_id: stateId,
        }
        if (!namefilter?.name) {
            filters = {
                [Op.and]: {
                    state_id: stateId,
                    ...namefilter,
                },
            }
        }
        return City.findAll({
            ...cursor,
            where: filters,
        })
    }

    @Authorized()
    @Mutation(() => City)
    async createCity(@Arg('data') data: NewCityInput): Promise<City> {
        return City.create(data, {
            include: [
                {
                    model: State,
                    include: [Country],
                },
            ],
        })
    }
}
