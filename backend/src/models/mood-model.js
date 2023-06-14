const connection = require('./connection-mssql');

const getAll = async () => {
  try {
    const pool = await connection;
    const result = await pool.request().query('SELECT * FROM mood');
    return result.recordset;
  } catch (error) {
    throw new Error(`Error executing query: ${error}`);
  }
};

module.exports = {
  getAll,
};
