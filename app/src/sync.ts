import { isProdMode } from '@server/core'
import { DBInstance } from './db'

const { database } = DBInstance.config

//DBInstance.query(
//    `CREATE DATABASE IF NOT EXISTS \`${database}\` DEFAULT CHARACTER SET utf8;`
//)

DBInstance.createSchema(database, {
    logging: true,
})

DBInstance.sync({
    force: !isProdMode,
    alter: isProdMode,
})
