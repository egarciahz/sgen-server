import { INode } from '@server/gql'
import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    HasMany,
} from 'sequelize-typescript'
import { Field, ObjectType, ID } from 'type-graphql'
import State from './State'

@ObjectType({
    implements: [INode],
})
@Table
export default class Country extends Model implements INode {
    //@AutoIncrement
    @PrimaryKey
    @Field(() => ID)
    @Column
    id: number

    @Field(() => String)
    @Column(DataType.STRING(4))
    code: string

    @Field(() => Number)
    @Column(DataType.INTEGER)
    phonecode: number

    @Field(() => String)
    @Column(DataType.STRING)
    name: string

    @HasMany(() => State, 'country_id')
    states: State[]
}
