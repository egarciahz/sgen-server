import 'reflect-metadata'

import { PORT, composer } from '@server/core'
import express from 'express'

const app = express()

composer(app, {
    rootDir: __dirname,
})

app.listen(PORT, () => {
    console.log('listen server')
})
