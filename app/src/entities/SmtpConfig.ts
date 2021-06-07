import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    Default,
    AutoIncrement,
    BelongsTo,
} from 'sequelize-typescript'
import { Field, ObjectType, ID } from 'type-graphql'
// import { Model } from 'sequelize-relay-pagination';
import { INode } from '@server/gql'
import Tenant from './Tenant'

@ObjectType({
    implements: [INode],
})
@Table({
    paranoid: true,
})
export default class SmtpConfig extends Model<SmtpConfig> implements INode {
    @AutoIncrement
    @PrimaryKey
    @Field(() => ID)
    @Column
    id: number

    @Field(() => String)
    @Column(DataType.STRING)
    usename: string

    @Field(() => String)
    @Column(DataType.STRING)
    password: string

    @Column(DataType.STRING)
    host: string

    @Field(() => String)
    @Column(DataType.STRING(5))
    port: number

    @Default(true)
    @Field(() => Boolean)
    @Column(DataType.BOOLEAN)
    secure: boolean

    @Field(() => ID)
    @Column(DataType.INTEGER)
    tenantId: number

    @BelongsTo(() => Tenant, 'tenantId')
    tenant: Tenant
}
