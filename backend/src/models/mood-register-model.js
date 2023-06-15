const connection = require('./connection-mssql');

const getAll = async () => {
  const query = 'SELECT * FROM mood_register';

  try {
    const pool = await connection;
    const result = await pool.request().query(query);
    return result.recordset;
  } catch (error) {
    throw new Error(`Error executing query: ${error}`);
  }
};

const registerMood = async (mood) => {
  const date = new Date(Date.now()).toUTCString();
  const query =
    'INSERT INTO mood_register (mood_id, mood_acronym, mood_description, mood_date) VALUES (@id, @acronym, @description, @date)';

  try {
    const pool = await connection;
    const result = await pool
      .request()
      .input('id', mood.id)
      .input('acronym', mood.acronym)
      .input('description', mood.description)
      .input('date', date)
      .query(query);
    return result.recordset;
  } catch (error) {
    throw new Error(`Error executing query: ${error}`);
  }
};

const deleteMood = async (id) => {
  const query = 'DELETE FROM mood_register WHERE mood_id = @id';

  try {
    const pool = await connection;
    const result = await pool.request().input('id', id).query(query);
    return result.recordset;
  } catch (error) {
    throw new Error(`Error executing query: ${error}`);
  }
};

const updateMood = async (id, mood) => {
  const query =
    'UPDATE mood_register SET mood_acronym = @acronym, mood_description = @description WHERE mood_id = @id';

  try {
    const pool = await connection;
    const result = await pool
      .request()
      .input('id', id)
      .input('acronym', mood.acronym)
      .input('description', mood.description)
      .query(query);
    return result.recordset;
  } catch (error) {
    throw new Error(`Error executing query: ${error}`);
  }
};

module.exports = {
  getAll,
  registerMood,
  deleteMood,
  updateMood,
};
