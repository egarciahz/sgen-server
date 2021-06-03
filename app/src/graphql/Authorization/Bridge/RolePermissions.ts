import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Permission from '../Permission';
import Role from '../Role';

@Table
export default class RolePermissions extends Model<RolePermissions>{
    @ForeignKey(() => Role)
    @Column
    roleId: number;

    @ForeignKey(() => Permission)
    @Column
    permissionId: number;
}