import { Args, Authorized, Mutation, Resolver } from 'type-graphql'
import {
    ArgId,
    // ArgPaginate,
    // PaginatedResponseType,
    // EdgeType,
    // ConnectionType,
    // ConnectionArgs,
} from '@server/gql'
import Phone from '../../entities/Phone'
import Person from '../../entities/Org/People'
import PersonPhones from '../../entities/Org/People/PersonPhones'
import { AddPhoneArgs } from './inputs'

// @ObjectType()
// export class Phones extends PaginatedResponseType(Phone) {
//     // for paginate
// }

// @ObjectType()
// export class PhoneNode extends EdgeType(Phone) {
//     // for paginate
// }

// @ObjectType()
// export class PhoneConnection extends ConnectionType(PhoneNode) {
//     // for paginate
// }

@Resolver(() => Phone)
export class PhoneResolver {
    // @Query(() => [Phone])
    // async phones(@Args() { limit, offset }: ArgPaginate): Promise<Phone[]> {
    //     return Phone.findAll({
    //         limit, offset
    //     })
    // }

    // @Query(() => PhoneConnection)
    // async phoneConnection(@Args() { last, first, ...cursor }: ConnectionArgs): Promise<PhoneConnection> {
    //     const limit = first !== null ? first : last;
    //     return Phone.paginate({
    //         ...cursor,
    //         limit,
    //     });
    // }

    @Authorized()
    @Mutation(() => Phone, { nullable: true })
    async deletePhone(@Args() { id }: ArgId): Promise<Phone | null> {
        return Phone.findByPk(id).then((phone) =>
            phone
                ? Phone.destroy({ where: { id } }).then((success) =>
                      success > 0 ? phone : null
                  )
                : null
        )
    }

    @Authorized()
    @Mutation(() => Person)
    async addPersonPhones(
        @Args() { id, phones }: AddPhoneArgs
    ): Promise<Person> {
        const has = await Person.findByPk(id, {
            attributes: ['id'],
            include: [],
        }).then((person) => Boolean(person?.id))

        if (!has) {
            throw new Error(`Person from id (${id}) not found.`)
        }

        return PersonPhones.bulkCreate(
            phones.map((phone) => ({ personId: id, phone })),
            {
                include: [
                    {
                        model: Phone,
                        as: 'phone',
                        foreignKey: 'phoneId',
                    },
                ],
            }
        ).then(() => {
            return Person.findByPk(id)
        })
    }
}
