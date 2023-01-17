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
  const [id] = await connection
    .execute('INSERT INTO products (name) VALUES (?)', [name]);
  return { id: id.insertId, name };
};

/* const printAsync = async (fx) => {
  const data = await fx();
  console.log(data);
};

printAsync(() => addNew('biscreta')); */

module.exports = { getAll, getById, addNew };