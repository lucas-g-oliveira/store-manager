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

const updateById = async (req, res) => {
  const isValid = await validate.updateProductValidator(req);
  if (!isValid.status) {
    const updated = await productService.updateById(req.params.id, req.body.name);
    return res.status(200).json(updated);
  }
  return res.status(isValid.status).send({ message: isValid.message });
};

const deleteById = async (req, res) => {
  const isValid = await validate.deleteValidator(req);
  if (!isValid.status) {
    await productService.deleteById(req.params.id);
    return res.status(204).send();
  }
  return res.status(isValid.status).send({ message: isValid.message });
};

/* const printAsync = async (fx) => {
  const data = await fx();
  console.log(data);
};

printAsync(() => productService.updateById(2, 'spyderman')); */

module.exports = { getAll, getById, addNew, deleteById, updateById };
