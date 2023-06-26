const connection = require('./connection-mssql');
const bcrypt = require('bcrypt');

const getUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email = '${email}'`;

  try {
    const pool = await connection;
    const result = await pool.request().query(query);
    return result.recordset[0];
  } catch (error) {
    throw new Error(`Error executing query: ${error}`);
  }
};

const loginUser = async (email, password) => {
  try {
    const user = await getUserByEmail(email);

    if (!user) {
      throw new Error('Invalid user');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Invalid password');
    }

    return user;
  } catch (error) {
    throw new Error(`Error executing query: ${error}`);
  }
};

const getUserById = async (id) => {
  const query = `SELECT * FROM users WHERE id = ${id}`;

  try {
    const pool = await connection;
    const result = await pool.request().query(query);
    return result.recordset[0];
  } catch (error) {
    throw new Error(`Error executing query: ${error}`);
  }
};

const registerUser = async (user) => {
  const { name, email, password } = user;
  try {
    const query =
      'INSERT INTO users (name, email, password) VALUES (@name, @email, @password)';
    const hashedPassword = await bcrypt.hash(password, 10);
    const pool = await connection;
    const result = await pool
      .request()
      .input('name', user.name)
      .input('email', user.email)
      .input('password', hashedPassword)
      .query(query);
    return result.recordset;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

module.exports = {
  loginUser,
  getUserById,
  registerUser,
};
