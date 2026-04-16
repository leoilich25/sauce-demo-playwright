
const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../../pages/LoginPage');

Given('que el usuario navega a la página de login de Sauce Demo', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});


When('el usuario inicia sesión con credenciales válidas de {string}', async function (userType) {
  const users = {
    standard_user: {
      username: 'standard_user',
      password: 'secret_sauce'
    },
    locked_out_user: {
      username: 'locked_out_user',
      password: 'secret_sauce'
    }
  };

  const user = users[userType];
  await this.loginPage.submitLogin(user.username, user.password);

  if (userType === 'standard_user') {
    await this.loginPage.waitForSuccessfulLogin();
  }

  if (userType === 'locked_out_user') {
    await this.loginPage.waitForLoginError();
  }
});


Then('el usuario debería ver la página de productos', async function () {
  const isVisible = await this.loginPage.isProductsPageVisible();
  if (!isVisible) {
    throw new Error('La página de productos no es visible');
  }
});

Then('el sistema debería mostrar un mensaje de error', async function () {
  const isVisible = await this.loginPage.isErrorMessageVisible();
  if (!isVisible) {
    throw new Error('El mensaje de error no se mostró');
  }
});
