const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesModel = require('../../../src/models/sales.model');

const { expect } = chai;
chai.use(sinonChai);

const connection = require('./../../../src/models/connection');
const { allSales, getWithId1 } = require('./mocks/salesModel.mock')

describe('Testa consultas de vendas', function () {
  this.afterEach(() => {
    sinon.restore();
  });

  it('Verifica se é possível listar todas as vendas', async function () {
    //arrage
    sinon.stub(connection, 'execute').resolves([allSales]);
    //act
    const result = await salesModel.getAll()
    //asserts
    expect(result).to.be.deep.equal(allSales);
  });

  it('Verifica se é possível buscar uma vanda pelo id', async function () {
    //arrage
    sinon.stub(connection, 'execute').resolves([getWithId1])
    //act
    const result = await salesModel.getById(1);
    //asserts
    expect(result).to.be.deep.equal(getWithId1);
    expect(result).to.be.length(2);
  });
})