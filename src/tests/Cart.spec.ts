import { test, expect } from "@playwright/test";
import { ProductPage } from "../page/ProductPage";
import { CartPage } from "../page/CartPage";
import { ProductTestData } from "../data/TestData";

test.describe("Shopping Cart Verification", () => {
  let productPage: ProductPage;
  let cartPage: CartPage;
  let productData: ProductTestData;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    productData = new ProductTestData();
    
    await page.goto("/");
    await cartPage.clearCart();
    await page.goto("/");
  });

  test("should verify cart item quantities, estimate shipping, and proceed to checkout", async ({ page }) => {
    // 1. Add product to cart
    await productPage.navigateToCategory("Books");
    const bookName = productData.books; // "Computing and Internet"
    await productPage.addSingleProduct(bookName);
    await expect(productPage.notificationBar).toBeVisible();

    // 2. Go to shopping cart page
    await cartPage.gotoShoppingCart();

    // 3. Verify the individual quantity of the added product
    const qty = await cartPage.getProductQuantity(bookName);
    expect(qty).toBe(1);

    // 4. Estimate shipping
    await cartPage.estimateShippingDetails("United States", "California", "90210");

    // 5. Display/retrieve order totals
    const totals = await cartPage.getOrderTotals();
    expect(totals.subtotal).not.toBe("");
    expect(totals.shipping).not.toBe("");
    expect(totals.tax).not.toBe("");
    expect(totals.total).not.toBe("");

    // 6. Proceed to checkout
    await cartPage.proceedToCheckout();
    
    // Verify we reached the checkout page
    await expect(page).toHaveURL(/.*\/onepagecheckout/);
  });
});
