import dotenv from 'dotenv'
import parseVard from 'dotenv-parse-variables'
import { isProdMode } from '@server/core'

const environment = dotenv.config({
    debug: isProdMode,
})

if (environment.error) {
    throw environment.error
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ENV: { [key: string]: any } = parseVard(environment.parsed)
