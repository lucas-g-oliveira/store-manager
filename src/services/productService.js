const productsModel = require('../models/products.model');

const getAll = async () => productsModel.getAll();

const getById = async (id) => productsModel.getById(id);

const addNew = async (name) => productsModel.addNew(name);

module.exports = { getAll, getById, addNew };