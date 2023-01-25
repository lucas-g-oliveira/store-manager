const chai = require('chai');
const sinon = require('sinon');
const sinonSai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonSai);

const {allProducts} = require('./mocks/productControler.mock');
const productsService = require('../../../src/services/productService');
const productControler = require('../../../src//controllers/productController')

describe('Testa as funções da controler products', function () {
  it('Deve retornar todos os produtos e status 200 ao fazer um GET para /products', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();

    sinon.stub(productsService, 'getAll')
      .resolves({ status: null, message: allProducts });
    
    await productControler.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts)
  })
})