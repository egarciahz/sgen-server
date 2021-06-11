import {
    Table,
    Model,
    Column,
    DataType,
    BeforeCreate,
    PrimaryKey,
    BelongsToMany,
    DefaultScope,
    Unique,
    AutoIncrement,
} from 'sequelize-typescript'
import { Field, ObjectType, ID, registerEnumType } from 'type-graphql'
// import { Model, Pagination } from 'sequelize-relay-pagination';
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
export default class Role extends Model implements IRole, INode {
    @AutoIncrement
    @PrimaryKey
    @Field(() => ID)
    @Column
    id: number

    @Field(() => String)
    @Unique
    @Column(DataType.STRING(123))
    name: string

    @Field(() => Number, { nullable: true })
    @Column({
        allowNull: true,
        type: DataType.INTEGER,
    })
    level: ROLE_LEVEL

    @Field(() => Boolean, {
        description:
            'grant acces to all system if true, oterwise follow the regular behavior',
    })
    @Column({
        defaultValue: false,
        type: DataType.BOOLEAN,
        comment:
            'grant acces to all system if true, oterwise follow the regular behavior',
    })
    isSpecial: boolean

    @Field(() => String, {
        description: 'Role usage description',
    })
    @Column({
        allowNull: true,
        type: DataType.STRING,
        comment: 'Role usage description',
    })
    description?: string

    @Field(() => [Permission], {
        description: 'All available permissions.',
    })
    @BelongsToMany(() => Permission, () => RolePermissions)
    permissions: Permission[]

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        comment:
            'soft link to filter custom roles bettween tenants. if null, the role is public',
    })
    tenantId?: number

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
