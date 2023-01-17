const productsModel = require('../models/products.model');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);
  return product;
};

/* const printAsync = async (fx) => {
  const data = await fx();
  console.log(data);
};

printAsync(() => getById(0)); */

module.exports = { getAll, getById };