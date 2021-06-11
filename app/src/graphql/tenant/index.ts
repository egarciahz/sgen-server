import _ from 'lodash'
import {
    Query,
    Resolver,
    Arg,
    Args,
    Mutation,
    FieldResolver,
    Root,
    Authorized,
    Int,
} from 'type-graphql'
// import { QueryTypes } from 'sequelize'
import { ArgId, ArgPaginate } from '@server/gql'

import User from '../../entities/User'
import Tenant from '../../entities/Tenant'
import Person from '../../entities/Org/People'

import {
    TenantFilter,
    NewTenantInput,
    UpdateLisenceCount,
    UpdateTenantArgs,
} from './types'
import { Password } from '../../../../packages/authentication/src'

@Resolver(() => Tenant)
export class TenantResolver {
    @FieldResolver(() => [Person])
    async people(
        @Args() pager: ArgPaginate,
        @Root() tenant: Tenant
    ): Promise<Person[]> {
        return Person.findAll({
            ...pager,
            where: {
                tenantId: tenant.id,
            },
        })
    }

    @FieldResolver(() => [User])
    async users(
        @Args() pager: ArgPaginate,
        @Root() tenant: Tenant
    ): Promise<User[]> {
        return User.findAll({
            ...pager,
            where: {
                tenantId: tenant.id,
            },
        })
    }

    @FieldResolver(() => Int)
    async availableLisenceCount(@Root() tenant: Tenant): Promise<number> {
        return User.count({
            where: {
                tenantId: tenant.id,
                active: true,
            },
        }).then((actives) => {
            return tenant.enabledLicenceCount - actives
        })
    }

    @Authorized()
    @Query(() => [Tenant])
    async tenants(@Args() pager: ArgPaginate): Promise<Tenant[]> {
        return Tenant.findAll({ ...pager })
    }

    @Authorized()
    @Query(() => Int)
    async tenantsCount(): Promise<number> {
        return Tenant.count()
    }

    @Authorized()
    @Query(() => Tenant, { nullable: true })
    async tenant(@Args() args: TenantFilter): Promise<Tenant | null> {
        return Tenant.findOne({
            ...this.getFilterSelector(args),
        })
    }

    @Authorized()
    @Mutation(() => Tenant)
    async createTenant(
        @Arg('data') { token, ...data }: NewTenantInput
    ): Promise<Tenant> {
        token = token ? token : await Password.token(16)
        const passPhrase = await Password.token(14) // custom key cipher
        return Tenant.create({
            active: true,
            passPhrase,
            token,
            ...data,
        })
    }

    @Authorized()
    @Mutation(() => Tenant, { nullable: true })
    async updateTenantInfo(
        @Args() { id, data }: UpdateTenantArgs
    ): Promise<Tenant | never> {
        return Tenant.update(data, { returning: false, where: { id } }).then(
            ([success]) => {
                return success > 0
                    ? Tenant.findByPk(id, {
                          attributes: ['id', 'name', 'desciption'],
                      })
                    : null
            }
        )
    }

    @Authorized()
    @Mutation(() => Tenant, { nullable: true })
    async updateAvailableLisenceCount(
        @Args() { id, lisenceCount }: UpdateLisenceCount
    ): Promise<Tenant | null> {
        return Tenant.findByPk(id).then((tenant) => {
            if (!tenant) return tenant
            tenant.enabledLicenceCount = lisenceCount
            return tenant.save()
        })
    }

    @Authorized()
    @Mutation(() => Tenant)
    async disableTenant(@Args() { id }: ArgId): Promise<Tenant> {
        return Tenant.findByPk(id).then((tenant) =>
            this.setStatus(false, tenant)
        )
    }

    @Authorized()
    @Mutation(() => Tenant)
    async enableTenant(@Args() { id }: ArgId): Promise<Tenant> {
        return Tenant.findByPk(id).then((tenant) =>
            this.setStatus(true, tenant)
        )
    }

    @Authorized()
    @Mutation(() => Tenant, { nullable: true })
    async deleteTenant(@Args() { id }: ArgId): Promise<Tenant | null> {
        return Tenant.findByPk(id).then((tenant) =>
            tenant ? tenant.destroy().then(() => tenant) : null
        )
    }

    async setStatus(status: boolean, tenant?: Tenant): Promise<Tenant | null> {
        if (!tenant) return null
        tenant.active = status
        return tenant.save()
    }

    getFilterSelector(filter: TenantFilter): {
        where: { token?: string; id?: number }
    } {
        return {
            where: {
                ...(filter.id ? _.pick(filter, 'id') : _.pick(filter, 'token')),
            },
        }
    }
}
