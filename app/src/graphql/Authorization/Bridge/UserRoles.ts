import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Role from '../Role';
import User from '../../User';

@Table
export default class UserRoles extends Model<UserRoles>{
    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Role)
    @Column
    roleId: number;
}