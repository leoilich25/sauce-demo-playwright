
const { Given, When, Then } = require('@cucumber/cucumber');

Given('que el usuario navega a la página de login de Sauce Demo', async function () {
  await this.page.goto('https://www.saucedemo.com/');
});

When('el usuario inicia sesión con credenciales válidas de {string}', async function (userType) {
  // lo implementaremos en el siguiente paso
});

Then('el usuario debería ver la página de productos', async function () {
  // lo implementaremos en el siguiente paso
});

Then('el sistema debería mostrar un mensaje de error', async function () {
  // lo implementaremos en el siguiente paso
});
