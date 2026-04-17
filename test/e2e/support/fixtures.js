const { test: base } = require('playwright-bdd');
const { LoginPage } = require('../../../src/pages/LoginPage');
const { ProductsPage } = require('../../../src/pages/ProductsPage');
const { CartPage } = require('../../../src/pages/CartPage');
const { CheckoutPage } = require('../../../src/pages/CheckoutPage');

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
});

module.exports = { test };
