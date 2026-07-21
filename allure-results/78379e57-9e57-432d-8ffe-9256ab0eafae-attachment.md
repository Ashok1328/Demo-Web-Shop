# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Checkout.spec.ts >> Checkout Verification >> verify successful one-page checkout and logout
- Location: src\tests\Checkout.spec.ts:43:7

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.no-data') to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - link "Tricentis Demo Web Shop" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=e7]
      - list [ref=e10]:
        - listitem [ref=e11]:
          - link "Batasey22@gmail.com" [ref=e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=e13]:
          - link "Log out" [ref=e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=e15]:
          - link "Shopping cart (0)" [ref=e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=e17]: Shopping cart
            - generic [ref=e18]: (0)
        - listitem [ref=e19]:
          - link "Wishlist (0)" [ref=e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=e21]: Wishlist
            - generic [ref=e22]: (0)
      - generic [ref=e24]:
        - status [ref=e25]
        - textbox [ref=e26]: Search store
        - button "Search" [ref=e27] [cursor=pointer]
    - list [ref=e29]:
      - listitem [ref=e30]:
        - link "Books" [ref=e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=e32]:
        - link "Computers" [ref=e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=e34]:
        - link "Electronics" [ref=e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=e36]:
        - link "Apparel & Shoes" [ref=e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=e38]:
        - link "Digital downloads" [ref=e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=e40]:
        - link "Jewelry" [ref=e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=e42]:
        - link "Gift Cards" [ref=e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic [ref=e44]:
      - list [ref=e46]:
        - listitem [ref=e47]:
          - link "Cart" [ref=e48] [cursor=pointer]:
            - /url: /cart
        - listitem [ref=e49]: Address
        - listitem [ref=e50]: Shipping
        - listitem [ref=e51]: Payment
        - listitem [ref=e52]: Confirm
        - listitem [ref=e53]: Complete
      - generic [ref=e54]:
        - heading "Shopping cart" [level=1] [ref=e56]
        - generic [ref=e58]: Your Shopping Cart is empty!
  - generic [ref=e59]:
    - generic [ref=e60]:
      - generic [ref=e61]:
        - heading "Information" [level=3] [ref=e62]
        - list [ref=e63]:
          - listitem [ref=e64]:
            - link "Sitemap" [ref=e65] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e66]:
            - link "Shipping & Returns" [ref=e67] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e68]:
            - link "Privacy Notice" [ref=e69] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e70]:
            - link "Conditions of Use" [ref=e71] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e72]:
            - link "About us" [ref=e73] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e74]:
            - link "Contact us" [ref=e75] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e76]:
        - heading "Customer service" [level=3] [ref=e77]
        - list [ref=e78]:
          - listitem [ref=e79]:
            - link "Search" [ref=e80] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e81]:
            - link "News" [ref=e82] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e83]:
            - link "Blog" [ref=e84] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e85]:
            - link "Recently viewed products" [ref=e86] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e87]:
            - link "Compare products list" [ref=e88] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e89]:
            - link "New products" [ref=e90] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e91]:
        - heading "My account" [level=3] [ref=e92]
        - list [ref=e93]:
          - listitem [ref=e94]:
            - link "My account" [ref=e95] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e96]:
            - link "Orders" [ref=e97] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e98]:
            - link "Addresses" [ref=e99] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e100]:
            - link "Shopping cart" [ref=e101] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e102]:
            - link "Wishlist" [ref=e103] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e104]:
        - heading "Follow us" [level=3] [ref=e105]
        - list [ref=e106]:
          - listitem [ref=e107]:
            - link "Facebook" [ref=e108] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e109]:
            - link "Twitter" [ref=e110] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e111]:
            - link "RSS" [ref=e112] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e113]:
            - link "YouTube" [ref=e114] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e115]:
            - link "Google+" [ref=e116] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e117]:
      - text: Powered by
      - link "nopCommerce" [ref=e118] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e119]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | import { Page, Locator } from "@playwright/test";
  2   | import { CartPageLocators } from "../selector/Locators";
  3   | 
  4   | export class CartPage {
  5   |     readonly page: Page;
  6   |     readonly shoppingCartLink: Locator;
  7   |     readonly productName: Locator;
  8   |     readonly quantity: Locator;
  9   |     readonly updateCartButton: Locator;
  10  |     readonly country: Locator;
  11  |     readonly stateProvince: Locator;
  12  |     readonly zipCode: Locator;
  13  |     readonly estimateShipping: Locator;
  14  |     readonly subTotal: Locator;
  15  |     readonly shippingTotal: Locator;
  16  |     readonly taxTotal: Locator;
  17  |     readonly orderTotal: Locator;
  18  |     readonly termsOfServiceCheckbox: Locator;
  19  |     readonly checkoutButton: Locator;
  20  |     readonly emptyCartMessage: Locator;
  21  | 
  22  |     constructor(page: Page) {
  23  |         this.page = page;
  24  | 
  25  |         const locators = CartPageLocators;
  26  | 
  27  |         this.shoppingCartLink = page.locator(locators.shoppingCartLink);
  28  |         this.productName = page.locator(locators.productName);
  29  |         this.quantity = page.locator(locators.quantity);
  30  |         this.updateCartButton = page.locator(locators.updateCartButton);
  31  |         this.country = page.locator(locators.country);
  32  |         this.stateProvince = page.locator(locators.stateProvince);
  33  |         this.zipCode = page.locator(locators.zipCode);
  34  |         this.estimateShipping = page.locator(locators.estimateShipping);
  35  |         this.subTotal = page.locator(locators.subTotal);
  36  |         this.shippingTotal = page.locator(locators.shippingTotal);
  37  |         this.taxTotal = page.locator(locators.taxTotal);
  38  |         this.orderTotal = page.locator(locators.orderTotal);
  39  |         this.termsOfServiceCheckbox = page.locator(locators.termsOfServiceCheckbox);
  40  |         this.checkoutButton = page.locator(locators.checkoutButton);
  41  |         this.emptyCartMessage = page.locator(locators.emptyCartMessage);
  42  |     }
  43  | 
  44  |     async gotoShoppingCart() {
  45  |         await this.shoppingCartLink.click();
  46  |         await this.page.waitForURL("**/cart");
  47  |     }
  48  | 
  49  |     async clearCart() {
  50  |         await this.gotoShoppingCart();
  51  |         if (await this.emptyCartMessage.isVisible()) {
  52  |             return;
  53  |         }
  54  |         const removeCheckboxes = this.page.locator('input[name="removefromcart"]');
  55  |         const count = await removeCheckboxes.count();
  56  |         if (count > 0) {
  57  |             for (let i = 0; i < count; i++) {
  58  |                 await removeCheckboxes.nth(i).check();
  59  |             }
  60  |             await this.updateCartButton.click();
> 61  |             await this.emptyCartMessage.waitFor({ state: "visible" });
      |                                         ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  62  |         }
  63  |     }
  64  | 
  65  |     async getCartItems() {
  66  |         return await this.productName.all();
  67  |     }
  68  | 
  69  |     async getCartItemsCount() {
  70  |         return await this.productName.count();
  71  |     }
  72  | 
  73  |     /**
  74  |      * Checks and returns the individual product quantity added in the shopping cart
  75  |      * @param productName Name of the product
  76  |      */
  77  |     async getProductQuantity(productName: string): Promise<number> {
  78  |         const row = this.page.locator("tr.cart-item-row", {
  79  |             has: this.page.locator("a.product-name", { hasText: productName })
  80  |         });
  81  |         const qtyInput = row.locator("input.qty-input");
  82  |         await qtyInput.waitFor({ state: "visible" });
  83  |         const value = await qtyInput.inputValue();
  84  |         return parseInt(value, 10);
  85  |     }
  86  | 
  87  |     /**
  88  |      * Estimate the shipping by selecting country, province/state, and inputting zip code
  89  |      */
  90  |     async estimateShippingDetails(country: string, state: string, zip: string) {
  91  |         await this.country.selectOption({ label: country });
  92  |         // The State list might refresh after country selection. We wait for it to be enabled.
  93  |         await this.stateProvince.waitFor({ state: "visible" });
  94  |         await this.stateProvince.selectOption({ label: state });
  95  |         await this.zipCode.fill(zip);
  96  |         await this.estimateShipping.click();
  97  |         // Wait for shipping estimation results to load/update
  98  |         await this.orderTotal.waitFor({ state: "visible" });
  99  |     }
  100 | 
  101 |     /**
  102 |      * Retrieves and displays the overall totals (Sub-Total, Shipping, Tax, Total)
  103 |      */
  104 |     async getOrderTotals() {
  105 |         await this.subTotal.waitFor({ state: "visible" });
  106 |         const subtotal = (await this.subTotal.textContent())?.trim() || "";
  107 |         const shipping = (await this.shippingTotal.textContent())?.trim() || "";
  108 |         const tax = (await this.taxTotal.textContent())?.trim() || "";
  109 |         const total = (await this.orderTotal.textContent())?.trim() || "";
  110 | 
  111 |         console.log(`Order Totals:`);
  112 |         console.log(`- Sub-Total: ${subtotal}`);
  113 |         console.log(`- Shipping: ${shipping}`);
  114 |         console.log(`- Tax: ${tax}`);
  115 |         console.log(`- Total: ${total}`);
  116 | 
  117 |         return { subtotal, shipping, tax, total };
  118 |     }
  119 | 
  120 |     /**
  121 |      * Accepts terms of service and proceeds to checkout
  122 |      */
  123 |     async proceedToCheckout() {
  124 |         await this.termsOfServiceCheckbox.check();
  125 |         await this.checkoutButton.click();
  126 |     }
  127 | }
```