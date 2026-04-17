// Generated from: test\resources\features\cart.feature
import { test } from "../../../../test/e2e/support/fixtures.js";

test.describe('Gestión del carrito de compras', () => {

  test.beforeEach('Background', async ({ Given, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('que el usuario ha iniciado sesión como "standard_user"', null, { loginPage }); 
  });
  
  test('Agregar un producto al carrito', { tag: ['@cart'] }, async ({ When, Then, productsPage }) => { 
    await When('el usuario agrega un producto al carrito', null, { productsPage }); 
    await Then('el producto debería mostrarse en el carrito de compras', null, { productsPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('test\\resources\\features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":12,"tags":["@cart"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given que el usuario ha iniciado sesión como \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":39,"value":"\"standard_user\"","children":[{"start":40,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When el usuario agrega un producto al carrito","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then el producto debería mostrarse en el carrito de compras","stepMatchArguments":[]}]},
]; // bdd-data-end