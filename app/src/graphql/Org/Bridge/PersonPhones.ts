import { Table, Column, Model, ForeignKey, PrimaryKey, BelongsTo } from 'sequelize-typescript';
import Phone from '../../Phone';
import Person from '../People';

@Table
export default class PersonPhones extends Model<PersonPhones>{
    @PrimaryKey
    @ForeignKey(() => Phone)
    @Column
    phoneId: number;

    @BelongsTo(() => Phone)
    phone: Phone;

    @PrimaryKey
    @ForeignKey(() => Person)
    @Column
    personId: number;

    @BelongsTo(() => Person)
    person: Person;
}