import {
    Table,
    Column,
    Model,
    ForeignKey,
    PrimaryKey,
    BelongsTo,
} from 'sequelize-typescript'
import Address from '../../Location/Address'
import Person from '../People'

@Table
export default class PersonAddress extends Model {
    @PrimaryKey
    @ForeignKey(() => Address)
    @Column
    addressId: number

    @BelongsTo(() => Address)
    address: Address

    @PrimaryKey
    @ForeignKey(() => Person)
    @Column
    personId: number

    @BelongsTo(() => Person)
    person: Person
}
