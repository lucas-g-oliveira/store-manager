const chai = require('chai');
const sinon = require('sinon');
const sinonSai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonSai);

const { allProducts, getWithId1 } = require('./mocks/productControler.mock');
const productsService = require('../../../src/services/productService');
const productControler = require('../../../src/controllers/productController')

describe('Testa as funções da controler products', function () {

  afterEach(() => {
    sinon.restore();
  });

  it('Deve retornar todos os produtos e status 200 ao fazer um GET para /products', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getAll')
      .resolves({ status: null, message: allProducts });

    await productControler.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts);
  })

  it('Deve ser possível buscar um produto pelo id', async () => {
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'getById')
      .resolves({ status: null, message: getWithId1 });
    
    await productControler.getById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(getWithId1[0]);
  });
});