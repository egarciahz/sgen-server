import 'reflect-metadata'

import { composer } from '@server/core'
import { PORT, ORIGINS, URL } from '@server/config'
import { Middleware, Encoder } from '@server/auth'
import passport from 'passport'

import express from 'express'
import { DBInstance } from './db'
import auth, { Algorithm, KeyName } from './auth'

const app = express()

passport.serializeUser(Encoder.serialize(KeyName))
passport.deserializeUser(auth.strategy.deserialize())
passport.use(auth.strategy.createLocalStrategy())
passport.use(
    auth.strategy.createJwtStrategy({
        ignoreExpiration: true,
        jsonWebTokenOptions: {
            algorithms: [Algorithm],
        },
    })
)

app.use(passport.initialize())
app.use(passport.session())
app.use(Middleware(auth))

composer(app, {
    rootDir: __dirname,
    whitelist: ORIGINS,
    siteUrl: URL,
})

app.listen(PORT, () => {
    console.log(
        `listen server on port ${PORT} db: ${DBInstance.config.database}`
    )
})
