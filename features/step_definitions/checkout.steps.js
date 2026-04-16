
const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductsPage');
const { CartPage } = require('../../pages/CartPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');

Given('que el usuario tiene un producto en el carrito', async function () {
  this.productsPage = new ProductsPage(this.page);
  await this.productsPage.addProductToCart();
  await this.productsPage.goToCart();
});

When('el usuario completa el proceso de checkout', async function () {
  this.cartPage = new CartPage(this.page);
  await this.cartPage.proceedToCheckout();

  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.fillInformation('Emilio', 'Saavedra', '12345');
  await this.checkoutPage.finishCheckout();
});

Then('debería ver la confirmación de compra exitosa', async function () {
  const isVisible = await this.checkoutPage.isConfirmationVisible();
  if (!isVisible) {
    throw new Error('No se mostró la confirmación de compra');
  }
});
