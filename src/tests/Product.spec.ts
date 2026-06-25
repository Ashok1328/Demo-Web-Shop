import { test, expect } from "@playwright/test";
import { LoginTestData, ProductTestData } from "../data/TestData";
import { ProductPage } from "../page/ProductPage";
import { LoginPage } from "../page/LoginPage";

test.describe("Add products - single and multiple", () => {
  let productPage: ProductPage;
  let productData: ProductTestData;

  test.beforeEach(async ({ page }) => {
    await page.goto("/login");

    const loginPage = new LoginPage(page);
    const creds = new LoginTestData().valid;

    await loginPage.login(creds);
    await page.waitForURL("/");

    productPage = new ProductPage(page);
    productData = new ProductTestData();
  });

  test("should add a single product from Electronics > cell phones", async () => {
    await productPage.navigateToCategory("Electronics");
    await productPage.navigateToCategory(productData.electronics.subCategory);
    await productPage.addSingleProduct(productData.electronics.single);

    await expect(productPage.notificationBar).toBeVisible();
  });

  test("should add multiple product from Computers", async () => {
    await productPage.navigateToCategory("Computers");
    await productPage.navigateToSubCategory(productData.computers.subCategory);
    await productPage.addMutlipleProducts(productData.computers.multiple);

    await productPage.goToShoppingCart();
    await expect(productPage.cartItemCount).toHaveText(
      String(productData.computers.multiple.length),
    );
  });

  test("should add single product from Books and Jewelry", async () => {
    await productPage.addProductsFromDifferentCategories([
      { category: "Books", names: productData.books },
      { category: "Jewelry", names: productData.jewelry },
    ]);

    await productPage.goToShoppingCart();
    await expect(productPage.cartItemCount).toHaveText("2");
  });

  test("should add products spanning categories, mixing single and multiple", async () => {
    await productPage.addProductsFromDifferentCategories([
      {
        category: "Electronics",
        subCategory: productData.electronics.subCategory,
        names: productData.electronics.single,
      },
      {
        category: "Computers",
        subCategory: productData.electronics.subCategory,
        names: productData.computers.multiple,
      },
      { category: "Books", names: productData.books },
    ]);
    const epxectedCount = 1 + productData.computers.multiple.length + 1;

    await productPage.goToShoppingCart();
    await expect(productPage.cartItemCount).toHaveText(String(epxectedCount));
  });
});
