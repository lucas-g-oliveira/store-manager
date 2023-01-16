const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  const data = result.map((e) => ({ ...e }));
  console.log(data);
  return data;
};

const findById = async (id) => {
  const [result] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE  id = ?', [id]);
  const data = result.map((e) => ({ ...e }));
  console.log(data);
  return data;
};

findAll();
findById(1);

module.exports = { findAll };