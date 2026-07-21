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
  - waiting for locator('h1:has-text(\'Thank you\')') to be visible

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
          - generic [ref=e67] [cursor=pointer]:
            - generic [ref=e68]: "5"
            - heading "Payment information" [level=2] [ref=e69]
            - text: .
        - listitem [ref=e70]:
          - generic [ref=e71]:
            - generic [ref=e72]: "6"
            - heading "Confirm order" [level=2] [ref=e73]
            - text: .
          - generic [ref=e74]:
            - generic [ref=e79]:
              - generic [ref=e80]:
                - list [ref=e81]:
                  - listitem [ref=e82]:
                    - strong [ref=e83]: Billing Address
                  - listitem [ref=e84]: Cody Rodriguez
                  - listitem [ref=e85]: "Email: cejaxoky@mailinator.com"
                  - listitem [ref=e86]: "Phone: +1 (966) 818-5935"
                  - listitem [ref=e87]: "Fax: +1 (115) 437-8422"
                  - listitem [ref=e88]: Charles Shelton Inc
                  - listitem [ref=e89]: 51 East Cowley Freeway
                  - listitem [ref=e90]: Laborum Aspernatur
                  - listitem [ref=e91]: Vel error non ipsa , 41683
                  - listitem [ref=e92]: Puerto Rico
                  - listitem [ref=e93]:
                    - strong [ref=e94]: Payment Method
                  - listitem [ref=e95]: Cash On Delivery (COD)
                - list [ref=e96]:
                  - listitem [ref=e97]:
                    - strong [ref=e98]: Shipping Address
                  - listitem [ref=e99]: Cody Rodriguez
                  - listitem [ref=e100]: "Email: cejaxoky@mailinator.com"
                  - listitem [ref=e101]: "Phone: +1 (966) 818-5935"
                  - listitem [ref=e102]: "Fax: +1 (115) 437-8422"
                  - listitem [ref=e103]: Charles Shelton Inc
                  - listitem [ref=e104]: 51 East Cowley Freeway
                  - listitem [ref=e105]: Laborum Aspernatur
                  - listitem [ref=e106]: Vel error non ipsa , 41683
                  - listitem [ref=e107]: Puerto Rico
                  - listitem [ref=e108]:
                    - strong [ref=e109]: Shipping Method
                  - listitem [ref=e110]: Ground
              - generic [ref=e111]:
                - table [ref=e112]:
                  - rowgroup [ref=e119]:
                    - row "Product(s) Price Qty. Total" [ref=e120]:
                      - columnheader [ref=e121]
                      - columnheader "Product(s)" [ref=e122]
                      - columnheader "Price" [ref=e123]
                      - columnheader "Qty." [ref=e124]
                      - columnheader "Total" [ref=e125]
                  - rowgroup [ref=e126]:
                    - row "Picture of Computing and Internet Computing and Internet 10.00 3 30.00" [ref=e127]:
                      - cell "Picture of Computing and Internet" [ref=e128]:
                        - img "Picture of Computing and Internet" [ref=e129]
                      - cell "Computing and Internet" [ref=e130]:
                        - link "Computing and Internet" [ref=e131] [cursor=pointer]:
                          - /url: /computing-and-internet
                      - cell "10.00" [ref=e132]
                      - cell "3" [ref=e133]
                      - cell "30.00" [ref=e134]
                - table [ref=e140]:
                  - rowgroup [ref=e141]:
                    - 'row "Sub-Total: 30.00" [ref=e142]':
                      - cell "Sub-Total:" [ref=e143]
                      - cell "30.00" [ref=e144]:
                        - generic [ref=e145]: "30.00"
                    - 'row "Shipping: (Ground) 0.00" [ref=e146]':
                      - 'cell "Shipping: (Ground)" [ref=e147]'
                      - cell "0.00" [ref=e148]:
                        - generic [ref=e149]: "0.00"
                    - 'row "Payment method additional fee: 7.00" [ref=e150]':
                      - cell "Payment method additional fee:" [ref=e151]
                      - cell "7.00" [ref=e152]:
                        - generic [ref=e153]: "7.00"
                    - 'row "Tax: 0.00" [ref=e154]':
                      - cell "Tax:" [ref=e155]
                      - cell "0.00" [ref=e156]:
                        - generic [ref=e157]: "0.00"
                    - 'row "Total: 37.00" [ref=e158]':
                      - cell "Total:" [ref=e159]
                      - cell "37.00" [ref=e160]:
                        - strong [ref=e163]: "37.00"
            - generic [ref=e164]:
              - paragraph [ref=e165]:
                - link "Back" [ref=e166] [cursor=pointer]:
                  - /url: "#"
              - button "Confirm" [ref=e167] [cursor=pointer]
  - generic [ref=e168]:
    - generic [ref=e169]:
      - generic [ref=e170]:
        - heading "Information" [level=3] [ref=e171]
        - list [ref=e172]:
          - listitem [ref=e173]:
            - link "Sitemap" [ref=e174] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e175]:
            - link "Shipping & Returns" [ref=e176] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e177]:
            - link "Privacy Notice" [ref=e178] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e179]:
            - link "Conditions of Use" [ref=e180] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e181]:
            - link "About us" [ref=e182] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e183]:
            - link "Contact us" [ref=e184] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e185]:
        - heading "Customer service" [level=3] [ref=e186]
        - list [ref=e187]:
          - listitem [ref=e188]:
            - link "Search" [ref=e189] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e190]:
            - link "News" [ref=e191] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e192]:
            - link "Blog" [ref=e193] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e194]:
            - link "Recently viewed products" [ref=e195] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e196]:
            - link "Compare products list" [ref=e197] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e198]:
            - link "New products" [ref=e199] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e200]:
        - heading "My account" [level=3] [ref=e201]
        - list [ref=e202]:
          - listitem [ref=e203]:
            - link "My account" [ref=e204] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e205]:
            - link "Orders" [ref=e206] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e207]:
            - link "Addresses" [ref=e208] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e209]:
            - link "Shopping cart" [ref=e210] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e211]:
            - link "Wishlist" [ref=e212] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e213]:
        - heading "Follow us" [level=3] [ref=e214]
        - list [ref=e215]:
          - listitem [ref=e216]:
            - link "Facebook" [ref=e217] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e218]:
            - link "Twitter" [ref=e219] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e220]:
            - link "RSS" [ref=e221] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e222]:
            - link "YouTube" [ref=e223] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e224]:
            - link "Google+" [ref=e225] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e226]:
      - text: Powered by
      - link "nopCommerce" [ref=e227] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e228]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
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
  87  |         // Wait for billing step loader to be hidden
  88  |         await this.page.locator("#billing-please-wait").waitFor({ state: "hidden" });
  89  | 
  90  |         // Wait for either the shipping address continue button OR the shipping method continue button to be visible
  91  |         const shippingOrMethod = this.page.locator("input[onclick='Shipping.save()'], input[onclick='ShippingMethod.save()']");
  92  |         await shippingOrMethod.first().waitFor({ state: "visible", timeout: 10000 });
  93  | 
  94  |         if (await this.shippingAddressContinue.isVisible()) {
  95  |             await this.shippingAddressContinue.click();
  96  |         }
  97  |     }
  98  | 
  99  |     async selectShippingMethod(shippingMethod: string) {
  100 |         // Wait for shipping step loader to be hidden
  101 |         await this.page.locator("#shipping-please-wait").waitFor({ state: "hidden" });
  102 |         await this.shippingMethodContinue.waitFor({ state: "visible" });
  103 |         await this.shippingMethodContinue.click();
  104 |     }
  105 | 
  106 |     async selectPaymentMethod(paymentMethod: string) {
  107 |         // Wait for shipping method step loader to be hidden
  108 |         await this.page.locator("#shipping-method-please-wait").waitFor({ state: "hidden" });
  109 |         await this.paymentMethodContinue.waitFor({ state: "visible" });
  110 |         await this.paymentMethodContinue.click();
  111 |     }
  112 | 
  113 |     async selectPaymentInfo(paymentInfo: string) {
  114 |         // Wait for payment method step loader to be hidden
  115 |         await this.page.locator("#payment-method-please-wait").waitFor({ state: "hidden" });
  116 |         await this.paymentInfoContinue.waitFor({ state: "visible" });
  117 |         await this.paymentInfoContinue.click();
  118 |     }
  119 | 
  120 |     async confirmOrder() {
  121 |         // Wait for payment info step loader to be hidden
  122 |         await this.page.locator("#payment-info-please-wait").waitFor({ state: "hidden" });
  123 |         await this.confirmOrderButton.waitFor({ state: "visible" });
  124 |         await this.confirmOrderButton.click();
  125 |     }
  126 | 
  127 |     async getOrderConfirmTitle() {
  128 |         // Wait for confirm order step loader to be hidden
  129 |         await this.page.locator("#confirm-order-please-wait").waitFor({ state: "hidden" });
> 130 |         await this.orderConfirmTitle.waitFor({ state: "visible" });
      |                                      ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  131 |         return await this.orderConfirmTitle.textContent();
  132 |     }
  133 | 
  134 |     async getOrderNumber() {
  135 |         await this.orderNumber.waitFor({ state: "visible" });
  136 |         return await this.orderNumber.textContent();
  137 |     }
  138 | 
  139 |     async getOrderSuccessMessage() {
  140 |         await this.orderSuccessMessage.waitFor({ state: "visible" });
  141 |         return await this.orderSuccessMessage.textContent();
  142 |     }
  143 | }   
```