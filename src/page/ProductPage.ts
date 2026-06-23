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

    const locators = ProductPageLocators;

    this.productList = page.locator(locators.productList);
    this.addToCartButton = page.locator(locators.addToCartButton);
    this.shoppingCartLink = page.locator(locators.shoppingCartLink);
    this.notificationBar = page.locator(locators.notificationBar);
    this.cartItemCount = page.locator(locators.cartItemCount);
  }

  /**
   * Click a category in the top nav (e.g: "Electronics", "Computers", "Books", "Jewelry")
   * and waits for the category's product list to load
   * @param category
   */

  async navigateToCategory(category: string) {
    await this.page.click(`text=${category}`);
    await this.productList.first().waitFor({ state: "visible" });
  }

  /**
   * Clicks into a sub-category from within a category page
   * Call this after navigateToCategory if the category has sub categories
   */

  async navigateToSubCategory(subCategory: string) {
    await this.page.click(`text=${subCategory}`);
    await this.productList.first().waitFor({ state: "visible" });
  }

  /**
   * Find a product by its visible name in the current list,  click into its
   * detail page , adds it to cart, and wait for the confirmation notification
   * @param productName
   */
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

  /**
   * Adds a single product to a cart . Call navigateToCategory first
   * so the product is actually present in the list
   *
   */

  async addSingleProduct(productName: string) {
    await this.addProductToCart(productName);
  }

  /**
   * Adds multiple product to the cart from the same listing page
   * Since adding a product navigates into all details page, this goes
   * back to the listing after each add before picking the next one
   */

  async addMutlipleProducts(productNames: string[]) {
    for (const name of productNames) {
      await this.addProductToCart(name);
      await this.page.goBack();
      await this.productList.first().waitFor({ state: "visible" });
    }
  }

  /**
   * Add product across multiple categories in one call. Each entry can be
   * either a single product name or an array of names for that category,
   *
   * Example
   * await productPage.addProductFromDifferentCategories([
   * {category: 'electronics' , names: 'SmartPhone'},
   * {category: 'Computers', names: ["Build ....", "Own ......."]}
   * ])
   */

  async addProductsFromDifferentCategories(
    items: {
      category: string;
      subCategory?: string;
      names: string | string[];
    }[],
  ) {
    for (const item of items) {
      await this.navigateToCategory(item.category);

      // if the category has subcategories, drill into the right one first
      if (item.subCategory) {
        await this.navigateToSubCategory(item.subCategory);
      }

      if (Array.isArray(item.names)) {
        await this.addMutlipleProducts(item.names);
      } else {
        await this.addSingleProduct(item.names);
      }
    }
  }

  async goToShoppingCart() {
    await this.shoppingCartLink.click();
  }
}
