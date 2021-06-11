import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    Unique,
    BelongsToMany,
    DefaultScope,
    IsEmail,
    Scopes,
    ForeignKey,
    BelongsTo,
    AutoIncrement,
} from 'sequelize-typescript'
import { Field, ObjectType, ID, Int } from 'type-graphql'
// import { Model, Pagination } from 'sequelize-relay-pagination';
import { PasswordChunk, IUser, ROLE_LEVEL } from '@server/auth'
import { INode } from '@server/gql'

import Permission from './Authorization/Permission'
import Role from './Authorization/Role'
import UserPermissions from './Authorization/Bridge/UserPermissions'
import UserRoles from './Authorization/Bridge/UserRoles'
import Person from './Org/People'
import Tenant from './Tenant'
import { Optional } from 'sequelize/types'
// tools

const PersonScope = {
    model: Person,
    attributes: ['tenantId', 'firstname', 'lastname'],
}

type UserAttributes = IUser<{
    isActive: boolean
    activationKey: string
    resetPasswordKey: string
    tenantId: number
    tenant: Tenant
    ownerId: number
    owner: Person
}>

@Scopes(() => ({
    org: {
        include: [PersonScope],
    },
    auth: {
        include: [Role, Permission],
    },
}))
@DefaultScope(() => ({
    include: [PersonScope, Role, Permission],
}))
@ObjectType({
    description: 'User of system',
    implements: [INode],
})
@Table
export default class User
    extends Model<
        UserAttributes,
        Omit<
            Optional<
                UserAttributes,
                'owner' | 'roles' | 'permissions' | 'activationKey'
            >,
            | 'id'
            | 'tenant'
            | 'isActive'
            | 'resetPasswordKey'
            | 'permissions'
            | 'roles'
        >
    >
    implements INode, PasswordChunk
{
    @AutoIncrement
    @PrimaryKey
    @Field(() => ID)
    @Column(DataType.INTEGER)
    id: number

    @Unique
    @IsEmail
    @Field(() => String)
    @Column(DataType.STRING(123))
    email: string

    @Column
    salt: string

    @Column
    hash: string

    @Field(() => Boolean)
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true,
    })
    verify: boolean

    @Column({ allowNull: true })
    activationKey?: string

    @Column({ allowNull: true })
    resetPasswordKey?: string

    @Field(() => Boolean)
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true,
    })
    active: boolean

    @Field(() => [Permission], { nullable: 'items' })
    @BelongsToMany(() => Permission, () => UserPermissions)
    permissions: Permission[]

    @Field(() => [Role])
    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @Field(() => Int)
    @ForeignKey(() => Person)
    @Column(DataType.INTEGER)
    ownerId: number

    @Field(() => Person)
    @BelongsTo(() => Person)
    owner: Person

    @Field(() => Int)
    @Column(DataType.INTEGER)
    tenantId: number

    get isActive(): boolean {
        return this.active && this.activationKey === null
    }

    public activate(): void {
        this.active = true
    }

    public deactivate(): void {
        this.active = false
    }

    public forgotPassword(settoken: string): void {
        this.setDataValue('resetPasswordKey', settoken)
    }
    public resetPassword(newPassword: PasswordChunk, token: string): void {
        if (this.resetPasswordKey === token) {
            this.setDataValue('salt', newPassword.salt)
            this.setDataValue('hash', newPassword.hash)
        }
    }
    public setPassword(password: PasswordChunk): void {
        this.setDataValue('salt', password.salt)
        this.setDataValue('hash', password.hash)
    }

    public setVerificationToken(settoken: string): void {
        this.setDataValue('activationKey', settoken)
    }
    public verifyToken(token: string | boolean): void {
        if (this.activationKey === token) {
            this.setDataValue('activationKey', null)
            this.setDataValue('verify', true)
            this.setDataValue('active', true)
        }
    }

    // public hasTenant(type: TENANT_TYPE): Promise<boolean> {
    //     return this.tenant.then((tenant) => tenant.type === type);
    // }

    public hasRole(name: string): boolean {
        return (
            this.roles.findIndex((permission) => permission.name === name) > -1
        )
    }

    public hasPermission(name: string): boolean {
        return (
            this.permissions.findIndex(
                (permission) => permission.name === name
            ) > -1
        )
    }

    public hasGrantedLevel(level: ROLE_LEVEL): boolean {
        const maxLevel = this.getGrantedLevel()
        return maxLevel >= level ? true : false
    }

    public getGrantedLevel(): number {
        const levels = this.roles.map((role) => role.level)
        return Math.max.apply(null, levels)
    }

    public hasGrantedRole(name: string): boolean {
        return this.hasGrantedLevel(Role.getGrantedLevelByName(name))
    }
}
