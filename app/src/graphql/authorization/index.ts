import {
    Query,
    Resolver,
    Arg,
    Args,
    Authorized,
    FieldResolver,
    Root,
} from 'type-graphql'
import { Op } from 'sequelize'
import { ArgId, ArgPaginate } from '@server/gql'

import Role from '../../entities/Authorization/Role'
import Permission from '../../entities/Authorization/Permission'
import RolePermissions from '../../entities/Authorization/Bridge/RolePermissions'

// import User from '../../entities/User'
import { IUseAuth, UseAuth } from '../../auth'
import { RoleInput, UpdateRoleArgs } from './types'
import { isBoolean } from 'lodash'

@Resolver(() => Role)
export class RoleResolver {
    @FieldResolver(() => [Permission])
    async permissions(
        @Args() cursor: ArgPaginate,
        @Root() role: Role
    ): Promise<Permission[]> {
        return RolePermissions.findAll({
            ...cursor,
            include: [Permission],
            where: {
                roleId: role.id,
            },
        }).then((rows) => rows.map((row) => row.permission))
    }

    @Authorized(['administrator', ':view-role'])
    @Query(() => Role, { nullable: true })
    async role(@Args() { id }: ArgId): Promise<Role | null> {
        return Role.findByPk(id)
    }

    @Authorized(['administrator', ':view-roles'])
    @Query(() => [Role])
    async roles(
        @Args() { ...cursor }: ArgPaginate,
        @UseAuth() { user: { tenantId } }: IUseAuth
    ): Promise<Role[]> {
        return Role.findAll({
            ...cursor,
            where: {
                [Op.or]: [{ tenantId }, {tenantId: null}]
            },
        })
    }

    @Authorized(['administrator', ':create-role'])
    @Query(() => Role)
    async createRole(
        @Arg('data') { isSpecial, permissions, ...role }: RoleInput,
        @UseAuth() { user: { tenantId, isSpecial: acceptSpecial } }: IUseAuth
    ): Promise<Role> {
        return Role.create(
            {
                isSpecial: acceptSpecial ? isSpecial : false,
                permissions: permissions.map((permissionId) => ({
                    permissionId,
                })),
                tenantId,
                ...role,
            },
            {
                include: [RolePermissions],
            }
        )
    }

    @Authorized(['administrator', ':update-role'])
    @Query(() => Role, { nullable: true })
    async updateRole(
        @Args() { id, data }: UpdateRoleArgs,
        @UseAuth() { user: { tenantId, isSpecial: acceptSpecial } }: IUseAuth
    ): Promise<Role | null> {
        if (!acceptSpecial && isBoolean(data?.isSpecial)) {
            data.isSpecial = undefined
        }

        return Role.update(data, {
            returning: false,
            where: {
                id,
                tenantId,
            },
        }).then(([success]) => {
            return success > 0 ? Role.findByPk(id) : null
        })
    }

    @Authorized(['administrator', ':delete-role'])
    @Query(() => Role, { nullable: true })
    async deleteRole(
        @Args() { id }: ArgId,
        @UseAuth() { user: { tenantId } }: IUseAuth
    ): Promise<Role> {
        return Role.findOne({
            where: {
                id,
                tenantId,
            },
        }).then((role) => {
            return role
                ? Role.destroy({
                      where: {
                          id: role.id,
                      },
                  }).then((success) => (success > 0 ? role : null))
                : null
        })
    }
    // @Authorized()
    // @Query(() => RoleConnection)
    // async roleConnection(
    //     @Args() { ...cursor }: ConnectionArgs,
    //     @Ctx() { user }: GrapgQLContext<unknown, User>
    // ): Promise<RoleConnection> {
    //     const userLevel = user.getGrantedLevel()
    //     return Role.paginate({
    //         ...cursor,
    //         where: {
    //             level: {
    //                 [Op.or]: {
    //                     [Op.lte]: userLevel,
    //                 },
    //             },
    //         },
    //     })
    // }
}
