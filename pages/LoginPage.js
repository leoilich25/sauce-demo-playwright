
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
    this.productsContainer = '.inventory_list';
  }

  
 async navigate() {
  await this.page.goto('https://www.saucedemo.com/', {
    waitUntil: 'domcontentloaded'
  });
}


  async submitLogin(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async waitForSuccessfulLogin() {
    await this.page.waitForSelector(this.productsContainer, { timeout: 10000 });
  }

  async waitForLoginError() {
    await this.page.waitForSelector(this.errorMessage, { timeout: 10000 });
  }

  async isProductsPageVisible() {
    return await this.page.locator(this.productsContainer).isVisible();
  }

  async isErrorMessageVisible() {
    return await this.page.locator(this.errorMessage).isVisible();
  }
}

module.exports = { LoginPage };
