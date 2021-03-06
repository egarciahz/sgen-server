import { filterex, mapKeys, isProdMode } from '@server/core'
import { Dialect } from 'sequelize'
import { ENV } from './env'

type DatabaseFields = {
    dialect: Dialect
    database: string
    password: string
    username: string
    host?: string
    port?: string
}

const database = mapKeys(filterex(ENV, /^DB_/), (key) =>
    key.replace(/^DB_/, '').toLowerCase()
) as DatabaseFields

database.database = isProdMode
    ? database.database
    : `${database?.database}_${ENV.ENVIRONMENT}`

export { database as sequelize, DatabaseFields }
