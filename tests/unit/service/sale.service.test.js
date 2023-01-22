const { expect } = require('chai');
const sinon = require('sinon');
const { salesService } = require('../../../src/services');
const salesModel = require('../../../src/models/sales.model');
const { allSalesFromDbMock, saleByIdMock } = require('../model/mocks/sales.model.mock');

describe('ferifica as funcoes da saleService', function () {
  describe('Verifica se é possível buscar todas as vendas', async function () {
    sinon.sinon(salesModel, 'getAll').resolves(allSalesFromDbMock);
    const result = await salesService.getAll();
    expect(result).to.be.deep.equal(allSalesFromDbMock);
  })

  describe('Verifica se é possível buscar uma venda pelo id', async function () {
    sinon.stub(salesModel, 'getById').resolves([saleByIdMock]);
    const result = await salesService.getById([{ id: 3 }])
    expect(result).to.be.deep.equal(allSalesFromDbMock);
  })
})