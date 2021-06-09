import {
    Table,
    Column,
    Model,
    ForeignKey,
    PrimaryKey,
    BelongsTo,
} from 'sequelize-typescript'
import Phone from '../../Phone'
import Person from '.'

@Table
export default class PersonPhones extends Model {
    @PrimaryKey
    @ForeignKey(() => Phone)
    @Column
    phoneId: number

    @BelongsTo(() => Phone)
    phone: Phone

    @PrimaryKey
    @ForeignKey(() => Person)
    @Column
    personId: number

    @BelongsTo(() => Person)
    person: Person
}
