const { CartLocators } = require('../locators/CartLocators');

class CartPage {
  constructor(page) {
    this.page = page;
  }

  async proceedToCheckout() {
    await this.page.click(CartLocators.checkoutButton);
  }
}

module.exports = { CartPage };
