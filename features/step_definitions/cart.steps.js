const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductsPage');

Given('que el usuario ha iniciado sesión como {string}', async function (userType) {
  const users = {
    standard_user: {
      username: 'standard_user',
      password: 'secret_sauce'
    }
  };

  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
  await this.loginPage.login(
    users[userType].username,
    users[userType].password
  );

  this.productsPage = new ProductsPage(this.page);
});

When('el usuario agrega un producto al carrito', async function () {
  await this.productsPage.addProductToCart();
  await this.productsPage.goToCart();
});

Then('el producto debería mostrarse en el carrito de compras', async function () {
  const isVisible = await this.productsPage.isProductInCart();
  if (!isVisible) {
    throw new Error('El producto no se encuentra en el carrito');
  }
});
