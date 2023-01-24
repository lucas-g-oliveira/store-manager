const model = require('../models');

const objReturn = (data) => ({ status: null, message: data });

const getAll = async () => {
  const data = await model.productsModel.getAll();
  return objReturn(data);
};

const getById = async (id) => {
  const data = await model.productsModel.getById(id);
  return objReturn(data);
};

const addNew = async (name) => {
  const data = await model.productsModel.addNew(name);
  return objReturn(data);
};

const deleteById = async (id) => model.productsModel.deleteById(id);

const updateById = async (id, newName) => {
  const data = await model.productsModel.updateById(id, newName);
  return objReturn(data);
};

module.exports = { getAll, getById, addNew, deleteById, updateById };