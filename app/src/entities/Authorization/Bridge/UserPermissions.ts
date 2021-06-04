import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Permission from '../Permission';
import User from '../../User';

@Table
export default class UserPermissions extends Model<UserPermissions>{
    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Permission)
    @Column
    permissionId: number;
}