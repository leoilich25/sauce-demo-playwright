
const { createBdd } = require('playwright-bdd');
const { test } = require('../support/fixtures');

const { Given, When, Then } = createBdd(test);

Given('que el usuario ha iniciado sesión como {string}', async ({ loginPage }, userType) => {
  const users = {
    standard_user: { username: 'standard_user', password: 'secret_sauce' },
  };

  await loginPage.navigate();
  await loginPage.submitLogin(users[userType].username, users[userType].password);
  await loginPage.waitForSuccessfulLogin();
});

When('el usuario agrega un producto al carrito', async ({ productsPage }) => {
  await productsPage.addProductToCart();
  await productsPage.goToCart();
});

Then('el producto debería mostrarse en el carrito de compras', async ({ productsPage }) => {
  const isVisible = await productsPage.isProductInCart();
  if (!isVisible) {
    throw new Error('El producto no se encuentra en el carrito');
  }
});
