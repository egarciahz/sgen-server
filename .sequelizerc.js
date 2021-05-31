require('ts-node/register');
const path = require('path');
const dotenv = require('dotenv');

let environment = dotenv.config();
if (environment.error) throw environment.error;

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const DEBUG = ENVIRONMENT === 'development';

module.exports = {
  'env' : ENVIRONMENT,
  'debug' : DEBUG,
  'config': path.resolve('./app/config', 'sequelize.ts'),
  'models-path': path.resolve('./app/db', 'models'),
  'seeders-path': path.resolve('./app/db', 'seeders'),
  'migrations-path': path.resolve('./app/db', 'migrations')
};
