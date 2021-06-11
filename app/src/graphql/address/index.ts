import {
    Arg,
    Args,
    Authorized,
    FieldResolver,
    Mutation,
    Resolver,
    Root,
} from 'type-graphql'
import _ from 'lodash'
import { ArgId } from '@server/gql'

import Address from '../../entities/Location/Address'
import City from '../../entities/Location/City'
import { UpdateAddressInput } from './types'

@Resolver(() => Address)
export class AddressResolver {
    @FieldResolver(() => City, { nullable: true })
    async city(@Root() parent: Address): Promise<City | null> {
        return Promise.resolve(parent?.city).then((city) => {
            if (city) {
                return city
            }

            if (!parent?.cityId) {
                return null
            }

            return City.findByPk(parent.cityId, {
                attributes: ['state_id', 'name', 'id'],
            })
        })
    }

    @Authorized()
    @Mutation(() => Address)
    async updateAddress(
        @Arg('data') { id, ...data }: UpdateAddressInput
    ): Promise<Address> {
        return Address.findByPk(id).then((address) => {
            if (!address) return address

            _.keys(data).map((key) => {
                address[key] = data[key]
            })

            return address.save()
        })
    }

    @Authorized()
    @Mutation(() => Address, { nullable: true })
    async deleteAddress(@Args() { id }: ArgId): Promise<Address | null> {
        return Address.findByPk(id).then((address) =>
            address
                ? Address.destroy({ where: { id } }).then((success) =>
                      success > 0 ? address : null
                  )
                : null
        )
    }
}
