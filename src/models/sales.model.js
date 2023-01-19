const camelize = require('camelize');
const connection = require('./connection');

/* const getAll = async () => {
  const pQ1 = 'SELECT p.sale_id, s.date ,p.product_id, p.quantity ';
  const pQ2 = 'FROM StoreManager.sales_products AS p ';
  const pQ3 = 'right JOIN StoreManager.sales AS s ON p.sale_id = s.id';
  const [result] = await connection.execute(pQ1 + pQ2 + pQ3);
  return camelize(result.map((e) => ({ ...e })));
}; */

const getById = async (id) => {
  const pQ1 = 'SELECT p.sale_id, s.date ,p.product_id, p.quantity ';
  const pQ2 = 'FROM StoreManager.sales_products AS p ';
  const pQ3 = 'right JOIN StoreManager.sales AS s ON p.sale_id = ?';
  const [result] = await connection.execute(pQ1 + pQ2 + pQ3, [id]);
  return camelize(result.map((e) => ({ ...e })));
};

const addNew = async (products = []) => {
  const [id] = await connection.execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');
  const qP1 = 'INSERT INTO StoreManager.sales_products';
  const qP2 = ' (sale_id, product_id, quantity) VALUES (?, ?, ?)';
  const result = products.map(async (e) => {
    await connection.execute(qP1 + qP2, [id.insertId, e.productId, e.quantity]);
  });
  await Promise.all(result);
  return { id: id.insertId, itemsSold: products };
};

/* const printAsync = async (fx) => {
  const data = await fx();
  console.log(data);
};

printAsync(() => getById([{ id: 1 }])); */

module.exports = { getAll, getById, addNew };