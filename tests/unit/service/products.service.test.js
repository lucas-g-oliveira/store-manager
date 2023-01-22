const { expect } = require('chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const productModel = require('../../../src/models/products.model');
const { products, productByIdMock, addProductMock } = require('../model/mocks/products.model.mock');

describe('Verifica as funções da camada service', function () {
  describe('Verifica se é possível buscar todos os produtos', async function () {
    sinon.sinon(productModel, 'getAll').resolves(products);
    const result = await productService.getAll();
    expect(result).to.be.deep.equal(products);
  })

  describe('Verifica se é possível buscar uma produto pelo id', async function () {
    sinon.stub(productModel, 'getById').resolves([productByIdMock]);
    const result = await productService.getById([{ id: 3 }])
    expect(result).to.be.deep.equal(productByIdMock);
  })

  describe('Verifica se é retornado uma lista vazia caso o produto não exista', async function () {
    sinon.stub(productModel, 'updateById').resolves([[]]);
    const result = await productService.getById([{ id: 30 }]);
    expect(result).to.be.deep.equal([])
  });

  describe('Verifica se é possível adicionar um produto á tabela', async function () {
    const result = await productsModel.updateById(4, 'flash');
    expect(result).to.be.deep.equal(addProductMock);
  });
})