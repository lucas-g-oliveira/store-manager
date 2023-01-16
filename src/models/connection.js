require('dotenv').config();

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.PORT,
  waitForConnections: true,
});

module.exports = connection;