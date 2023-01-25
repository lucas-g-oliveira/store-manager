const { expect } = require('chai');
const sinon = require('sinon');
const { allSales, getWithId1 } = require('./mocks/salesService.mock');
const salesService = require('../../../src/services/salesService');
const salesModel = require('../../../src/models/sales.model');

describe('Verifica as funcçoes da camada service da rota sales', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('Verifica se a função getAll retorna um objeto com status "null" e os dados', async () => {
    //aranjo
    sinon.stub(salesModel, 'getAll')
      .resolves(allSales);
    //ação
    const result = await salesService.getAll(); 
    //asserção
    expect(result.message).to.be.deep.equal(allSales);
    expect(result.status).to.be.null;
  })

  it('Verifiva se é possível buscar uma venda pelo id', async () => {
    //arrage
    sinon.stub(salesModel, 'getById')
      .resolves(getWithId1);
    //act
    const result = await salesService.getById(1);
    //asssert
    expect(result.message).to.be.deep.equal(getWithId1);
    expect(result.status).to.be.null;
  })
});