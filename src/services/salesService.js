const salesModel = require('../models/sales.model');

const getAll = async () => salesModel.getAll();

const getById = async (id) => salesModel.getById(id);

const addNew = async (products) => salesModel.addNew(products);

module.exports = { getAll, getById, addNew };