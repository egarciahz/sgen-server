import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript'
import Permission from '../Permission'
import Role from '../Role'

@Table
export default class RolePermissions extends Model {
    @ForeignKey(() => Role)
    @Column
    roleId: number

    @ForeignKey(() => Permission)
    @Column
    permissionId: number

    @BelongsTo(() => Permission)
    permission: Permission
}
