const {expect} = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/products.model');

const connection = require('./../../../src/models/connection');
const { getWithId1, allProducts } = require('./mocks/productModel.mock')

describe('Testa consultas de produtos', function () {
  it('Verifica se é possível listar todos os produtos', async function () {
    //arrage
    sinon.stub(connection, 'execute').resolves([allProducts]);
    //act
    const result = await productsModel.getAll();
    //asserts
    expect(result).to.be.deep.equal(allProducts);
  });
/* 
  it('Verifica se é possível buscar um produto pelo id', async function () {
    //arrage
    sinon.stub(connection, 'execute').resolves([[allProducts[0]]])
    // act
    const result = await productsModel.getById([{ id: 1 }]);
    // asserts
    expect([result]).to.be.deep.equal(allProducts[0]);
  }); */
})