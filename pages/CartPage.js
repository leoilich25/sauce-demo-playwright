
class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = '[data-test="checkout"]';
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = { CartPage };
