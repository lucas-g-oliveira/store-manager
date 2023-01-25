const chai = require('chai');
const sinon = require('sinon');
const sinonSai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonSai);

const {allSales, getWithId1  } = require('./mocks/salesControler.mock');
const salesService = require('../../../src/services/salesService');
const salesControler = require('../../../src/controllers/salesController');

describe('Testa as funções da controler sales', function () {

  afterEach(() => {
    sinon.restore();
  });

  it('Deve retornar todos as vendas e status 200 ao fazer um GET para /sales', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'getAll')
      .resolves({ status: null, message: allSales });

    await salesControler.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);
  })

  it('Deve ser possível buscar uma vanda pelo id', async () => {
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, 'getById')
      .resolves({ status: null, message: getWithId1 });

    await salesControler.getById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(getWithId1);
  });
});