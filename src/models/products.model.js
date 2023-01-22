const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result.map((e) => ({ ...e }));
};

const getById = async (arr = []) => {
  const querye = 'SELECT * FROM StoreManager.products WHERE id IN ';
  let charQuestion = `(${arr.map((e) => (e.id ? '?' : '')).join(',')})`;
  charQuestion = (charQuestion === '()' || charQuestion === '(,)') ? '(?)' : charQuestion;
  let values = arr.map((e) => e.id).filter((e) => e);
  values = (values.length === 0) ? [0] : values;
  const [result] = await connection.execute(querye + charQuestion, values);
  return result.map((e) => ({ ...e }));
};

const addNew = async (name) => {
  const querye = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [id] = await connection.execute(querye, [name]);
  return { id: id.insertId, name };
};

const deleteById = async (id) => {
  const querye = 'DELETE FROM StoreManager.products WHERE id= ?';
  await connection.execute(querye, [id]);
};

const updateById = async (id, newName) => {
  const querye = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  await connection.execute(querye, [newName, id]);
  return { id, name: newName };
};

module.exports = { getAll, getById, addNew, deleteById, updateById };