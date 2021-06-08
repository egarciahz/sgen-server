/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
    // omit,
    // pick,
    // keys,
    pickBy,
    identity,
    capitalize,
    isBoolean,
} from 'lodash'
import {
    // Arg,
    Authorized,
    FieldResolver,
    Query,
    Resolver,
    Root,
    Mutation,
    Args,
    ObjectType,
    Ctx,
} from 'type-graphql'
import { Includeable, Op } from 'sequelize'
// import moment from 'moment'
import Person from '../../entities/Org/People'
// import PersonPhone from '../../entities/Org/People/PersonPhones'
// import PersonAddress from '../../entities/Org/People/PersonAddress'
// import Address from '../../entities/Location/Address'
import User from '../../entities/User'
// import Phone from '../../entities/Phone'
import Tenant from '../../entities/Tenant'

import { likeSearch, ArgId, EdgeType, ConnectionType } from '@server/gql'
// import { NewPersonInput } from './inputs'
import {
    PeopleFilter,
    // PeopleConnectionArg,
    // UpdatePersonArg,
} from './types'

@ObjectType()
export class PersonNode extends EdgeType(Person) {
    // for paginate
}

@ObjectType()
export class PeopleConnection extends ConnectionType(PersonNode) {
    // for paginate
}

@Resolver(() => Person)
export class PersonResolver {
    @FieldResolver(() => String)
    fullname(@Root() person: Person): string {
        return capitalize(
            [person?.firstname, person?.lastname]
                .filter((name) => name && name.length > 0)
                .join(' ')
        )
    }

    @FieldResolver(() => Tenant)
    async tenant(@Root() parent: Person): Promise<Tenant> {
        return Tenant.findOne({
            where: {
                id: parent.tenantId,
            },
            attributes: ['id', 'name', 'token'],
            include: [],
        })
    }

    @FieldResolver(() => User, { nullable: true })
    async user(@Root() parent: Person): Promise<User | null> {
        return User.scope('auth').findOne({
            where: {
                ownerId: parent.id,
            },
        })
    }

    @FieldResolver(() => Boolean)
    async isUser(@Root() parent: Person): Promise<boolean> {
        return User.findOne({
            attributes: ['id'],
            include: [],
            where: {
                ownerId: parent.id,
            },
        }).then((user) => !!user?.id)
    }

    @Authorized()
    @Query(() => Person, { nullable: true })
    async person(
        @Args() { id }: ArgId,
        @Ctx() { response }: any
    ): Promise<Person | null> {
        id = id || response.user.ownerId
        return Person.scope('all').findByPk(id)
    }

    @Authorized()
    @Query(() => [Person])
    async people(
        @Args()
        { isUser, fullname, tenantId, ...cursor }: PeopleFilter
    ): Promise<Person[]> {
        const include: Includeable[] = []

        let filter: Record<string, unknown> = pickBy(
            {
                tenantId,
            },
            identity
        )

        if (likeSearch(fullname)?.name) {
            filter = {
                ...filter,
                [Op.or]: {
                    ...likeSearch(fullname, {
                        fieldName: 'firstname',
                        mode: 'start',
                    }),
                    ...likeSearch(fullname, {
                        fieldName: 'lastname',
                        mode: 'flex',
                    }),
                },
            }
        }

        if (isBoolean(isUser)) {
            include.push({
                as: 'user',
                model: User,
                required: isUser,
            })
            if (!isUser) {
                filter = {
                    ...filter,
                    '$user.id$': { [Op.is]: null },
                }
            }
        }

        return Person.findAll({
            ...cursor,
            include,
            subQuery: false,
            where: filter,
        })
    }

    // @Authorized(['admin'])
    // @Query(() => PeopleConnection)
    // async peopleConnection(@Args() { first, last, ...rest }: PeopleConnectionArg): Promise<PeopleConnection> {
    //     const limit = first !== null ? first : last;
    //     const { isUser, fullname, tenantId } = pick(rest, ['tenantId', 'isUser', 'fullname']);
    //     const cursor = pick(rest, ['after', 'before']);
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     const include: any[] = [];

    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     let filter: Record<string, any> = {
    //         tenantId,
    //     }

    //     if (likeSearch(fullname)?.name) {
    //         filter = {
    //             [Op.and]: {
    //                 ...filter,
    //                 [Op.or]: {
    //                     ...likeSearch(fullname, { fieldName: "firstname" }),
    //                     ...likeSearch(fullname, { fieldName: "lastname" }),
    //                 }
    //             }
    //         }
    //     }

    //     if (isBoolean(isUser)) {
    //         include.push({
    //             as: 'user',
    //             model: User,
    //             required: isUser
    //         });

    //         if (!isUser) {
    //             filter = {
    //                 ...filter,
    //                 "$user.id$": { [Op.is]: null }
    //             }
    //         }
    //     }

    //     return Person.paginate({
    //         limit,
    //         include,
    //         subQuery: false,
    //         where: filter,
    //         ...cursor,
    //     });
    // }

    // @Authorized(['admin'])
    // @Mutation(() => Person, { nullable: true })
    // async createPerson(
    //     @Arg('data') data: NewPersonInput
    // ): Promise<Person | null> {
    //     return Person.create(
    //         { ...data },
    //         {
    //             include: [Address, Phone, User],
    //         }
    //     )
    // }

    // @Authorized(['admin'])
    // @Mutation(() => Person)
    // async updatePerson(
    //     @Args() { id, data }: UpdatePersonArg
    // ): Promise<Person | null> {
    //     const { phones, addresses, ...person } = data
    //     const phonesmap = mapAdditionals(phones)
    //     const addresssmap = mapAdditionals(addresses)
    //     console.log(addresssmap)

    //     return Promise.all([
    //         person &&
    //             keys(person).length > 0 &&
    //             Person.update(person, {
    //                 where: {
    //                     id,
    //                 },
    //             }),
    //         employeeProfile &&
    //             keys(employeeProfile).length > 0 &&
    //             Employee.update(omit(employeeProfile, 'id'), {
    //                 where: pick(employeeProfile, 'id'),
    //             }),
    //         PersonPhone.bulkCreate(
    //             phonesmap.insert.map((phone) => ({ phone, personId: id })),
    //             {
    //                 ignoreDuplicates: true,
    //                 include: [
    //                     {
    //                         model: Phone,
    //                         as: 'phone',
    //                     },
    //                 ],
    //             }
    //         ),
    //         Phone.bulkCreate(phonesmap.update, {
    //             ignoreDuplicates: false,
    //             updateOnDuplicate: ['number', 'type'],
    //         }),
    //         PersonAddress.bulkCreate(
    //             addresssmap.insert.map((address) => ({
    //                 address,
    //                 personId: id,
    //             })),
    //             {
    //                 ignoreDuplicates: true,
    //                 include: [
    //                     {
    //                         model: Address,
    //                         as: 'address',
    //                     },
    //                 ],
    //             }
    //         ),
    //         Address.bulkCreate(addresssmap.update, {
    //             ignoreDuplicates: false,
    //             updateOnDuplicate: ['cityId', 'name', 'address'],
    //         })
    //             .then((res) => console.log(res))
    //             .catch((err) => console.error(err)),
    //     ]).then(() => Person.scope('all').findByPk(id))
    // }

    @Authorized(['admin'])
    @Mutation(() => Person, { nullable: true })
    async deletePerson(@Args() { id }: ArgId): Promise<Person | null> {
        return Person.findByPk(id).then((person) =>
            person ? person.destroy().then(() => person) : null
        )
    }
}
