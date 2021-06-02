import { sequelize as db_config } from '@server/config'
import { Sequelize } from 'sequelize-typescript'
import path from 'path'

export const DBInstance = new Sequelize(
    db_config.database,
    db_config.username,
    db_config.password,
    {
        host: db_config?.host,
        dialect: db_config.dialect,
        models: [path.join(__dirname, 'entities')],
    }
)
