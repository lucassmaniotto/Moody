const mssql = require('mssql');
require('dotenv').config();

const config = {
  server: process.env.MSSQL_SERVER,
  database: process.env.MSSQL_DATABASE,
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  port: 1433,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

const connection = mssql.connect(config, (err) => {
  err ? console.log(err) : console.log('Database Connected!');
});

module.exports = connection;
