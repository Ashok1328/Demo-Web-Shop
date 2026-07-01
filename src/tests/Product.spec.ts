import { test, expect } from "@playwright/test";
import { ProductTestData } from "../data/TestData";
import { ProductPage } from "../page/ProductPage";

test.describe("Add products - single and multiple", () => {
  let productPage: ProductPage;
  let productData: ProductTestData;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");

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

    await expect(productPage.notificationBar).toBeVisible();
  });

  test("should add single product from Books and Jewelry", async () => {
    await productPage.addProductsFromDifferentCategories([
      { category: "Books", names: productData.books },
      { category: "Jewelry", names: productData.jewelry },
    ]);

    await expect(productPage.notificationBar).toBeVisible();
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
        subCategory: productData.computers.subCategory,
        names: productData.computers.multiple,
      },
      { category: "Books", names: productData.books },
    ]);

    await expect(productPage.notificationBar).toBeVisible();
  });
});
