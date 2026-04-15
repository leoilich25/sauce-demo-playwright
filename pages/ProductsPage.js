class ProductsPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.cartIcon = '.shopping_cart_link';
    this.cartItem = '.inventory_item_name';
  }

  async addProductToCart() {
    await this.page.click(this.addToCartButton);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async isProductInCart() {
    return await this.page.locator(this.cartItem).isVisible();
  }
}

module.exports = { ProductsPage };
