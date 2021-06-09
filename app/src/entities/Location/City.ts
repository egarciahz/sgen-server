import { INode } from '@server/gql'
import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    BelongsTo,
    HasMany,
    ForeignKey,
    AutoIncrement,
} from 'sequelize-typescript'
import { Field, ObjectType, ID } from 'type-graphql'
import Address from './Address'
import State from './State'

@ObjectType({
    implements: [INode],
})
@Table
export default class City extends Model implements INode {
    @AutoIncrement
    @PrimaryKey
    @Field(() => ID)
    @Column
    id: number

    @Field(() => String)
    @Column(DataType.STRING(123))
    name: string

    @ForeignKey(() => State)
    @Column
    state_id: number

    @BelongsTo(() => State, 'state_id')
    state: State

    @HasMany(() => Address)
    addresses: Address[]
}
