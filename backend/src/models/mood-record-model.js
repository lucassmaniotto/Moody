const connection = require('./connection-mssql');

const getAll = async () => {
  const query = 'SELECT * FROM mood_record';

  try {
    const pool = await connection;
    const result = await pool.request().query(query);
    return result.recordset;
  } catch (error) {
    throw new Error(`Error executing query: ${error}`);
  }
};

const getLastId = async () => {
  const query = 'SELECT TOP 1 id FROM mood_record ORDER BY id DESC';

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
    'INSERT INTO mood_record (id, user_id, acronym, description, date) VALUES (@id, @user_id, @acronym, @description, @date)';

  try {
    const pool = await connection;
    const result = await pool
      .request()
      .input('id', mood.id)
      .input('user_id', mood.user_id)
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
  const query = 'DELETE FROM mood_record WHERE id = @id';

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
    'UPDATE mood_record SET acronym = @acronym, description = @description WHERE id = @id';

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
  getLastId,
  registerMood,
  deleteMood,
  updateMood,
};
