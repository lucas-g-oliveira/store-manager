const CODE_422 = '422';
const CODE_400 = '400';

const resExpress = (code, msgErr) => ({ status: code, message: msgErr });
const ifExistsKey = (key, object) => Object.keys(object).includes(key);

const resKeyNotFound = (key) => {
  const msg = `"${key}" is required`;
  return resExpress(CODE_400, msg);
};

function nameValidator(req) {
  const msg = '"name" length must be at least 5 characters long';
  if (!ifExistsKey('name', req.body)) return resKeyNotFound('name');
  if (req.body.name.length < 5) return resExpress(CODE_422, msg);
  return true;
}

function saleValidator(req) {
  if (!ifExistsKey('saleId', req.body)) return resKeyNotFound('saleId');
  if (!ifExistsKey('productId', req.body)) return resKeyNotFound('productId');
  if (!ifExistsKey('quantity', req.body)) return resKeyNotFound('quantity');
  return true;
}

module.exports = { nameValidator, saleValidator };