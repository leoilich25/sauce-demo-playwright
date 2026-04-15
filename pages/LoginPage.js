class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async isProductsPageVisible() {
    return await this.page.locator('.inventory_list').isVisible();
  }

  async isErrorMessageVisible() {
    return await this.page.locator(this.errorMessage).isVisible();
  }
}

module.exports = { LoginPage };
