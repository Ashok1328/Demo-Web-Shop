# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Cart.spec.ts >> Shopping Cart Verification >> should verify cart item quantities, estimate shipping, and proceed to checkout
- Location: src\tests\Cart.spec.ts:34:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 1
Received: 2
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - link "Tricentis Demo Web Shop" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=e7]
      - generic [ref=e8]:
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
          - generic [ref=e25]:
            - text: There are
            - link "2 item(s)" [ref=e26] [cursor=pointer]:
              - /url: /cart
            - text: in your cart.
          - generic [ref=e28]:
            - link "Picture of Computing and Internet" [ref=e30] [cursor=pointer]:
              - /url: /computing-and-internet
              - img "Picture of Computing and Internet" [ref=e31]
            - generic [ref=e32]:
              - link "Computing and Internet" [ref=e34] [cursor=pointer]:
                - /url: /computing-and-internet
              - generic [ref=e35]: "Unit price: 10.00"
              - generic [ref=e36]: "Quantity: 2"
          - generic [ref=e37]:
            - text: "Sub-Total:"
            - strong [ref=e38]: "20.00"
          - button "Go to cart" [ref=e40] [cursor=pointer]
      - generic [ref=e42]:
        - status [ref=e43]
        - textbox [ref=e44]: Search store
        - button "Search" [ref=e45] [cursor=pointer]
    - list [ref=e47]:
      - listitem [ref=e48]:
        - link "Books" [ref=e49] [cursor=pointer]:
          - /url: /books
      - listitem [ref=e50]:
        - link "Computers" [ref=e51] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=e52]:
        - link "Electronics" [ref=e53] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=e54]:
        - link "Apparel & Shoes" [ref=e55] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=e56]:
        - link "Digital downloads" [ref=e57] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=e58]:
        - link "Jewelry" [ref=e59] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=e60]:
        - link "Gift Cards" [ref=e61] [cursor=pointer]:
          - /url: /gift-cards
    - generic [ref=e63]:
      - heading "Shopping cart" [level=1] [ref=e65]
      - generic [ref=e68]:
        - table [ref=e69]:
          - rowgroup [ref=e77]:
            - row "Remove Product(s) Price Qty. Total" [ref=e78]:
              - columnheader "Remove" [ref=e79]
              - columnheader [ref=e80]
              - columnheader "Product(s)" [ref=e81]
              - columnheader "Price" [ref=e82]
              - columnheader "Qty." [ref=e83]
              - columnheader "Total" [ref=e84]
          - rowgroup [ref=e85]:
            - row "Picture of Computing and Internet Computing and Internet 10.00 2 20.00" [ref=e86]:
              - cell [ref=e87]:
                - checkbox [ref=e88]
              - cell "Picture of Computing and Internet" [ref=e89]:
                - img "Picture of Computing and Internet" [ref=e90]
              - cell "Computing and Internet" [ref=e91]:
                - link "Computing and Internet" [ref=e92] [cursor=pointer]:
                  - /url: /computing-and-internet
              - cell "10.00" [ref=e93]
              - cell "2" [ref=e94]:
                - textbox [ref=e95]: "2"
              - cell "20.00" [ref=e96]
        - generic [ref=e98]:
          - button "Update shopping cart" [ref=e99] [cursor=pointer]
          - button "Continue shopping" [ref=e100] [cursor=pointer]
        - generic [ref=e101]:
          - generic [ref=e102]:
            - generic [ref=e103]:
              - generic [ref=e104]:
                - strong [ref=e106]: Discount Code
                - generic [ref=e107]: Enter your coupon here
                - generic [ref=e108]:
                  - textbox [ref=e109]
                  - button "Apply coupon" [ref=e110] [cursor=pointer]
              - generic [ref=e111]:
                - strong [ref=e113]: Gift Cards
                - generic [ref=e114]: Enter gift card code
                - generic [ref=e115]:
                  - textbox [ref=e116]
                  - button "Add gift card" [ref=e117] [cursor=pointer]
            - generic [ref=e119]:
              - strong [ref=e121]: Estimate shipping
              - generic [ref=e122]: Enter your destination to get a shipping estimate
              - generic [ref=e123]:
                - generic [ref=e124]:
                  - generic [ref=e125]: "Country:"
                  - combobox "Country:" [ref=e126]:
                    - option "Select country"
                    - option "United States"
                    - option "Canada"
                    - option "Afghanistan"
                    - option "Albania"
                    - option "Algeria"
                    - option "American Samoa"
                    - option "Andorra"
                    - option "Angola"
                    - option "Anguilla"
                    - option "Antarctica"
                    - option "Antigua and Barbuda"
                    - option "Argentina"
                    - option "Armenia"
                    - option "Aruba"
                    - option "Australia"
                    - option "Austria"
                    - option "Azerbaijan"
                    - option "Bahamas"
                    - option "Bahrain"
                    - option "Bangladesh"
                    - option "Barbados"
                    - option "Belarus"
                    - option "Belgium"
                    - option "Belize"
                    - option "Benin"
                    - option "Bermuda"
                    - option "Bhutan"
                    - option "Bolivia"
                    - option "Bosnia and Herzegowina"
                    - option "Botswana"
                    - option "Bouvet Island"
                    - option "Brazil"
                    - option "British Indian Ocean Territory"
                    - option "Brunei Darussalam"
                    - option "Bulgaria"
                    - option "Burkina Faso"
                    - option "Burundi"
                    - option "Cambodia"
                    - option "Cameroon"
                    - option "Cape Verde"
                    - option "Cayman Islands"
                    - option "Central African Republic"
                    - option "Chad"
                    - option "Chile"
                    - option "China"
                    - option "Christmas Island"
                    - option "Cocos (Keeling) Islands"
                    - option "Colombia"
                    - option "Comoros"
                    - option "Congo"
                    - option "Cook Islands"
                    - option "Costa Rica"
                    - option "Cote D'Ivoire"
                    - option "Croatia"
                    - option "Cuba"
                    - option "Cyprus"
                    - option "Czech Republic"
                    - option "Denmark"
                    - option "Djibouti"
                    - option "Dominica"
                    - option "Dominican Republic"
                    - option "Ecuador"
                    - option "Egypt"
                    - option "El Salvador"
                    - option "Equatorial Guinea"
                    - option "Eritrea"
                    - option "Estonia"
                    - option "Ethiopia"
                    - option "Falkland Islands (Malvinas)"
                    - option "Faroe Islands"
                    - option "Fiji"
                    - option "Finland"
                    - option "France"
                    - option "French Guiana"
                    - option "French Polynesia"
                    - option "French Southern Territories"
                    - option "Gabon"
                    - option "Gambia"
                    - option "Georgia"
                    - option "Germany"
                    - option "Ghana"
                    - option "Gibraltar"
                    - option "Greece"
                    - option "Greenland"
                    - option "Grenada"
                    - option "Guadeloupe"
                    - option "Guam"
                    - option "Guatemala"
                    - option "Guinea"
                    - option "Guinea-bissau"
                    - option "Guyana"
                    - option "Haiti"
                    - option "Heard and Mc Donald Islands"
                    - option "Honduras"
                    - option "Hong Kong"
                    - option "Hungary"
                    - option "Iceland"
                    - option "India"
                    - option "Indonesia"
                    - option "Iran (Islamic Republic of)"
                    - option "Iraq"
                    - option "Ireland"
                    - option "Israel"
                    - option "Italy"
                    - option "Jamaica"
                    - option "Japan"
                    - option "Jordan"
                    - option "Kazakhstan"
                    - option "Kenya"
                    - option "Kiribati"
                    - option "Korea"
                    - option "Korea, Democratic People's Republic of"
                    - option "Kuwait"
                    - option "Kyrgyzstan"
                    - option "Lao People's Democratic Republic"
                    - option "Latvia"
                    - option "Lebanon"
                    - option "Lesotho"
                    - option "Liberia"
                    - option "Libyan Arab Jamahiriya"
                    - option "Liechtenstein"
                    - option "Lithuania"
                    - option "Luxembourg"
                    - option "Macau"
                    - option "Macedonia"
                    - option "Madagascar"
                    - option "Malawi"
                    - option "Malaysia"
                    - option "Maldives"
                    - option "Mali"
                    - option "Malta"
                    - option "Marshall Islands"
                    - option "Martinique"
                    - option "Mauritania"
                    - option "Mauritius"
                    - option "Mayotte"
                    - option "Mexico"
                    - option "Micronesia"
                    - option "Moldova"
                    - option "Monaco"
                    - option "Mongolia"
                    - option "Montenegro"
                    - option "Montserrat"
                    - option "Morocco"
                    - option "Mozambique"
                    - option "Myanmar"
                    - option "Namibia"
                    - option "Nauru"
                    - option "Nepal"
                    - option "Netherlands"
                    - option "Netherlands Antilles"
                    - option "New Caledonia"
                    - option "New Zealand"
                    - option "Nicaragua"
                    - option "Niger"
                    - option "Nigeria"
                    - option "Niue"
                    - option "Norfolk Island"
                    - option "Northern Mariana Islands"
                    - option "Norway"
                    - option "Oman"
                    - option "Pakistan"
                    - option "Palau"
                    - option "Panama"
                    - option "Papua New Guinea"
                    - option "Paraguay"
                    - option "Peru"
                    - option "Philippines"
                    - option "Pitcairn"
                    - option "Poland"
                    - option "Portugal"
                    - option "Puerto Rico" [selected]
                    - option "Qatar"
                    - option "Reunion"
                    - option "Romania"
                    - option "Russia"
                    - option "Rwanda"
                    - option "Saint Kitts and Nevis"
                    - option "Saint Lucia"
                    - option "Saint Vincent and the Grenadines"
                    - option "Samoa"
                    - option "San Marino"
                    - option "Sao Tome and Principe"
                    - option "Saudi Arabia"
                    - option "Senegal"
                    - option "Serbia"
                    - option "Seychelles"
                    - option "Sierra Leone"
                    - option "Singapore"
                    - option "Slovakia (Slovak Republic)"
                    - option "Slovenia"
                    - option "Solomon Islands"
                    - option "Somalia"
                    - option "South Africa"
                    - option "South Georgia & South Sandwich Islands"
                    - option "Spain"
                    - option "Sri Lanka"
                    - option "St. Helena"
                    - option "St. Pierre and Miquelon"
                    - option "Sudan"
                    - option "Suriname"
                    - option "Svalbard and Jan Mayen Islands"
                    - option "Swaziland"
                    - option "Sweden"
                    - option "Switzerland"
                    - option "Syrian Arab Republic"
                    - option "Taiwan"
                    - option "Tajikistan"
                    - option "Tanzania"
                    - option "Thailand"
                    - option "Togo"
                    - option "Tokelau"
                    - option "Tonga"
                    - option "Trinidad and Tobago"
                    - option "Tunisia"
                    - option "Turkey"
                    - option "Turkmenistan"
                    - option "Turks and Caicos Islands"
                    - option "Tuvalu"
                    - option "Uganda"
                    - option "Ukraine"
                    - option "United Arab Emirates"
                    - option "United Kingdom"
                    - option "United States minor outlying islands"
                    - option "Uruguay"
                    - option "Uzbekistan"
                    - option "Vanuatu"
                    - option "Vatican City State (Holy See)"
                    - option "Venezuela"
                    - option "Viet Nam"
                    - option "Virgin Islands (British)"
                    - option "Virgin Islands (U.S.)"
                    - option "Wallis and Futuna Islands"
                    - option "Western Sahara"
                    - option "Yemen"
                    - option "Zambia"
                    - option "Zimbabwe"
                  - text: "*"
                - generic [ref=e127]:
                  - generic [ref=e128]: "State / province:"
                  - combobox "State / province:" [ref=e129]:
                    - option "Other (Non US)" [selected]
                - generic [ref=e130]:
                  - generic [ref=e131]: "Zip / postal code:"
                  - textbox "Zip / postal code:" [ref=e132]: "41683"
                - button "Estimate shipping" [ref=e134] [cursor=pointer]
          - generic [ref=e135]:
            - table [ref=e137]:
              - rowgroup [ref=e138]:
                - 'row "Sub-Total: 20.00" [ref=e139]':
                  - cell "Sub-Total:" [ref=e140]
                  - cell "20.00" [ref=e141]:
                    - generic [ref=e142]: "20.00"
                - 'row "Shipping: 0.00" [ref=e143]':
                  - cell "Shipping:" [ref=e144]
                  - cell "0.00" [ref=e145]:
                    - generic [ref=e146]: "0.00"
                - 'row "Tax: 0.00" [ref=e147]':
                  - cell "Tax:" [ref=e148]
                  - cell "0.00" [ref=e149]:
                    - generic [ref=e150]: "0.00"
                - 'row "Total: 20.00" [ref=e151]':
                  - cell "Total:" [ref=e152]
                  - cell "20.00" [ref=e153]:
                    - strong [ref=e156]: "20.00"
            - generic [ref=e157]:
              - checkbox [ref=e158]
              - text: I agree with the terms of service and I adhere to them unconditionally (read)
            - button "Checkout" [ref=e160] [cursor=pointer]
  - generic [ref=e162]:
    - generic [ref=e163]:
      - generic [ref=e164]:
        - heading "Information" [level=3] [ref=e165]
        - list [ref=e166]:
          - listitem [ref=e167]:
            - link "Sitemap" [ref=e168] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e169]:
            - link "Shipping & Returns" [ref=e170] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e171]:
            - link "Privacy Notice" [ref=e172] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e173]:
            - link "Conditions of Use" [ref=e174] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e175]:
            - link "About us" [ref=e176] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e177]:
            - link "Contact us" [ref=e178] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e179]:
        - heading "Customer service" [level=3] [ref=e180]
        - list [ref=e181]:
          - listitem [ref=e182]:
            - link "Search" [ref=e183] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e184]:
            - link "News" [ref=e185] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e186]:
            - link "Blog" [ref=e187] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e188]:
            - link "Recently viewed products" [ref=e189] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e190]:
            - link "Compare products list" [ref=e191] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e192]:
            - link "New products" [ref=e193] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e194]:
        - heading "My account" [level=3] [ref=e195]
        - list [ref=e196]:
          - listitem [ref=e197]:
            - link "My account" [ref=e198] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e199]:
            - link "Orders" [ref=e200] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e201]:
            - link "Addresses" [ref=e202] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e203]:
            - link "Shopping cart" [ref=e204] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e205]:
            - link "Wishlist" [ref=e206] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e207]:
        - heading "Follow us" [level=3] [ref=e208]
        - list [ref=e209]:
          - listitem [ref=e210]:
            - link "Facebook" [ref=e211] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e212]:
            - link "Twitter" [ref=e213] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e214]:
            - link "RSS" [ref=e215] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e216]:
            - link "YouTube" [ref=e217] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e218]:
            - link "Google+" [ref=e219] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e220]:
      - text: Powered by
      - link "nopCommerce" [ref=e221] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e222]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { ProductPage } from "../page/ProductPage";
  3  | import { CartPage } from "../page/CartPage";
  4  | import { LoginPage } from "../page/LoginPage";
  5  | import { LoginTestData, ProductTestData } from "../data/TestData";
  6  | 
  7  | test.describe("Shopping Cart Verification", () => {
  8  |   let productPage: ProductPage;
  9  |   let cartPage: CartPage;
  10 |   let productData: ProductTestData;
  11 | 
  12 |   test.beforeEach(async ({ page }) => {
  13 |     productPage = new ProductPage(page);
  14 |     cartPage = new CartPage(page);
  15 |     productData = new ProductTestData();
  16 |     
  17 |     await page.goto("/");
  18 | 
  19 |     // Ensure the user is logged in
  20 |     const logoutLink = page.locator("a.ico-logout");
  21 |     if (!(await logoutLink.isVisible())) {
  22 |       const loginPage = new LoginPage(page);
  23 |       const loginData = new LoginTestData().valid;
  24 |       await page.goto("/login");
  25 |       await loginPage.login(loginData);
  26 |       await logoutLink.waitFor({ state: "visible" });
  27 |       await page.goto("/");
  28 |     }
  29 | 
  30 |     await cartPage.clearCart();
  31 |     await page.goto("/");
  32 |   });
  33 | 
  34 |   test("should verify cart item quantities, estimate shipping, and proceed to checkout", async ({ page }) => {
  35 |     // 1. Add product to cart
  36 |     await productPage.navigateToCategory("Books");
  37 |     const bookName = productData.books; // "Computing and Internet"
  38 |     await productPage.addSingleProduct(bookName);
  39 |     await expect(productPage.notificationBar).toBeVisible();
  40 | 
  41 |     // 2. Go to shopping cart page
  42 |     await cartPage.gotoShoppingCart();
  43 | 
  44 |     // 3. Verify the individual quantity of the added product
  45 |     const qty = await cartPage.getProductQuantity(bookName);
> 46 |     expect(qty).toBe(1);
     |                 ^ Error: expect(received).toBe(expected) // Object.is equality
  47 | 
  48 |     // 4. Estimate shipping
  49 |     await cartPage.estimateShippingDetails("United States", "California", "90210");
  50 | 
  51 |     // 5. Display/retrieve order totals
  52 |     const totals = await cartPage.getOrderTotals();
  53 |     expect(totals.subtotal).not.toBe("");
  54 |     expect(totals.shipping).not.toBe("");
  55 |     expect(totals.tax).not.toBe("");
  56 |     expect(totals.total).not.toBe("");
  57 | 
  58 |     // 6. Proceed to checkout
  59 |     await cartPage.proceedToCheckout();
  60 |     
  61 |     // Verify we reached the checkout page
  62 |     await expect(page).toHaveURL(/.*\/onepagecheckout/);
  63 |   });
  64 | });
  65 | 
```