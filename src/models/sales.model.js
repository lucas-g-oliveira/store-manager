const camelize = require('camelize');
const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products',
  );
  return camelize(result.map((e) => ({ ...e })));
};

const getById = async (id) => {
  const myQueryeP1 = 'SELECT p.sale_id, s.date ,p.product_id, p.quantity ';
  const myQueryeP2 = 'FROM StoreManager.sales_products AS p ';
  const myQueryeP3 = 'right JOIN StoreManager.sales AS s ON p.sale_id = ?';
  const [result] = await connection.execute(myQueryeP1 + myQueryeP2 + myQueryeP3, [id]);
  return camelize(result.map((e) => ({ ...e })));
};

const addNew = async (products = []) => {
  const [id] = await connection.execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');
  const result = products.map(async (e) => {
    const qP1 = 'INSERT INTO StoreManager.sales_products';
    const qP2 = ' (sale_id, product_id, quantity) VALUES (?, ?, ?)';
    await connection.execute(qP1 + qP2, [id.insertId, e.productId, e.quantity]);
  });
  await Promise.all(result);
  return { id: id.insertId, itemSold: products };
};

/* const test = [
  { productId: 1, quantity: 100 },
  { productId: 2, quantity: 200 },
  { productId: 3, quantity: 700 },
];
addNew(test); */

module.exports = { getAll, getById, addNew };