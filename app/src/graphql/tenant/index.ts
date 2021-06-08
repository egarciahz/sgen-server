import _ from 'lodash'
import {
    Query,
    Resolver,
    Args,
    Mutation,
    FieldResolver,
    Root,
    Authorized,
    Int,
} from 'type-graphql'
import { QueryTypes } from 'sequelize'
import { ArgId, ArgPaginate } from '@server/gql'

import Tenant from '../../entities/Tenant'
import Person from '../../entities/Org/People'

import { TenantFilter, TenantResumen } from './types'

@Resolver(() => Tenant)
export class TenantResolver {
    @FieldResolver(() => Person)
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
    @Query(() => TenantResumen, { nullable: true })
    async tenantResumen(@Args() params: ArgId): Promise<TenantResumen | null> {
        const [resumen = null] = await Tenant.sequelize.query(
            `
            SELECT 
            T.id as id,
            (SELECT COUNT('id') FROM People WHERE tenantId=T.id AND isIntegrator) as integrators,
            (SELECT COUNT('id') FROM People WHERE tenantId=T.id AND isIntegrator IS NOT true) as employees,
            (SELECT COUNT('id') FROM CustomerProfiles WHERE isClientOfTheDistributorId = C.id) as customers,
            T.description as description,
            T.type as type,
            T.token as token,
            C.name as name,
            C.activity as activity
            FROM Tenants as T
            INNER JOIN Companies AS C ON C.tenantId = T.id 
            WHERE T.id = :id;
        `,
            {
                replacements: { ...params },
                type: QueryTypes.SELECT,
            }
        )

        if (resumen) {
            const obj = new TenantResumen()
            _.keys(resumen).map((key) => {
                obj[key] = resumen[key]

                return
            })
            return obj
        }

        return resumen
    }

    @Authorized(['admin'])
    @Mutation(() => Tenant)
    async disableTenant(@Args() args: TenantFilter): Promise<Tenant> {
        return Tenant.findOne({
            ...this.getFilterSelector(args),
        }).then((tenant) => this.setStatus(tenant, false))
    }

    @Authorized(['admin'])
    @Mutation(() => Tenant)
    async enableTenant(@Args() args: TenantFilter): Promise<Tenant> {
        return Tenant.findOne({
            ...this.getFilterSelector(args),
        }).then((tenant) => this.setStatus(tenant, true))
    }

    @Authorized(['root'])
    @Mutation(() => Tenant, { nullable: true })
    async deleteTenant(@Args() args: TenantFilter): Promise<Tenant | null> {
        return Tenant.findOne({
            ...this.getFilterSelector(args),
        }).then((tenant) =>
            tenant ? tenant.destroy().then(() => tenant) : null
        )
    }

    setStatus(tenant: Tenant, status: boolean): Promise<Tenant> | null {
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
