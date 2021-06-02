import 'reflect-metadata'

import { composer } from '@server/core'
import { PORT, ORIGINS, URL } from '@server/config'
import express from 'express'
import { DBInstance } from './db'

const app = express()

const server = composer(app, {
    rootDir: __dirname,
    whitelist: ORIGINS,
    siteUrl: URL,
})

server.listen(PORT, () => {
    DBInstance.config.database
    console.log('listen server')
})
