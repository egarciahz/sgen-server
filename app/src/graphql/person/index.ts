import { keys, pickBy, identity, capitalize, isBoolean } from 'lodash'
import {
    Arg,
    Authorized,
    FieldResolver,
    Query,
    Resolver,
    Root,
    Mutation,
    Args,
    ObjectType,
} from 'type-graphql'
import { Includeable, Op } from 'sequelize'
import { likeSearch, ArgId, EdgeType, ConnectionType } from '@server/gql'
import { mapAdditionals } from '@server/core'

import Person from '../../entities/Org/People'
import PersonPhone from '../../entities/Org/People/PersonPhones'
import PersonAddress from '../../entities/Org/People/PersonAddress'
import Address from '../../entities/Location/Address'
import User from '../../entities/User'
import Phone from '../../entities/Phone'
import Tenant from '../../entities/Tenant'

import { UseAuth, IUseAuth } from '../../auth'
import {
    PeopleFilter,
    NewPersonInput,
    // PeopleConnectionArg,
    UpdatePersonArg,
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
            attributes: ['id', 'name', 'description', 'token'],
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
    async person(@Args() { id }: ArgId): Promise<Person | null> {
        return Person.scope('all').findByPk(id)
    }

    @Authorized()
    @Query(() => [Person])
    async people(
        @Args()
        { isUser, fullname, ...cursor }: PeopleFilter,
        @UseAuth() { user: { tenantId } }: IUseAuth
    ): Promise<Person[]> {
        const include: Includeable[] = []

        let filter: Record<string, unknown> = pickBy(
            {
                tenantId,
            },
            identity
        )
        // asd
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

    @Authorized(['administrator'])
    @Mutation(() => Person, { nullable: true })
    async createPerson(
        @Arg('data') data: NewPersonInput,
        @UseAuth() { user: { tenantId } }: IUseAuth
    ): Promise<Person | null> {
        return Person.create(
            { tenantId, ...data },
            {
                include: [Address, Phone, User],
            }
        )
    }

    @Authorized(['administrator'])
    @Mutation(() => Person, { nullable: true })
    async updatePerson(
        @Args() { id, data }: UpdatePersonArg,
        @UseAuth() { user: { tenantId } }: IUseAuth
    ): Promise<Person | null> {
        const { phones, addresses, ...person } = data
        const phonesmap = mapAdditionals(phones)
        const addresssmap = mapAdditionals(addresses)
        const matchPerson = await Person.findOne({
            where: { id, tenantId },
            attributes: ['id'],
        })
        // if don't match return null
        if (!matchPerson?.id) return null

        return Promise.all([
            person &&
                keys(person).length > 0 &&
                Person.update(person, {
                    where: {
                        id,
                    },
                }),
            PersonPhone.bulkCreate(
                phonesmap.insert.map((phone) => ({ phone, personId: id })),
                {
                    ignoreDuplicates: true,
                    include: [
                        {
                            model: Phone,
                            as: 'phone',
                        },
                    ],
                }
            ),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Phone.bulkCreate(phonesmap.update as any, {
                ignoreDuplicates: false,
                updateOnDuplicate: ['number', 'type'],
            }),
            PersonAddress.bulkCreate(
                addresssmap.insert.map((address) => ({
                    address,
                    personId: id,
                })),
                {
                    ignoreDuplicates: true,
                    include: [
                        {
                            model: Address,
                            as: 'address',
                        },
                    ],
                }
            ),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Address.bulkCreate(addresssmap.update as any, {
                ignoreDuplicates: false,
                updateOnDuplicate: ['cityId', 'name', 'address'],
            })
                .then((res) => console.log(res))
                .catch((err) => console.error(err)),
        ]).then(() => Person.scope('all').findByPk(id))
    }

    @Authorized(['administrator'])
    @Mutation(() => Person, { nullable: true })
    async deletePerson(
        @Args() { id }: ArgId,
        @UseAuth() { user: { tenantId } }: IUseAuth
    ): Promise<Person | null> {
        return Person.findOne({
            where: {
                id,
                tenantId,
            },
        }).then((person) =>
            person ? person.destroy().then(() => person) : null
        )
    }
}
