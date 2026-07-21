# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Checkout.spec.ts >> Checkout Verification >> verify successful one-page checkout and logout
- Location: src\tests\Checkout.spec.ts:43:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*\/onepagecheckout/
Received string:  "https://demowebshop.tricentis.com/cart"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://demowebshop.tricentis.com/cart"

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "Batasey22@gmail.com":
      - /url: /customer/info
  - listitem:
    - link "Log out":
      - /url: /logout
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
- status
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- list:
  - listitem:
    - link "Cart":
      - /url: /cart
  - listitem: Address
  - listitem: Shipping
  - listitem: Payment
  - listitem: Confirm
  - listitem: Complete
- heading "Shopping cart" [level=1]
- text: Your Shopping Cart is empty!
- heading "Information" [level=3]
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & Returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy Notice":
      - /url: /privacy-policy
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- heading "Customer service" [level=3]
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- heading "My account" [level=3]
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /customer/orders
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
- heading "Follow us" [level=3]
- list:
  - listitem:
    - link "Facebook":
      - /url: http://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: http://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Google+":
      - /url: https://plus.google.com/+nopcommerce
- text: Powered by
- link "nopCommerce":
  - /url: http://www.nopcommerce.com/
- text: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { ProductPage } from "../page/ProductPage";
  3  | import { CartPage } from "../page/CartPage";
  4  | import { CheckoutPage } from "../page/CheckoutPage";
  5  | import { LoginPage } from "../page/LoginPage";
  6  | import { LogoutPage } from "../page/LogoutPage";
  7  | import { LoginTestData, ProductTestData, CheckoutTestData } from "../data/TestData";
  8  | 
  9  | test.describe("Checkout Verification", () => {
  10 |   let productPage: ProductPage;
  11 |   let cartPage: CartPage;
  12 |   let checkoutPage: CheckoutPage;
  13 |   let logoutPage: LogoutPage;
  14 |   let productData: ProductTestData;
  15 |   let checkoutData: CheckoutTestData;
  16 | 
  17 |   test.beforeEach(async ({ page }) => {
  18 |     productPage = new ProductPage(page);
  19 |     cartPage = new CartPage(page);
  20 |     checkoutPage = new CheckoutPage(page);
  21 |     logoutPage = new LogoutPage(page);
  22 |     productData = new ProductTestData();
  23 |     checkoutData = new CheckoutTestData();
  24 | 
  25 |     await page.goto("/");
  26 |     
  27 |     // Ensure the user is logged in
  28 |     const logoutLink = page.locator("a.ico-logout");
  29 |     if (!(await logoutLink.isVisible())) {
  30 |       const loginPage = new LoginPage(page);
  31 |       const loginData = new LoginTestData().valid;
  32 |       await page.goto("/login");
  33 |       await loginPage.login(loginData);
  34 |       await logoutLink.waitFor({ state: "visible" });
  35 |       await page.goto("/");
  36 |     }
  37 | 
  38 |     // Clear cart before test run
  39 |     await cartPage.clearCart();
  40 |     await page.goto("/");
  41 |   });
  42 | 
  43 |   test("verify successful one-page checkout and logout", async ({ page }) => {
  44 |     // 1. Add product to cart
  45 |     await productPage.navigateToCategory("Books");
  46 |     const bookName = productData.books; // "Computing and Internet"
  47 |     await productPage.addSingleProduct(bookName);
  48 |     await expect(productPage.notificationBar).toBeVisible();
  49 | 
  50 |     // 2. Go to shopping cart page
  51 |     await cartPage.gotoShoppingCart();
  52 | 
  53 |     // 3. Agree to terms of service and proceed to checkout
  54 |     await cartPage.proceedToCheckout();
> 55 |     await expect(page).toHaveURL(/.*\/onepagecheckout/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  56 | 
  57 |     // 4. Fill billing address details
  58 |     await checkoutPage.fillBillingAddress(checkoutData.billingAddress);
  59 | 
  60 |     // 5. Fill shipping address details
  61 |     await checkoutPage.fillShippingAddress(checkoutData.shippingAddress);
  62 | 
  63 |     // 6. Select shipping method
  64 |     await checkoutPage.selectShippingMethod(checkoutData.shippingMethod);
  65 | 
  66 |     // 7. Select payment method
  67 |     await checkoutPage.selectPaymentMethod(checkoutData.paymentMethod);
  68 | 
  69 |     // 8. Select payment info
  70 |     await checkoutPage.selectPaymentInfo("");
  71 | 
  72 |     // 9. Confirm order
  73 |     await checkoutPage.confirmOrder();
  74 | 
  75 |     // 10. Assert success and grab order number
  76 |     const title = await checkoutPage.getOrderConfirmTitle();
  77 |     expect(title).toContain("Thank you");
  78 | 
  79 |     const message = await checkoutPage.getOrderSuccessMessage();
  80 |     expect(message).toContain("Your order has been successfully processed!");
  81 | 
  82 |     const orderNo = await checkoutPage.getOrderNumber();
  83 |     console.log(`Checkout Verification Successful. Order Number: ${orderNo}`);
  84 |     expect(orderNo).not.toBe("");
  85 | 
  86 |     // 11. Perform logout process
  87 |     await logoutPage.logout();
  88 |   });
  89 | });
```