import {
    Table,
    Model,
    Column,
    DataType,
    AllowNull,
    BeforeCreate,
    PrimaryKey,
    BelongsToMany,
    DefaultScope,
    Default,
    Comment,
    Unique,
    AutoIncrement,
} from 'sequelize-typescript'
import { Field, ObjectType, ID, registerEnumType } from 'type-graphql'
// import { Model, Pagination } from 'sequelize-relay-pagination';
import { enumValToArray } from '@server/core'
import { IRole, ROLE_LEVEL } from '@server/auth'
import { INode } from '@server/gql'

import RolePermissions from './Bridge/RolePermissions'
import UserRoles from './Bridge/UserRoles'
import Permission from './Permission'
import User from '../User'

export enum ROLE_SPECIAL {
    ALLOW_ALL = 'ALLOW_ALL',
    DENY_ALL = 'DENY_ALL',
}

export enum ROLE_TARGET {
    USER = 'User',
    COMPANY = 'Company',
}

registerEnumType(ROLE_SPECIAL, {
    name: 'ROLE_SPECIAL',
})

registerEnumType(ROLE_TARGET, {
    name: 'ROLE_TARGET',
})

registerEnumType(ROLE_LEVEL, {
    name: 'ROLE_LEVEL',
})

@DefaultScope(() => ({
    include: [Permission],
}))
@ObjectType({
    implements: [INode],
})
@Table({
    paranoid: true,
})
export default class Role extends Model<Role> implements IRole, INode {
    @AutoIncrement
    @PrimaryKey
    @Field(() => ID)
    @Column
    id: number

    @Field(() => String)
    @Unique
    @Column(DataType.STRING(123))
    name: string

    @Field(() => Number)
    @Column(DataType.INTEGER)
    level: ROLE_LEVEL

    @Field(() => String)
    @Comment('Role usage description')
    @Column({
        allowNull: true,
        type: DataType.STRING,
    })
    description?: string

    @AllowNull
    @Comment('Override all permissions from case')
    @Field(() => ROLE_SPECIAL, { nullable: true })
    @Column(DataType.ENUM(...(enumValToArray(ROLE_SPECIAL) as string[])))
    special?: ROLE_SPECIAL

    @Default(ROLE_TARGET.USER)
    @Comment('Used to filter cases. Default is User')
    @Column(DataType.ENUM(...(enumValToArray(ROLE_TARGET) as string[])))
    target: ROLE_TARGET

    @Field(() => [Permission], {
        nullable: 'items',
        description: 'All available permissions.',
    })
    @BelongsToMany(() => Permission, () => RolePermissions)
    permissions: Permission[]

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]

    public hasPermission(name: string): boolean {
        return (
            this.permissions.findIndex(
                (permission) => permission.name === name
            ) > -1
        )
    }

    @BeforeCreate
    static normalizeName(instance: Role): void {
        instance.name = instance.name.trim().replace(/\s/g, '-')
    }

    static getGrantedLevelByName(name: string): number {
        return ROLE_LEVEL[name.toUpperCase()] ?? -1
    }
}
