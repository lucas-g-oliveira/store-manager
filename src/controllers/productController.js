const productService = require('../services/productService');

const getAll = async (_req, res) => {
  const products = await productService.getAll();
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const product = await productService.getById(req.params.id);
  if (product.length > 0) {
    return res.status(200).json(...product);
  }
  return res.status(404).send({ message: 'Product not found' });
};

/* const printAsync = async (fx) => {
  const data = await fx();
  console.log(data);
};

printAsync(getAll); */

module.exports = {
  getAll, getById,
};
