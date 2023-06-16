const connection = require('./connection-mssql');

const getAll = async () => {
  const query = 'SELECT * FROM moods';

  try {
    const pool = await connection;
    const result = await pool.request().query(query);
    return result.recordset;
  } catch (error) {
    throw new Error(`Error executing query: ${error}`);
  }
};

module.exports = {
  getAll,
};
