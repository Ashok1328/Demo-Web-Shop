import { test, expect } from "@playwright/test";
import { ProductPage } from "../page/ProductPage";
import { CartPage } from "../page/CartPage";
import { CheckoutPage } from "../page/CheckoutPage";
import { LoginPage } from "../page/LoginPage";
import { LogoutPage } from "../page/LogoutPage";
import { LoginTestData, ProductTestData, CheckoutTestData } from "../data/TestData";

test.describe("Checkout Verification", () => {
  let productPage: ProductPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;
  let logoutPage: LogoutPage;
  let productData: ProductTestData;
  let checkoutData: CheckoutTestData;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    logoutPage = new LogoutPage(page);
    productData = new ProductTestData();
    checkoutData = new CheckoutTestData();

    await page.goto("/");
    
    // Ensure the user is logged in
    const logoutLink = page.locator("a.ico-logout");
    if (!(await logoutLink.isVisible())) {
      const loginPage = new LoginPage(page);
      const loginData = new LoginTestData().valid;
      await page.goto("/login");
      await loginPage.login(loginData);
      await page.goto("/");
    }

    // Clear cart before test run
    await cartPage.clearCart();
    await page.goto("/");
  });

  test("verify successful one-page checkout and logout", async ({ page }) => {
    // 1. Add product to cart
    await productPage.navigateToCategory("Books");
    const bookName = productData.books; // "Computing and Internet"
    await productPage.addSingleProduct(bookName);
    await expect(productPage.notificationBar).toBeVisible();

    // 2. Go to shopping cart page
    await cartPage.gotoShoppingCart();

    // 3. Agree to terms of service and proceed to checkout
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL(/.*\/onepagecheckout/);

    // 4. Fill billing address details
    await checkoutPage.fillBillingAddress(checkoutData.billingAddress);

    // 5. Fill shipping address details
    await checkoutPage.fillShippingAddress(checkoutData.shippingAddress);

    // 6. Select shipping method
    await checkoutPage.selectShippingMethod(checkoutData.shippingMethod);

    // 7. Select payment method
    await checkoutPage.selectPaymentMethod(checkoutData.paymentMethod);

    // 8. Select payment info
    await checkoutPage.selectPaymentInfo("");

    // 9. Confirm order
    await checkoutPage.confirmOrder();

    // 10. Assert success and grab order number
    const title = await checkoutPage.getOrderConfirmTitle();
    expect(title).toContain("Thank you");

    const message = await checkoutPage.getOrderSuccessMessage();
    expect(message).toContain("Your order has been successfully processed!");

    const orderNo = await checkoutPage.getOrderNumber();
    console.log(`Checkout Verification Successful. Order Number: ${orderNo}`);
    expect(orderNo).not.toBe("");

    // 11. Perform logout process
    await logoutPage.logout();
  });
});