const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result.map((e) => ({ ...e }));
};

const getById = async (id) => {
  const [result] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE  id = ?', [id]);
  return result.map((e) => ({ ...e }));
};

const addNew = async (name) => {
  const querye = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [id] = await connection.execute(querye, [name]);
  return { id: id.insertId, name };
};

module.exports = { getAll, getById, addNew };