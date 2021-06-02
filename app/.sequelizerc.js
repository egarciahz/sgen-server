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
  'config': path.resolve('./src/config', 'sequelize.ts'),
  'models-path': path.resolve('./src/db', 'entities'),
  'seeders-path': path.resolve('./src/db', 'seeders'),
  'migrations-path': path.resolve('./src/db', 'migrations')
};
