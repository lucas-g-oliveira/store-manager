const allProducts = [
  { "id": 1, "name": "Martelo de Thor" },
  { "id": 2, "name": "Traje de encolhimento" },
  { "id": 3, "name": "Escudo do Capitão América" }
];

const getWithId1 = { "id": 1, "name": "Martelo de Thor" };

const allProductsAfterInserted = [
  ...allProducts,
  { "id": 4, "name": "The Last Of US" }
];

const insert = [{ "name": "The Last Of US" }];

const idAfterInsert = 4;

module.exports = {
  allProductsAfterInserted,
  allProducts,
  getWithId1,
  idAfterInsert,
  insert,
}