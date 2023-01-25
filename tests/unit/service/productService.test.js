const { expect } = require('chai');
const sinon = require('sinon');

const {allProducts} = require('./mocks/productService.mock');
const productsService = require('../../../src/services/productService');
const productsModel = require('../../../src/models/products.model');

describe('Verifica se service produtos se comporta como esperado', function () {
  it('Verifica se é possível listar todos os produtos', async function () {
    //arrage
    sinon.stub(productsService, 'getAll')
      .resolves({ status: null, message: allProducts });
    //act
    const result = await productsService.getAll();
    //assertion
    expect(result.message).to.be.deep.equal(allProducts);
    expect(result.status).to.be.null;
  });

  it('Verifica se é possível recuperar um produto pelo ID', async function () {
    sinon.stub(productsService, 'getById').resolves({ status: null, message: allProducts[0] });

    const result = await productsService.getById(1);

    expect(result.message).to.be.deep.equal(allProducts[0]);
    expect(result.status).to.be.null;
  })
});



