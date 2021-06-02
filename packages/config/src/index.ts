import { normalizePort } from '@server/core'
import { isArray, isString } from 'lodash'
import { ENV } from './env'

export * from './sequelize'
export * from './env'

export const ORIGINS: string[] | string | undefined = (
    isArray(ENV?.ORIGINS) ? ENV.ORIGINS : [ENV?.ORIGINS]
).filter(isString)

export const HOST: string = ENV?.HOST ?? 'http://localhost'
export const PORT: number = normalizePort(ENV?.PORT ?? '3000')
export const URI: string = [ENV?.HOST, PORT].join(':')
export const URL: string = ENV?.URL ?? URI
