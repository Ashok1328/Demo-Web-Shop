# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Checkout.spec.ts >> Checkout Verification >> verify successful one-page checkout and logout
- Location: src\tests\Checkout.spec.ts:43:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('input[onclick=\'ConfirmOrder.save()\'], button[onclick=\'ConfirmOrder.save()\'], .confirm-order-next-step-button, input[value=\'Confirm\']') to be visible
    89 × locator resolved to hidden <input type="button" value="Confirm" onclick="ConfirmOrder.save()" class="button-1 confirm-order-next-step-button"/>

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
          - link "Shopping cart (3)" [ref=e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=e17]: Shopping cart
            - generic [ref=e18]: (3)
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
  21  |     readonly paymentMethodContinue: Locator;
  22  |     readonly paymentInfoContinue: Locator;
  23  |     readonly confirmOrderButton: Locator;
  24  |     readonly orderConfirmTitle: Locator;
  25  |     readonly orderNumber: Locator;
  26  |     readonly orderSuccessMessage: Locator;
  27  | 
  28  |     constructor(page: Page) {
  29  |         this.page = page;
  30  | 
  31  |         const locators = CheckoutPageLocators;
  32  | 
  33  |         this.billingAddressSelect = page.locator(locators.billingAddressSelect);
  34  |         this.billingAddressFirstName = page.locator(locators.billingAddressFirstName);
  35  |         this.billingAddressLastName = page.locator(locators.billingAddressLastName);
  36  |         this.billingAddressEmail = page.locator(locators.billingAddressEmail);
  37  |         this.billingAddressCountry = page.locator(locators.billingAddressCountry);
  38  |         this.billingAddressStateProvince = page.locator(locators.billingAddressStateProvince);
  39  |         this.billingAddressCity = page.locator(locators.billingAddressCity);
  40  |         this.billingAddressAddress1 = page.locator(locators.billingAddressAddress1);
  41  |         this.billingAddressZipPostalCode = page.locator(locators.billingAddressZipPostalCode);
  42  |         this.billingAddressPhoneNumber = page.locator(locators.billingAddressPhoneNumber);
  43  |         this.billingAddressContinueButton = page.locator(locators.billingAddressContinueButton);
  44  |         this.shippingAddressContinueButton = page.locator(locators.shippingAddressContinueButton);
  45  |         this.billingAddressContinue = page.locator(locators.billingAddressContinue);
  46  |         this.shippingAddressContinue = page.locator(locators.shippingAddressContinue);
  47  |         this.shippingMethodContinue = page.locator(locators.shippingMethodContinue);
  48  |         this.paymentMethodContinue = page.locator(locators.paymentMethodContinue);
  49  |         this.paymentInfoContinue = page.locator(locators.paymentInfoContinue);
  50  |         this.confirmOrderButton = page.locator(locators.confirmOrderButton);
  51  |         this.orderConfirmTitle = page.locator(locators.orderConfirmTitle);
  52  |         this.orderNumber = page.locator(locators.orderNumber);
  53  |         this.orderSuccessMessage = page.locator(locators.orderSuccessMessage);
  54  |     }
  55  | 
  56  |     async gotoOnePageCheckout() {
  57  |         await this.onePageCheckoutLink.click();
  58  |         await this.page.waitForURL(/.*\/onepagecheckout/);
  59  |     }
  60  | 
  61  |     async fillBillingAddress(billingAddress: any) {
  62  |         // Wait for the billing step to load and either selector to become visible
  63  |         await this.page.waitForSelector('#billing-address-select, #BillingNewAddress_FirstName', { state: 'visible', timeout: 10000 });
  64  | 
  65  |         if (await this.billingAddressSelect.isVisible()) {
  66  |             // A saved address is present and selected by default. Just click continue.
  67  |             await this.billingAddressContinue.click();
  68  |         } else {
  69  |             await this.billingAddressFirstName.fill(billingAddress.firstName);
  70  |             await this.billingAddressLastName.fill(billingAddress.lastName);
  71  |             await this.billingAddressEmail.fill(billingAddress.email);
  72  |             await this.billingAddressCountry.selectOption({ label: billingAddress.country });
  73  |             // The State list might refresh after country selection. We wait for it to be enabled.
  74  |             await this.billingAddressStateProvince.waitFor({ state: "visible" });
  75  |             await this.billingAddressStateProvince.selectOption({ label: billingAddress.stateProvince });
  76  |             await this.billingAddressCity.fill(billingAddress.city);
  77  |             await this.billingAddressAddress1.fill(billingAddress.address1);
  78  |             await this.billingAddressZipPostalCode.fill(billingAddress.zipPostalCode);
  79  |             await this.billingAddressPhoneNumber.fill(billingAddress.phoneNumber);
  80  |             await this.billingAddressContinue.click();
  81  |         }
  82  |     }
  83  | 
  84  |     async fillShippingAddress(shippingAddress: any) {
  85  |         // Wait for billing step loader to be hidden
  86  |         await this.page.locator("#billing-please-wait").waitFor({ state: "hidden" });
  87  | 
  88  |         // Wait for either the shipping address continue button OR the shipping method continue button to be visible
  89  |         const shippingOrMethod = this.page.locator("input[onclick='Shipping.save()'], input[onclick='ShippingMethod.save()']");
  90  |         await shippingOrMethod.first().waitFor({ state: "visible", timeout: 10000 });
  91  | 
  92  |         if (await this.shippingAddressContinue.isVisible()) {
  93  |             await this.shippingAddressContinue.click();
  94  |         }
  95  |     }
  96  | 
  97  |     async selectShippingMethod(shippingMethod: string) {
  98  |         // Wait for shipping step loader to be hidden
  99  |         await this.page.locator("#shipping-please-wait").waitFor({ state: "hidden" });
  100 |         await this.shippingMethodContinue.waitFor({ state: "visible" });
  101 |         await this.shippingMethodContinue.click();
  102 |     }
  103 | 
  104 |     async selectPaymentMethod(paymentMethod: string) {
  105 |         // Wait for shipping method step loader to be hidden
  106 |         await this.page.locator("#shipping-method-please-wait").waitFor({ state: "hidden" });
  107 |         await this.paymentMethodContinue.waitFor({ state: "visible" });
  108 |         await this.paymentMethodContinue.click();
  109 |     }
  110 | 
  111 |     async selectPaymentInfo(paymentInfo: string) {
  112 |         // Wait for payment method step loader to be hidden
  113 |         await this.page.locator("#payment-method-please-wait").waitFor({ state: "hidden" });
  114 |         await this.paymentInfoContinue.waitFor({ state: "visible" });
  115 |         await this.paymentInfoContinue.click();
  116 |     }
  117 | 
  118 |     async confirmOrder() {
  119 |         // Wait for payment info step loader to be hidden
  120 |         await this.page.locator("#payment-info-please-wait").waitFor({ state: "hidden" });
> 121 |         await this.confirmOrderButton.waitFor({ state: "visible" });
      |                                       ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  122 |         await this.confirmOrderButton.click();
  123 |     }
  124 | 
  125 |     async getOrderConfirmTitle() {
  126 |         // Wait for confirm order step loader to be hidden
  127 |         await this.page.locator("#confirm-order-please-wait").waitFor({ state: "hidden" });
  128 |         await this.orderConfirmTitle.waitFor({ state: "visible" });
  129 |         return await this.orderConfirmTitle.textContent();
  130 |     }
  131 | 
  132 |     async getOrderNumber() {
  133 |         await this.orderNumber.waitFor({ state: "visible" });
  134 |         return await this.orderNumber.textContent();
  135 |     }
  136 | 
  137 |     async getOrderSuccessMessage() {
  138 |         await this.orderSuccessMessage.waitFor({ state: "visible" });
  139 |         return await this.orderSuccessMessage.textContent();
  140 |     }
  141 | }   
```