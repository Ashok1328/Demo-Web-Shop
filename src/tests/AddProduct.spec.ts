import { test, expect } from "@playwright/test";
import { ProductPage } from "../page/ProductPage";

test.describe("Home Page - Add to Cart", () => {
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    productPage = new ProductPage(page);
  });

  test("should add a product to the cart and show notification", async () => {
    await productPage.addProductToCart("14.1-inch Laptop");

    await expect(productPage.notificationBar).toBeVisible();
  });

  test("should navigate to the shopping cart page", async ({ page }) => {
    await productPage.addProductToCart("14.1-inch Laptop");
    await productPage.goToShoppingCart();

    await expect(page).toHaveURL(/cart/i);
  });

  test("should display the correct product list count", async () => {
    const count = await productPage.productList.count();
    expect(count).toBeGreaterThan(5);
  });
});
