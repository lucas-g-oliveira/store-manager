const express = require('express');
const controlerProduct = require('../controllers/productController');

const router = express.Router();

router.get('/', controlerProduct.getAll);

router.get('/:id', controlerProduct.getById);

module.exports = router;