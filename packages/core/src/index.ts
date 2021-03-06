import IContext from './IContext'

export * from './utils/mapKeys'
export * from './utils/filterex'
export * from './utils/omitFields'
export * from './utils/enumToArray'
export * from './utils/normalizePort'
export * from './utils/parseAdditionalFields'
export * from './loaders'
export * from './composer'

const isProdMode: boolean = process.env.NODE_ENV === 'production'

export { isProdMode, IContext }
