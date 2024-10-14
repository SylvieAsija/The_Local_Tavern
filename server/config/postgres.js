// postgres.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DB_NAME,
});

sequelize
    .authenticate()
    .then(() => console.log('PostgreSQL connected...'))
    .catch((err) => console.log('Error: ' + err));

module.exports = sequelize;