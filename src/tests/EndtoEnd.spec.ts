import { test, expect } from "@playwright/test";
import { LoginPage } from "../page/LoginPage";
import { LogoutPage } from "../page/LogoutPage";
import { ProductPage } from "../page/ProductPage";
import { CartPage } from "../page/CartPage";
import { CheckoutPage } from "../page/CheckoutPage";
import { LoginTestData, ProductTestData, CheckoutTestData } from "../data/TestData";
import { LogoutPageLocators } from "../selector/Locators";

test.describe("End to End Flow", () => {
  let loginPage: LoginPage;
  let logoutPage: LogoutPage;
  let productPage: ProductPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;
  
  let loginData: { email: string; password: string };
  let productData: ProductTestData;
  let checkoutData: CheckoutTestData;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    
    loginData = new LoginTestData().valid;
    productData = new ProductTestData();
    checkoutData = new CheckoutTestData();
  });

  test("should successfully complete user flow from login to logout", async ({ page }) => {
    // 1. Navigate to the website and verify initial state (ensure logged out)
    await page.goto("/");
    const logoutLink = page.locator(LogoutPageLocators.logoutLink);
    const loginLink = page.locator(LogoutPageLocators.loginLink);

    if (await logoutLink.isVisible()) {
      console.log("User was already logged in. Logging out to start test clean.");
      await logoutPage.logout();
    }
    await expect(loginLink).toBeVisible();

    // 2. Perform Login
    await page.goto("/login");
    await loginPage.login(loginData);
    
    // Assert login is successful (username/email shown in header, and Logout is visible)
    await expect(logoutLink).toBeVisible();
    await expect(page.locator(`//a[normalize-space()='${loginData.email}']`)).toBeVisible();

    // 3. Clear cart to start shopping fresh
    await cartPage.clearCart();
    await page.goto("/");

    // 4. Shopping flow: Add product to cart
    await productPage.navigateToCategory("Books");
    const bookName = productData.books; // "Computing and Internet"
    await productPage.addSingleProduct(bookName);
    await expect(productPage.notificationBar).toBeVisible();

    // 5. Navigate to Cart and verify contents
    await cartPage.gotoShoppingCart();
    const cartCount = await cartPage.getCartItemsCount();
    expect(cartCount).toBeGreaterThan(0);
    
    const qty = await cartPage.getProductQuantity(bookName);
    expect(qty).toBeGreaterThanOrEqual(1);

    // 6. Proceed to Checkout
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL(/.*\/onepagecheckout/);

    // 7. Complete Checkout Steps
    // Fill billing address details
    await checkoutPage.fillBillingAddress(checkoutData.billingAddress);

    // Fill shipping address details
    await checkoutPage.fillShippingAddress(checkoutData.shippingAddress);

    // Select shipping method
    await checkoutPage.selectShippingMethod(checkoutData.shippingMethod);

    // Select payment method
    await checkoutPage.selectPaymentMethod(checkoutData.paymentMethod);

    // Continue past payment info
    await checkoutPage.selectPaymentInfo("");

    // Confirm the order
    await checkoutPage.confirmOrder();

    // 8. Verify Order Success
    const confirmTitle = await checkoutPage.getOrderConfirmTitle();
    expect(confirmTitle).toContain("Thank you");

    const successMsg = await checkoutPage.getOrderSuccessMessage();
    expect(successMsg).toContain("Your order has been successfully processed!");

    const orderNumber = await checkoutPage.getOrderNumber();
    console.log(`E2E Checkout Successful! Order Number: ${orderNumber}`);
    expect(orderNumber).not.toBe("");

    // 9. Perform Logout
    await logoutPage.logout();

    // 10. Verify post-logout state
    await expect(loginLink).toBeVisible();
    await expect(logoutLink).not.toBeVisible();
  });
});
