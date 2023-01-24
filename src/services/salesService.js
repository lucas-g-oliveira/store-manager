const salesModel = require('../models/sales.model');

const objReturn = (data) => ({ status: null, message: data });

const getAll = async () => {
  const data = await salesModel.getAll();
  return objReturn(data);
};

const getById = async (id) => {
  const data = await salesModel.getById(id);
  return objReturn(data);
};

const addNew = async (products) => {
  const data = await salesModel.addNew(products);
  return objReturn(data);
};

module.exports = { getAll, getById, addNew };