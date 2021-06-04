import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    BelongsToMany,
    AutoIncrement,
} from 'sequelize-typescript'
import { Field, ObjectType, registerEnumType, ID } from 'type-graphql'
//import { Model, Pagination } from 'sequelize-relay-pagination';
import { enumValToArray } from '@server/core'
import { INode } from '@server/gql'

import PersonPhones from './Org/People/PersonPhones'
import Person from './Org/People'

export enum PHONE_TYPE {
    LOCAL = 'Local',
    MOBILE = 'Mobile',
}

registerEnumType(PHONE_TYPE, {
    name: 'PHONE_TYPE',
    description: 'Describe if the phone is mobile or local',
})

@ObjectType({
    description: 'Telephone numbers in international format',
    implements: [INode],
})
@Table
export default class Phone extends Model<Phone> implements INode {
    @AutoIncrement
    @PrimaryKey
    @Field(() => ID)
    @Column
    id: number

    @Field(() => String)
    @Column({
        allowNull: false,
        type: DataType.STRING(100),
    })
    number: string

    @Field(() => PHONE_TYPE)
    @Column(DataType.ENUM(...(enumValToArray(PHONE_TYPE) as string[])))
    type: PHONE_TYPE

    @BelongsToMany(() => Person, () => PersonPhones)
    people: Person[]
}
