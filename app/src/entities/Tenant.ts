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
import { Field, ObjectType, ID, Int } from 'type-graphql'
// import { Model } from 'sequelize-relay-pagination';
import { INode } from '@server/gql'
import User from './User'
import SmtpConfig from './SmtpConfig'

@ObjectType({
    implements: [INode],
})
@Table({
    paranoid: true,
})
export default class Tenant extends Model<Tenant> implements INode {
    @AutoIncrement
    @PrimaryKey
    @Field(() => ID)
    @Column
    id: number

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

    @HasOne(() => SmtpConfig, 'tenantId')
    smtpConfig: SmtpConfig
}
