import { Query, Resolver, Args, Authorized } from 'type-graphql'
import { ArgId, ArgPaginate } from '@server/gql'

import Permission from '../../entities/Authorization/Permission'

@Resolver(() => Permission)
export class PermissionResolver {
    @Authorized(['administrator', ':view-permissions'])
    @Query(() => [Permission])
    async permissions(@Args() cursor: ArgPaginate): Promise<Permission[]> {
        return Permission.findAll({
            ...cursor,
        })
    }

    @Authorized(['administrator', ':view-permission'])
    @Query(() => Permission, { nullable: true })
    async permission(@Args() { id }: ArgId): Promise<Permission> {
        return Permission.findOne({
            where: {
                id,
            },
        })
    }
}
