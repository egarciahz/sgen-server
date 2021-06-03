import {
    Table,
    Column,
    Model,
    DataType,
    AllowNull,
    BeforeCreate,
    PrimaryKey,
    BelongsToMany,
    AutoIncrement,
} from 'sequelize-typescript'
import { Field, ObjectType, ID } from 'type-graphql'
import { IPermission } from '@server/auth'
import { INode } from '@server/gql'

import RolePermissions from './Bridge/RolePermissions'
import UserPermissions from './Bridge/UserPermissions'
import User from '../User'
import Role from './Role'

@ObjectType({
    implements: [INode],
})
@Table({
    paranoid: true,
})
export default class Permission
    extends Model<Permission>
    implements IPermission, INode
{
    @AutoIncrement
    @PrimaryKey
    @Field(() => ID)
    @Column
    id: number

    @Field(() => String)
    @Column(DataType.STRING(123))
    name: string

    @AllowNull
    @Field(() => String)
    @Column(DataType.STRING)
    description?: string

    @BelongsToMany(() => Role, () => RolePermissions)
    roles: Role[]

    @BelongsToMany(() => User, () => UserPermissions)
    users: User[]

    @BeforeCreate
    static normalizeName(instance: Permission): void {
        instance.name = instance.name.trim().replace(/\s/g, '-')
    }
}
