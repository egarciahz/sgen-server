import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    AllowNull,
    Default,
    Unique,
    Index,
    AutoIncrement,
    HasMany,
    HasOne,
} from 'sequelize-typescript'
import { Optional } from 'sequelize/types'
import { Field, ObjectType, ID, Int } from 'type-graphql'
// import { Model } from 'sequelize-relay-pagination';
import { INode } from '@server/gql'
import SmtpConfig from './SmtpConfig'
import Person from './Org/People'
import User from './User'

type TenantAttributes = {
    id: number
    name: string
    description?: string
    token: string
    active: true
    passPhrase: string
    availableLicenceCount: number
    users: User[]
    people: Person[]
    smtpConfig?: SmtpConfig
}

@ObjectType({
    implements: [INode],
})
@Table({
    paranoid: true,
})
export default class Tenant
    extends Model<
        TenantAttributes,
        Omit<Optional<TenantAttributes, 'smtpConfig'>, 'id' | 'users'>
    >
    implements INode
{
    @AutoIncrement
    @PrimaryKey
    @Field(() => ID)
    @Column
    id: number

    @Field(() => String, { nullable: true })
    @Column(DataType.STRING)
    name: string

    @AllowNull
    @Field(() => String, { nullable: true })
    @Column(DataType.STRING)
    description?: string

    @Unique
    @Index
    @Field(() => String)
    @Column(DataType.STRING)
    token: string

    @Default(true)
    @Field(() => Boolean)
    @Column(DataType.BOOLEAN)
    active: boolean

    @Column(DataType.STRING(16))
    passPhrase: string

    @Default(20)
    @Field(() => Int)
    @Column(DataType.INTEGER)
    availableLicenceCount: number

    @HasMany(() => User, 'tenantId')
    users: User[]

    @HasMany(() => Person, 'tenantId')
    people: User[]

    @HasOne(() => SmtpConfig, 'tenantId')
    smtpConfig?: SmtpConfig
}
