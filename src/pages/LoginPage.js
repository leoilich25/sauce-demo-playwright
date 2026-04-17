const { LoginLocators } = require('../locators/LoginLocators');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });
  }

  async submitLogin(username, password) {
    await this.page.fill(LoginLocators.usernameInput, username);
    await this.page.fill(LoginLocators.passwordInput, password);
    await this.page.click(LoginLocators.loginButton);
  }

  async waitForSuccessfulLogin() {
    await this.page.waitForSelector(LoginLocators.productsContainer, { timeout: 10000 });
  }

  async waitForLoginError() {
    await this.page.waitForSelector(LoginLocators.errorMessage, { timeout: 10000 });
  }

  async isProductsPageVisible() {
    return await this.page.locator(LoginLocators.productsContainer).isVisible();
  }

  async isErrorMessageVisible() {
    return await this.page.locator(LoginLocators.errorMessage).isVisible();
  }
}

module.exports = { LoginPage };
