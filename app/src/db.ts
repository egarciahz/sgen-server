import { sequelize as db_config } from '@server/config'
//import { loadClassTypeFiles } from '@server/core'
import { Sequelize } from 'sequelize-typescript'
//import path from 'path'
import Role from './entities/Authorization/Role'
import Permission from './entities/Authorization/Permission'
import RolePermissions from './entities/Authorization/Bridge/RolePermissions'
import UserRoles from './entities/Authorization/Bridge/UserRoles'
import UserPermissions from './entities/Authorization/Bridge/UserPermissions'
import SmtpConfig from './entities/SmtpConfig'
import Tenant from './entities/Tenant'
import User from './entities/User'
import Phone from './entities/Phone'
import Address from './entities/Location/Address'
import City from './entities/Location/City'
import State from './entities/Location/State'
import Country from './entities/Location/Country'
import Person from './entities/Org/People'
import PersonAddress from './entities/Org/People/PersonAddress'
import PersonPhones from './entities/Org/People/PersonPhones'

const DBInstance = new Sequelize(
    db_config.database,
    db_config.username,
    db_config.password,
    {
        host: db_config?.host,
        dialect: db_config.dialect,
        // models: [path.join(__dirname, 'entities')],
    }
)

DBInstance.addModels(
    // loadClassTypeFiles([path.join(__dirname, 'entities')]) as any[]
    [
        Role,
        Permission,
        RolePermissions,
        UserRoles,
        UserPermissions,
        SmtpConfig,
        Tenant,
        User,
        Phone,
        Address,
        City,
        State,
        Country,
        Person,
        PersonAddress,
        PersonPhones,
    ]
)

export { DBInstance }
