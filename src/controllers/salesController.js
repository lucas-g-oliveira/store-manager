const salesService = require('../services/salesService');
const validate = require('./validations');

const getAll = async (_req, res) => {
  const sales = await salesService.getAll();
  return res.status(200).json(sales);
};

const getById = async (req, res) => {
  const sale = await salesService.getById(req.params.id);
  if (sale.length > 0) {
    console.log(sale);
    return res.status(200).json(sale);
  }
  return res.status(404).send({ message: 'Sale not found' });
};

const addNew = async (req, res) => {
  const isValid = await validate.saleValidator(req);
  console.log(isValid);
  if (!isValid.status) {
    const result = await salesService.addNew(req.body);
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
