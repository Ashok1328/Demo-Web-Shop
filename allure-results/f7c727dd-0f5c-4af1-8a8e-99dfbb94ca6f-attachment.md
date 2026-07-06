# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Checkout.spec.ts >> Checkout Verification >> verify successful one-page checkout and logout
- Location: src\tests\Checkout.spec.ts:42:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[onclick=\'ConfirmOrder.save()\'], button[onclick=\'ConfirmOrder.save()\'], .confirm-order-next-step-button, input[value=\'Confirm\']') to be visible
    31 × locator resolved to hidden <input type="button" value="Confirm" onclick="ConfirmOrder.save()" class="button-1 confirm-order-next-step-button"/>

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
          - link "Shopping cart (2)" [ref=e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=e17]: Shopping cart
            - generic [ref=e18]: (2)
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
    - generic [ref=e45]:
      - heading "Checkout" [level=1] [ref=e47]
      - list [ref=e49]:
        - listitem [ref=e50]:
          - generic [ref=e51] [cursor=pointer]:
            - generic [ref=e52]: "1"
            - heading "Billing address" [level=2] [ref=e53]
            - text: .
        - listitem [ref=e54]:
          - generic [ref=e55] [cursor=pointer]:
            - generic [ref=e56]: "2"
            - heading "Shipping address" [level=2] [ref=e57]
            - text: .
        - listitem [ref=e58]:
          - generic [ref=e59] [cursor=pointer]:
            - generic [ref=e60]: "3"
            - heading "Shipping method" [level=2] [ref=e61]
            - text: .
        - listitem [ref=e62]:
          - generic [ref=e63] [cursor=pointer]:
            - generic [ref=e64]: "4"
            - heading "Payment method" [level=2] [ref=e65]
            - text: .
        - listitem [ref=e66]:
          - generic [ref=e67]:
            - generic [ref=e68]: "5"
            - heading "Payment information" [level=2] [ref=e69]
            - text: .
          - generic [ref=e70]:
            - generic [ref=e74]:
              - table [ref=e76]:
                - rowgroup [ref=e77]:
                  - row "You will pay by COD" [ref=e78]:
                    - cell "You will pay by COD" [ref=e79]:
                      - paragraph [ref=e80]: You will pay by COD
              - generic:
                - generic:
                  - list
            - generic [ref=e81]:
              - paragraph [ref=e82]:
                - link "Back" [ref=e83] [cursor=pointer]:
                  - /url: "#"
              - button "Continue" [ref=e84] [cursor=pointer]
        - listitem [ref=e85]:
          - generic [ref=e86]:
            - generic [ref=e87]: "6"
            - heading "Confirm order" [level=2] [ref=e88]
            - text: .
  - generic [ref=e89]:
    - generic [ref=e90]:
      - generic [ref=e91]:
        - heading "Information" [level=3] [ref=e92]
        - list [ref=e93]:
          - listitem [ref=e94]:
            - link "Sitemap" [ref=e95] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e96]:
            - link "Shipping & Returns" [ref=e97] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e98]:
            - link "Privacy Notice" [ref=e99] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e100]:
            - link "Conditions of Use" [ref=e101] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e102]:
            - link "About us" [ref=e103] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e104]:
            - link "Contact us" [ref=e105] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e106]:
        - heading "Customer service" [level=3] [ref=e107]
        - list [ref=e108]:
          - listitem [ref=e109]:
            - link "Search" [ref=e110] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e111]:
            - link "News" [ref=e112] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e113]:
            - link "Blog" [ref=e114] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e115]:
            - link "Recently viewed products" [ref=e116] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e117]:
            - link "Compare products list" [ref=e118] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e119]:
            - link "New products" [ref=e120] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e121]:
        - heading "My account" [level=3] [ref=e122]
        - list [ref=e123]:
          - listitem [ref=e124]:
            - link "My account" [ref=e125] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e126]:
            - link "Orders" [ref=e127] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e128]:
            - link "Addresses" [ref=e129] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e130]:
            - link "Shopping cart" [ref=e131] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e132]:
            - link "Wishlist" [ref=e133] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e134]:
        - heading "Follow us" [level=3] [ref=e135]
        - list [ref=e136]:
          - listitem [ref=e137]:
            - link "Facebook" [ref=e138] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e139]:
            - link "Twitter" [ref=e140] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e141]:
            - link "RSS" [ref=e142] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e143]:
            - link "YouTube" [ref=e144] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e145]:
            - link "Google+" [ref=e146] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e147]:
      - text: Powered by
      - link "nopCommerce" [ref=e148] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e149]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  16  |     readonly billingAddressPhoneNumber: Locator;
  17  |     readonly billingAddressContinueButton: Locator;
  18  |     readonly shippingAddressContinueButton: Locator;
  19  |     readonly billingAddressContinue: Locator;
  20  |     readonly shippingAddressContinue: Locator;
  21  |     readonly shippingMethodContinue: Locator;
  22  |     readonly paymentMethodContinue: Locator;
  23  |     readonly paymentInfoContinue: Locator;
  24  |     readonly confirmOrderButton: Locator;
  25  |     readonly orderConfirmTitle: Locator;
  26  |     readonly orderNumber: Locator;
  27  |     readonly orderSuccessMessage: Locator;
  28  | 
  29  |     constructor(page: Page) {
  30  |         this.page = page;
  31  | 
  32  |         const locators = CheckoutPageLocators;
  33  | 
  34  |         this.onePageCheckoutLink = page.locator(locators.onePageCheckoutLink);
  35  |         this.billingAddressSelect = page.locator(locators.billingAddressSelect);
  36  |         this.billingAddressFirstName = page.locator(locators.billingAddressFirstName);
  37  |         this.billingAddressLastName = page.locator(locators.billingAddressLastName);
  38  |         this.billingAddressEmail = page.locator(locators.billingAddressEmail);
  39  |         this.billingAddressCountry = page.locator(locators.billingAddressCountry);
  40  |         this.billingAddressStateProvince = page.locator(locators.billingAddressStateProvince);
  41  |         this.billingAddressCity = page.locator(locators.billingAddressCity);
  42  |         this.billingAddressAddress1 = page.locator(locators.billingAddressAddress1);
  43  |         this.billingAddressZipPostalCode = page.locator(locators.billingAddressZipPostalCode);
  44  |         this.billingAddressPhoneNumber = page.locator(locators.billingAddressPhoneNumber);
  45  |         this.billingAddressContinueButton = page.locator(locators.billingAddressContinueButton);
  46  |         this.shippingAddressContinueButton = page.locator(locators.shippingAddressContinueButton);
  47  |         this.billingAddressContinue = page.locator(locators.billingAddressContinue);
  48  |         this.shippingAddressContinue = page.locator(locators.shippingAddressContinue);
  49  |         this.shippingMethodContinue = page.locator(locators.shippingMethodContinue);
  50  |         this.paymentMethodContinue = page.locator(locators.paymentMethodContinue);
  51  |         this.paymentInfoContinue = page.locator(locators.paymentInfoContinue);
  52  |         this.confirmOrderButton = page.locator(locators.confirmOrderButton);
  53  |         this.orderConfirmTitle = page.locator(locators.orderConfirmTitle);
  54  |         this.orderNumber = page.locator(locators.orderNumber);
  55  |         this.orderSuccessMessage = page.locator(locators.orderSuccessMessage);
  56  |     }
  57  | 
  58  |     async gotoOnePageCheckout() {
  59  |         await this.onePageCheckoutLink.click();
  60  |         await this.page.waitForURL(/.*\/onepagecheckout/);
  61  |     }
  62  | 
  63  |     async fillBillingAddress(billingAddress: any) {
  64  |         // Wait for the billing step to load and either selector to become visible
  65  |         await this.page.waitForSelector('#billing-address-select, #BillingNewAddress_FirstName', { state: 'visible', timeout: 10000 });
  66  | 
  67  |         if (await this.billingAddressSelect.isVisible()) {
  68  |             // A saved address is present and selected by default. Just click continue.
  69  |             await this.billingAddressContinue.click();
  70  |         } else {
  71  |             await this.billingAddressFirstName.fill(billingAddress.firstName);
  72  |             await this.billingAddressLastName.fill(billingAddress.lastName);
  73  |             await this.billingAddressEmail.fill(billingAddress.email);
  74  |             await this.billingAddressCountry.selectOption({ label: billingAddress.country });
  75  |             // The State list might refresh after country selection. We wait for it to be enabled.
  76  |             await this.billingAddressStateProvince.waitFor({ state: "visible" });
  77  |             await this.billingAddressStateProvince.selectOption({ label: billingAddress.stateProvince });
  78  |             await this.billingAddressCity.fill(billingAddress.city);
  79  |             await this.billingAddressAddress1.fill(billingAddress.address1);
  80  |             await this.billingAddressZipPostalCode.fill(billingAddress.zipPostalCode);
  81  |             await this.billingAddressPhoneNumber.fill(billingAddress.phoneNumber);
  82  |             await this.billingAddressContinue.click();
  83  |         }
  84  |     }
  85  | 
  86  |     async fillShippingAddress(shippingAddress: any) {
  87  |         // If Shipping Method continue button is already visible, the Shipping Address step was skipped
  88  |         if (await this.shippingMethodContinue.isVisible()) {
  89  |             return;
  90  |         }
  91  |         // If not skipped, click continue on shipping address if visible
  92  |         try {
  93  |             await this.shippingAddressContinue.waitFor({ state: "visible", timeout: 2000 });
  94  |             await this.shippingAddressContinue.click();
  95  |         } catch (e) {
  96  |             console.log("Shipping address continue button not visible/skipped.");
  97  |         }
  98  |     }
  99  | 
  100 |     async selectShippingMethod(shippingMethod: string) {
  101 |         await this.shippingMethodContinue.waitFor({ state: "visible" });
  102 |         await this.shippingMethodContinue.click();
  103 |     }
  104 | 
  105 |     async selectPaymentMethod(paymentMethod: string) {
  106 |         await this.paymentMethodContinue.waitFor({ state: "visible" });
  107 |         await this.paymentMethodContinue.click();
  108 |     }
  109 | 
  110 |     async selectPaymentInfo(paymentInfo: string) {
  111 |         await this.paymentInfoContinue.waitFor({ state: "visible" });
  112 |         await this.paymentInfoContinue.click();
  113 |     }
  114 | 
  115 |     async confirmOrder() {
> 116 |         await this.confirmOrderButton.waitFor({ state: "visible" });
      |                                       ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  117 |         await this.confirmOrderButton.click();
  118 |     }
  119 | 
  120 |     async getOrderConfirmTitle() {
  121 |         await this.orderConfirmTitle.waitFor({ state: "visible" });
  122 |         return await this.orderConfirmTitle.textContent();
  123 |     }
  124 | 
  125 |     async getOrderNumber() {
  126 |         await this.orderNumber.waitFor({ state: "visible" });
  127 |         return await this.orderNumber.textContent();
  128 |     }
  129 | 
  130 |     async getOrderSuccessMessage() {
  131 |         await this.orderSuccessMessage.waitFor({ state: "visible" });
  132 |         return await this.orderSuccessMessage.textContent();
  133 |     }
  134 | }   
```