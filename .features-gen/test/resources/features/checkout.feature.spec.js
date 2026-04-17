// Generated from: test\resources\features\checkout.feature
import { test } from "../../../../test/e2e/support/fixtures.js";

test.describe('Proceso de compra', () => {

  test.beforeEach('Background', async ({ Given, And, loginPage, productsPage }, testInfo) => { if (testInfo.error) return;
    await Given('que el usuario ha iniciado sesión como "standard_user"', null, { loginPage }); 
    await And('que el usuario tiene un producto en el carrito', null, { productsPage }); 
  });
  
  test('Completar compra exitosamente', { tag: ['@checkout'] }, async ({ When, Then, cartPage, checkoutPage }) => { 
    await When('el usuario completa el proceso de checkout', null, { cartPage, checkoutPage }); 
    await Then('debería ver la confirmación de compra exitosa', null, { checkoutPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('test\\resources\\features\\checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":13,"tags":["@checkout"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given que el usuario ha iniciado sesión como \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":39,"value":"\"standard_user\"","children":[{"start":40,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And que el usuario tiene un producto en el carrito","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When el usuario completa el proceso de checkout","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then debería ver la confirmación de compra exitosa","stepMatchArguments":[]}]},
]; // bdd-data-end