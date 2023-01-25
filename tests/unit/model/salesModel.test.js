const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesModel = require('../../../src/models/products.model');

const { expect } = chai;
chai.use(sinonChai);

const connection = require('./../../../src/models/connection');
const { allSales } = require('./mocks/salesModel.mock')

/* describe('Testa consultas de produtos', function () {
  it('Verifica se é possível listar todas as vendas', async function () {
    //arrage
    sinon.stub(connection, 'execute').resolves([allSales]);
    //act
    const result = await salesModel.getAll()
    //asserts
    expect(result).to.be.deep.equal(allSales);
  });

  it('Verifica se é possível buscar um produto pelo id', async function () {
    //arrage
    sinon.stub(connection, 'execute').resolves(sales.getWithId1)
    //act
    const result = await salesModel.getById(1);
    //asserts
    expect(result).to.be.length(2);
  });
}) */