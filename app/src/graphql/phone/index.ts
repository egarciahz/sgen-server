import { Args, Authorized, Mutation, Resolver } from 'type-graphql'
import { ArgId } from '@server/gql'

import Phone from '../../entities/Phone'
import Person from '../../entities/Org/People'
import PersonPhones from '../../entities/Org/People/PersonPhones'
import { AddPhoneArgs } from './types'

@Resolver(() => Phone)
export class PhoneResolver {

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
