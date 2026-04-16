class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = '[data-test="firstName"]';
    this.lastNameInput = '[data-test="lastName"]';
    this.zipCodeInput = '[data-test="postalCode"]';
    this.continueButton = '[data-test="continue"]';
    this.finishButton = '[data-test="finish"]';
    this.confirmationMessage = '.complete-header';
  }

  async fillInformation(firstName, lastName, zipCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.zipCodeInput, zipCode);
    await this.page.click(this.continueButton);
  }

  async finishCheckout() {
    await this.page.click(this.finishButton);
  }

  async isConfirmationVisible() {
    return await this.page.locator(this.confirmationMessage).isVisible();
  }
}

module.exports = { CheckoutPage };
