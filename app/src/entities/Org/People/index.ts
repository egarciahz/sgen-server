import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    AllowNull,
    Scopes,
    BelongsToMany,
    HasOne,
    Default,
    AutoIncrement,
} from 'sequelize-typescript'
import { Field, ObjectType, registerEnumType, ID } from 'type-graphql'
//import { Model, Pagination } from 'sequelize-relay-pagination';
import { enumValToArray } from '@server/core'
import { INode } from '@server/gql'

import Address from '../../Location/Address'
import Phone from '../../Phone'
import User from '../../User'

import PersonAddress from './PersonAddress'
import PersonPhones from './PersonPhones'

export enum GENDER {
    MALE = 'Male',
    FEMALE = 'Female',
}

registerEnumType(GENDER, {
    name: 'GENDER',
    description: 'People gender options',
})

@Scopes(() => ({
    location: {
        include: [Address],
        attributes: ['firstname', 'lastname'],
    },
    contact: {
        include: [Phone],
        attributes: ['firstname', 'lastname'],
    },
    all: {
        include: [Phone, Address],
    },
}))
@ObjectType({
    implements: INode,
})
@Table
export default class Person extends Model<Person> implements INode {
    @AutoIncrement
    @PrimaryKey
    @Field(() => ID)
    @Column
    id: number

    @Field(() => String)
    @Column(DataType.STRING(100))
    firstname: string

    @AllowNull
    @Field(() => String, { nullable: true })
    @Column(DataType.STRING(100))
    lastname?: string

    @Field(() => Date)
    @Column(DataType.DATE)
    dateOfBirth: Date

    @Field(() => GENDER, { description: 'Gender, Male or Female' })
    @Column(DataType.ENUM(...(enumValToArray(GENDER) as string[])))
    gender: GENDER

    @Field(() => [Address], { nullable: 'items' })
    @BelongsToMany(() => Address, () => PersonAddress)
    addresses: Address[]

    @Field(() => [Phone], { nullable: 'items' })
    @BelongsToMany(() => Phone, () => PersonPhones)
    phones: Phone[]

    // @ForeignKey(() => Tenant)
    // @Column({ comment: 'Tenant ID for manager people' })
    // tenantId: number

    // @BelongsTo(() => Tenant)
    // tenant: Tenant

    @Field(() => User, { nullable: true })
    @HasOne(() => User)
    user?: User

    @Default(false)
    @Field(() => Boolean)
    @Column(DataType.BOOLEAN)
    isIntegrator: boolean
}
