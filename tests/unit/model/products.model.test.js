const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { products, productByIdMock, addProductMock } = require('./mocks/products.model.mock');

describe('Teste unitario das funções da modelProduct', function () {
  describe('Recuperando todos os produtos do banco', async function () {
    sinon.stub(connection, 'execute').resolves([products])
    const result = await productsModel.getAll();
    expect(result).to.be.deep.equal(products);
  });

  describe('Verifica se é possível recuperar um unico produto pelo ID', async function () {
    sinon.stub(connection, 'execute').resolves([productByIdMock]);
    const result = await productsModel.getById([{ id: 3 }])
    expect(result).to.be.deep.equal(productByIdMock);
  });

  describe('Verifica se é retornado uma lista vazia caso o produto não exista', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);
    const result = await productsModel.get([{ id: 30 }]);
    expect(result).to.be.deep.equal([])
  });

  describe('Verifica se é possível adicionar um produto á tabela', async function () {
    const result = await productsModel.updateById(4, 'flash');
    expect(result).to.be.deep.equal(addProductMock);
  });
})