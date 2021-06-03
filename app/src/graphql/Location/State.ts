import { Table, Column, Model, DataType, PrimaryKey, HasMany, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Field, ObjectType, ID } from 'type-graphql';
import City from './City';
import Country from './Country';

@ObjectType()
@Table
export default class State extends Model<State>{

    //@AutoIncrement
    @PrimaryKey
    @Field(() => ID)
    @Column
    id: number;

    @Field(() => String)
    @Column(DataType.STRING(123))
    name: string;

    @ForeignKey(() => Country)
    @Column
    country_id: number;

    @Field(() => Country)
    @BelongsTo(() => Country, "country_id")
    country: Country

    @HasMany(() => City)
    cities: City[]
}
