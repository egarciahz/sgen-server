import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    Comment,
    BelongsTo,
    ForeignKey,
    BelongsToMany,
    DefaultScope,
    AutoIncrement,
} from 'sequelize-typescript'
import { Field, ObjectType, ID } from 'type-graphql'
import { INode } from '@server/gql'

import PersonAddress from '../Org/People/PersonAddress'
import Person from '../Org/People'
import City from './City'

export enum ADDRESSS_TYPE {
    RESIDENTIAL = 'Residential',
    OFFICE = 'Office',
}

@DefaultScope(() => ({
    include: [City],
}))
@ObjectType({
    implements: [INode],
})
@Table
export default class Address extends Model<Address> implements INode {
    @AutoIncrement
    @PrimaryKey
    @Field(() => ID)
    @Column
    id: number

    @Comment('Name identifytier for the addres')
    @Field(() => String)
    @Column(DataType.STRING(123))
    name: string

    @Comment('Specific address')
    @Field(() => String)
    @Column(DataType.STRING)
    address: string

    @ForeignKey(() => City)
    @Column
    cityId: number

    @BelongsTo(() => City)
    city: City

    @BelongsToMany(() => Person, () => PersonAddress)
    person: Person[]
}
