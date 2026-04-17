const { createBdd } = require('playwright-bdd');
const { test } = require('../support/fixtures');

const { Given, When, Then } = createBdd(test);

Given('que el usuario navega a la página de login de Sauce Demo', async ({ loginPage }) => {
  await loginPage.navigate();
});

When('el usuario inicia sesión con credenciales válidas de {string}', async ({ loginPage }, userType) => {
  const users = {
    standard_user: { username: 'standard_user', password: 'secret_sauce' },
    locked_out_user: { username: 'locked_out_user', password: 'secret_sauce' },
  };

  const user = users[userType];
  await loginPage.submitLogin(user.username, user.password);

  if (userType === 'standard_user') {
    await loginPage.waitForSuccessfulLogin();
  }

  if (userType === 'locked_out_user') {
    await loginPage.waitForLoginError();
  }
});

Then('el usuario debería ver la página de productos', async ({ loginPage }) => {
  const isVisible = await loginPage.isProductsPageVisible();
  if (!isVisible) {
    throw new Error('La página de productos no es visible');
  }
});

Then('el sistema debería mostrar un mensaje de error', async ({ loginPage }) => {
  const isVisible = await loginPage.isErrorMessageVisible();
  if (!isVisible) {
    throw new Error('El mensaje de error no se mostró');
  }
});

When('el usuario intenta iniciar sesión con {string} y {string}', async ({ loginPage }, usuario, contrasena) => {
  await loginPage.submitLogin(usuario, contrasena);
});

Then('el resultado del login debería ser {string}', async ({ loginPage }, resultado) => {
  if (resultado === 'exitoso') {
    await loginPage.waitForSuccessfulLogin();
    const isVisible = await loginPage.isProductsPageVisible();
    if (!isVisible) throw new Error('La página de productos no es visible');
  } else if (resultado === 'error') {
    await loginPage.waitForLoginError();
    const isVisible = await loginPage.isErrorMessageVisible();
    if (!isVisible) throw new Error('El mensaje de error no se mostró');
  }
});
