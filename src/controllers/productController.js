const service = require('../services');
const validate = require('./validations');

const getAll = async (_req, res) => {
  const { message } = await service.productService.getAll();
  return res.status(200).json(message);
};

const getById = async (req, res) => {
  const { message } = await service.productService.getById([{ id: req.params.id }]);
  if (message.length > 0) {
    return res.status(200).json(message[0]);
  }
  return res.status(404).json({ message: 'Product not found' });
};

const addNew = async (req, res) => {
  const isValid = validate.nameValidator(req);
  if (!isValid.status) {
    const { message } = await service.productService.addNew(req.body.name);
    return res.status(201).json(message);
  }
  return res.status(isValid.status).json({ message: isValid.message });
};

const updateById = async (req, res) => {
  const isValid = await validate.updateProductValidator(req);
  if (!isValid.status) {
    const product = await service.productService.updateById(req.params.id, req.body.name);
    return res.status(200).json(product.message);
  }
  return res.status(isValid.status).send({ message: isValid.message });
};

const deleteById = async (req, res) => {
  const isValid = await validate.deleteValidator(req);
  if (!isValid.status) {
    await service.productService.deleteById(req.params.id);
    return res.status(204).send();
  }
  return res.status(isValid.status).send({ message: isValid.message });
};

module.exports = { getAll, getById, addNew, deleteById, updateById };
