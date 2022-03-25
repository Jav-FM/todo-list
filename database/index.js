require('dotenv').config();

const { Pool } = require('pg');

const connectionString =
  process.env.HEROKU_POSTGRESQL_AQUA_URL ||
  'postgresq//postgres:root@localhost:5432/simple_db';

const pool = new Pool({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false },
});

const getTodos = () => {
  return pool
    .query('SELECT * from todos')
    .then((res) => ({ ok: true, data: res.rows }))
    .catch((e) => ({ ok: false, data: e }));
};

const createTodo = (title, description) => {
  return pool
    .query('INSERT INTO todos (title, description) VALUES ($1, $2)', [
      title,
      description,
    ])
    .then(() => ({
      ok: true,
    }))
    .catch((e) => ({
      ok: false,
      data: e,
    }));
};

const deleteTodo = (id) => {
  return pool
    .query('DELETE FROM todos WHERE id = $1', [id])
    .then(() => ({
      ok: true,
    }))
    .catch((e) => ({
      ok: false,
      data: e,
    }));
};

module.exports = { getTodos, createTodo, deleteTodo };
