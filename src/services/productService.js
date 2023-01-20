const productsModel = require('../models/products.model');

const getAll = async () => productsModel.getAll();

const getById = async (id) => productsModel.getById(id);

const addNew = async (name) => productsModel.addNew(name);

const deleteById = async (name) => productsModel.deleteById(name);

const updateById = async (id, newName) => productsModel.updateById(id, newName);

module.exports = { getAll, getById, addNew, deleteById, updateById };