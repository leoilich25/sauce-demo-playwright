const { ProductsLocators } = require('../locators/ProductsLocators');

class ProductsPage {
  constructor(page) {
    this.page = page;
  }

  async addProductToCart() {
    await this.page.click(ProductsLocators.addToCartButton);
  }

  async goToCart() {
    await this.page.click(ProductsLocators.cartIcon);
  }

  async isProductInCart() {
    return await this.page.locator(ProductsLocators.cartItem).isVisible();
  }
}

module.exports = { ProductsPage };
