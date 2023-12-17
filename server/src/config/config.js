require('dotenv').config({ path: __dirname + '/../../../.env' });

console.log(process.env.POSTGRES_DB_USERNAME);

module.exports = {
  development: {
    username:  process.env.POSTGRES_DB_USERNAME || 'postgres',
    password: process.env.POSTGRES_DB_PASSWORD || "dL8_b*",
    database: process.env.POSTGRES_DB_NAME || "askme_db",
    host: process.env.POSTGRES_DB_HOSTNAME || "localhost",
    dialect: "postgres",
    logging: false
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres"
  }
}

