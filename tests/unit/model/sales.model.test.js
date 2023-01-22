const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { allSalesFromDbMock, saleByIdMock } = require('./mocks/sales.model.mock');

describe('Teste unitario das funções da modelSales', function () {
  describe('Recuperando todas as vendas do db', async function () {
    sinon.stub(connection, 'execute').resolves([allSalesFromDbMock])
    const result = await salesModel.getAll();
    expect(result).to.be.deep.equal(allSalesFromDbMock);
  });

  describe('Verifica se é possível recuperar uma venda pelo ID', async function () {
    sinon.stub(connection, 'execute').resolves([saleByIdMock]);
    const result = await salesModel.getById(1)
    expect(result).to.have.length(3);
    expect(result).to.be.deep.equal(saleByIdMock)
  });
});