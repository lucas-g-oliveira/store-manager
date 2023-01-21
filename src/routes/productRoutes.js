const express = require('express');
const controlerProduct = require('../controllers/productController');

const router = express.Router();

router.get('/', controlerProduct.getAll);

router.get('/:id', controlerProduct.getById);

router.post('/', controlerProduct.addNew);

router.delete('/:id', controlerProduct.deleteById);

router.put('/:id', controlerProduct.updateById);

module.exports = router;