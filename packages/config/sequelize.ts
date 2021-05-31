import {filterex, mapKeys, isProdMode, ENV} from '@server/core';

type DatabaseFields = {
    dialect: string;
    database: string;
    password: string;
    username: string;
}

const config = mapKeys(
    filterex(ENV, /^DB_/),
    (key) => key.replace(/^DB_/, '').toLowerCase()
) as DatabaseFields;

config.database = isProdMode ? config.database : `${config?.database}_${ENV.ENVIRONMENT}`;

export {config, DatabaseFields};
