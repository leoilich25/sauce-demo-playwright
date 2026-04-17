const { createBdd } = require('playwright-bdd');
const { test } = require('../support/fixtures');

const { Given, When, Then } = createBdd(test);

Given('que el usuario tiene un producto en el carrito', async ({ productsPage }) => {
  await productsPage.addProductToCart();
  await productsPage.goToCart();
});

When('el usuario completa el proceso de checkout', async ({ cartPage, checkoutPage }) => {
  await cartPage.proceedToCheckout();
  await checkoutPage.fillInformation('Emilio', 'Saavedra', '12345');
  await checkoutPage.finishCheckout();
});

Then('debería ver la confirmación de compra exitosa', async ({ checkoutPage }) => {
  const isVisible = await checkoutPage.isConfirmationVisible();
  if (!isVisible) {
    throw new Error('No se mostró la confirmación de compra');
  }
});
