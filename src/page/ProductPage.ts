import { Page, Locator } from "@playwright/test";
import { ProductPageLocators } from "../selector/Locators";

export class ProductPage {
  readonly page: Page;
  readonly productList: Locator;
  readonly addToCartButton: Locator;
  readonly shoppingCartLink: Locator;
  readonly notificationBar: Locator;
  readonly cartItemCount: Locator;

  constructor(page: Page) {
    this.page = page;

    const locators = new ProductPageLocators();

    this.productList = page.locator(locators.productList);
    this.addToCartButton = page.locator(locators.addToCartButton);
    this.shoppingCartLink = page.locator(locators.shoppingCartLink);
    this.notificationBar = page.locator(locators.notificationBar);
    this.cartItemCount = page.locator(locators.cartItemCount);
  }

  async addProductToCart(productName: string) {
    const count = await this.productList.count();
    for (let i = 0; i < count; i++) {
      const item = this.productList.nth(i);
      const name = (await item.textContent())?.trim();
      if (name === productName) {
        await item.click();
        break;
      }
    }

    await this.addToCartButton.waitFor({ state: "visible" });
    await this.addToCartButton.click();
    await this.notificationBar.waitFor({ state: "visible" });
  }

  async goToShoppingCart() {
    await this.shoppingCartLink.click();
  }
}
