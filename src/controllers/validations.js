const productService = require('../services/productService');

const CODE_422 = '422';
const CODE_400 = '400';
const CODE_404 = '404';

const resp = (code, msgErr) => ({ status: code, message: msgErr });
const ifExistsKey = (key, object) => Object.keys(object).includes(key);
const notFound = (key) => resp(CODE_404, `${key} not found`);
const resKeyNotFound = (key) => resp(CODE_400, `"${key}" is required`);

function nameValidator(req) {
  const msg = '"name" length must be at least 5 characters long';
  if (!ifExistsKey('name', req.body)) return resKeyNotFound('name');
  if (req.body.name.length < 5) return resp(CODE_422, msg);
  return true;
}

const saleValidator = async (req) => {
  const msgQtd = (key) => `"${key}" must be greater than or equal to 1`;

  if (!req.body.every((e) => ifExistsKey('productId', e))) return resKeyNotFound('productId');
  if (!req.body.every((e) => ifExistsKey('quantity', e))) return resKeyNotFound('quantity');
  if (!req.body.every((e) => e.quantity > 0)) return resp(CODE_422, msgQtd('quantity'));
  const idProducts = req.body.map((e) => ({ id: e.productId }));
  const products = await productService.getById(idProducts);
  if (products.length !== req.body.length) return notFound('Product');
  return true;
};

module.exports = { nameValidator, saleValidator };