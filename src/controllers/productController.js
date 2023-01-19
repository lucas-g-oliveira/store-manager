const productService = require('../services/productService');
const validate = require('./validations');

const getAll = async (_req, res) => {
  const products = await productService.getAll();
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const product = await productService.getById([{ id: req.params.id }]);
  if (product.length > 0) {
    return res.status(200).json(...product);
  }
  return res.status(404).send({ message: 'Product not found' });
};

const addNew = async (req, res) => {
  const isValid = validate.nameValidator(req);
  if (!isValid.status) {
    const result = await productService.addNew(req.body.name);
    return res.status(201).json(result);
  }
  return res.status(isValid.status).json({ message: isValid.message });
};

/* const printAsync = async (fx) => {
  const data = await fx();
  console.log(data);
};

printAsync(getAll); */

module.exports = {
  getAll, getById, addNew,
};
