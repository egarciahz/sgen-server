import _ from 'lodash'
import {
    Arg,
    Authorized,
    FieldResolver,
    Mutation,
    Query,
    Resolver,
    Root,
    Args,
} from 'type-graphql'
import { WhereOptions } from 'sequelize'
import { Password } from '@server/auth'
import { ArgId, likeSearch } from '@server/gql'

import User from '../../entities/User'
import Person from '../../entities/Org/People'
import Tenant from '../../entities/Tenant'
import UserRoles from '../../entities/Authorization/Bridge/UserRoles'
import UserPermissions from '../../entities/Authorization/Bridge/UserPermissions'
import { IUseAuth, UseAuth } from '../../auth'

import {
    UsersArgs,
    // UserConnection,
    // UserConnectionArgs,
    NewUserInput,
    UserAuthorizationInput,
    UserStatus,
} from './types'

@Resolver(() => User)
export class UserResolver {
    @FieldResolver(() => Tenant, {
        description: 'user tenant',
    })
    async tenant(@Root() user: User): Promise<Tenant> {
        return Tenant.findByPk(user.tenantId)
    }

    @FieldResolver(() => Person, {
        description: 'Gets the person who owns this user.',
    })
    async owner(@Root() parent: User): Promise<Person> {
        return Person.scope('all').findByPk(parent.ownerId)
    }

    @Authorized()
    @Query(() => User, {
        description: 'Gets user resolution by id.',
    })
    async user(@Args() { id }: ArgId): Promise<User> {
        return User.findByPk(id)
    }

    @Authorized()
    @Query(() => [User], {
        description:
            'Gets all user list available scope to you. Use Simple Pagination spesification.',
    })
    async users(
        @Args() { limit, offset, email }: UsersArgs,
        @UseAuth() { user: { tenantId } }: IUseAuth
    ): Promise<User[]> {
        const filter: WhereOptions = {
            tenantId: tenantId,
        }

        if (likeSearch(email, { fieldName: 'email' })?.email) {
            filter.email = likeSearch(email, { fieldName: 'email' }).email
        }

        return User.findAll({
            limit,
            offset,
            include: [
                {
                    model: Person,
                    required: true,
                    where: {
                        tenantId,
                    },
                },
            ],
            where: filter,
        })
    }

    // @Authorized()
    // @Query(() => UserConnection, {
    //     description:
    //         'Gets all user list available scope to you. Use Relay connection spesification.',
    // })
    // async userConnection(
    //     @Args() { last, first, tenantId, email, ...cursor }: UserConnectionArgs,
    //     @Ctx() ctx: GrapgQLContext<unknown, User>
    // ): Promise<UserConnection> {
    //     const limit = first ? first : last
    //     const { user } = ctx
    //     let filter: WhereOptions = {}

    //     if (likeSearch(email, { fieldName: 'email' })?.email) {
    //         filter = likeSearch(email, { fieldName: 'email' })
    //     }

    //     if (!user.hasGrantedRole('admin')) {
    //         tenantId = await user.tenant.then((tenant) => tenant.id)
    //     }

    //     return User.paginate({
    //         ...cursor,
    //         limit,
    //         include: [
    //             {
    //                 model: Person,
    //                 required: true,
    //                 where: {
    //                     tenantId,
    //                 },
    //             },
    //         ],
    //         where: filter,
    //     })
    // }

    @Authorized()
    @Mutation(() => User, { nullable: true })
    async changeUserRoles(
        @Arg('data') { id, statementsIds }: UserAuthorizationInput
    ): Promise<User | null> {
        await UserRoles.destroy({ where: { userId: id } })
        const roles = statementsIds.map((roleId) => ({
            roleId,
            userId: id,
        }))

        return UserRoles.bulkCreate(roles).then(() => User.findByPk(id))
    }

    @Authorized()
    @Mutation(() => User, { nullable: true })
    async changeUserPermissions(
        @Arg('data') { id, statementsIds }: UserAuthorizationInput
    ): Promise<User | null> {
        return await UserPermissions.destroy({ where: { userId: id } })
            .then(() => {
                const roles = statementsIds.map((roleId) => ({
                    roleId,
                    userId: id,
                }))

                return UserPermissions.bulkCreate(roles)
            })
            .then(() => User.scope('auth').findByPk(id))
    }

    @Authorized()
    @Mutation(() => User, { nullable: true })
    async changeUserStatus(@Args() { id, active }: UserStatus): Promise<User> {
        return User.findByPk(id).then((user) => {
            if (!user) return user
            user.active = active
            return user.save()
        })
    }

    @Authorized()
    @Mutation(() => User)
    async createUser(
        @Arg('data') { ownerId, password, ...data }: NewUserInput,
        @UseAuth() { user: { tenantId } }: IUseAuth
    ): Promise<User> {
        const pass = await Password.make(password)
        const has = await Person.findByPk(ownerId, { attributes: ['id'] })

        if (!has) {
            throw new Error(`Person from ownerId (${ownerId}) not found.`)
        }

        const user = await User.create({
            ...pass,
            email: data.email,
            ownerId: ownerId,
            tenantId: tenantId,
            active: true,
            verify: false,
        })

        if (!user) {
            throw new Error(`user ${user.email} could not be created`)
        }

        const { roles, permissions } = data
        await Promise.all([
            UserRoles.bulkCreate(
                roles.map((roleId) => ({ roleId, userId: user.id }))
            ),
            UserPermissions.bulkCreate(
                permissions.map((permissionId) => ({
                    permissionId,
                    userId: user.id,
                }))
            ),
        ])

        return user
    }

    @Authorized()
    @Mutation(() => User, { nullable: true })
    async deleteUser(@Args() { id }: ArgId): Promise<User | null> {
        return User.findByPk(id).then((user) =>
            User.destroy({
                where: {
                    id,
                },
            }).then((deleted) => (deleted > 0 ? user : null))
        )
    }
}
