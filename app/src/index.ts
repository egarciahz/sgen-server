import 'reflect-metadata'

import { composer } from '@server/core'
import { PORT, ORIGINS, URL } from '@server/config'
import { Middleware, Encoder } from '@server/auth'
import passport from 'passport'

import express from 'express'
import { DBInstance } from './db'
import AuthStrategy, { Algorithm, GQLAuthMiddleware, KeyName } from './auth'

const app = express()

passport.serializeUser(Encoder.serialize(KeyName))
passport.deserializeUser(AuthStrategy.strategy.deserialize())
passport.use(AuthStrategy.strategy.createLocalStrategy())
passport.use(
    AuthStrategy.strategy.createJwtStrategy({
        ignoreExpiration: true,
        jsonWebTokenOptions: {
            algorithms: [Algorithm],
        },
    })
)

app.use(passport.initialize())
app.use(passport.session())
app.use(Middleware(AuthStrategy))

composer(app, {
    rootDir: __dirname,
    whitelist: ORIGINS,
    siteUrl: URL,
    authChecker: GQLAuthMiddleware,
})

app.listen(PORT, () => {
    console.log(
        `listen server on port ${PORT} db: ${DBInstance.config.database}`
    )
})
