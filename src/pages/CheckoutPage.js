const { CheckoutLocators } = require('../locators/CheckoutLocators');

class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async fillInformation(firstName, lastName, zipCode) {
    await this.page.fill(CheckoutLocators.firstNameInput, firstName);
    await this.page.fill(CheckoutLocators.lastNameInput, lastName);
    await this.page.fill(CheckoutLocators.zipCodeInput, zipCode);
    await this.page.click(CheckoutLocators.continueButton);
  }

  async finishCheckout() {
    await this.page.click(CheckoutLocators.finishButton);
  }

  async isConfirmationVisible() {
    return await this.page.locator(CheckoutLocators.confirmationMessage).isVisible();
  }
}

module.exports = { CheckoutPage };
