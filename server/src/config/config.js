require('dotenv').config({ path: __dirname + '/../../../.env' });

module.exports = {
  development: {
    username:  process.env.POSTGRES_DB_USERNAME,
    password: process.env.POSTGRES_DB_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
    host: process.env.POSTGRES_DB_HOSTNAME,
    dialect: "postgres",
    logging: false
  },
  production: {
    username:  process.env.POSTGRES_DB_USERNAME_PROD,
    password: process.env.POSTGRES_DB_PASSWORD_PROD,
    database: process.env.POSTGRES_DB_NAME_PROD,
    host: process.env.POSTGRES_DB_HOSTNAME_PROD,
    dialect: "postgres"
  }
}

