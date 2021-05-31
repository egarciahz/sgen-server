import filterex from '../lib/filterex';
import mapKeys from '../lib/mapKeys';
import env, { isProdMode } from "./env";

const config = mapKeys(
    filterex(env, /^DB_/),
    (key) => key.replace(/^DB_/, '').toLowerCase()
);
config.database = isProdMode ? config.database : `${config?.database}_${env.ENVIRONMENT}`;

module.exports = config;

export default config;