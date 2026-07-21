export const RegisterPageLocators = {
  genderButton: "#gender-male",
  firstNameInput: "#FirstName",
  lastNameInput: "#LastName",
  emailInput: "#Email",
  passwordInput: "#Password",
  confirmPasswordInput: "#ConfirmPassword",
  registerButton: "#register-button",
  textContent: ".result",
  continueButton: "input[value='Continue']",
  account: "(//div[@class='header']//ul//li/a)[1]",
};

export const LoginPageLocators = {
  emailInput: "#Email",
  passwordInput: "#Password",
  rememberMeCheckbox: "#RememberMe",
  loginButton: "//input[@value='Log in']",
  errorMessage: "div.validation-summary-errors ul li",
};

export const ProductPageLocators = {
  productList: ".item-box h2 a",
  notificationBar: "#bar-notification",
  addToCartButton: "input.add-to-cart-button",
};

export const CartPageLocators = {
  shoppingCartLink: "//span[normalize-space()='Shopping cart']",
  productName: "a.product-name",
  quantity: "input.qty-input",
  updateCartButton: "input[name='updatecart']",
  country: "#CountryId",
  stateProvince: "#StateProvinceId",
  zipCode: "#ZipPostalCode",
  estimateShipping: "input[name='estimateshipping']",
  subTotal: 'tr:has-text("Sub-Total:") td.cart-total-right span.product-price',
  shippingTotal: 'tr:has-text("Shipping:") td.cart-total-right span.product-price',
  taxTotal: 'tr:has-text("Tax:") td.cart-total-right span.product-price',
  orderTotal: 'tr:has-text("Total:") td.cart-total-right span.product-price.order-total',
  termsOfServiceCheckbox: "#termsofservice",
  checkoutButton: "#checkout",
  emptyCartMessage: "div.order-summary-content:has-text('Your Shopping Cart is empty!'), .no-data",
};

export const CheckoutPageLocators = {
  billingAddressSelect: "#billing-address-select",
  billingAddressFirstName: "#BillingNewAddress_FirstName",
  billingAddressLastName: "#BillingNewAddress_LastName",
  billingAddressEmail: "#BillingNewAddress_Email",
  billingAddressCountry: "#BillingNewAddress_CountryId",
  billingAddressStateProvince: "#BillingNewAddress_StateProvinceId",
  billingAddressCity: "#BillingNewAddress_City",
  billingAddressAddress1: "#BillingNewAddress_Address1",
  billingAddressZipPostalCode: "#BillingNewAddress_ZipPostalCode",
  billingAddressPhoneNumber: "#BillingNewAddress_PhoneNumber",
  billingAddressContinueButton: "//div[@id='billing-new-address-step']//button[contains(@class, 'button-next')]",
  shippingAddressContinueButton: "//div[@id='shipping-address-step']//button[contains(@class, 'button-next')]",
  billingAddressContinue: "input[onclick='Billing.save()'], button[onclick='Billing.save()'], .billing-next-step-button",
  shippingAddressContinue: "input[onclick='Shipping.save()'], button[onclick='Shipping.save()'], .shipping-next-step-button",
  shippingMethodContinue: "input[onclick='ShippingMethod.save()'], button[onclick='ShippingMethod.save()'], .shipping-method-next-step-button",
  paymentMethodContinue: "input[onclick='PaymentMethod.save()'], button[onclick='PaymentMethod.save()'], .payment-method-next-step-button",
  paymentInfoContinue: "input[onclick='PaymentInfo.save()'], button[onclick='PaymentInfo.save()'], .payment-info-next-step-button",
  confirmOrderButton: "input[onclick='ConfirmOrder.save()'], button[onclick='ConfirmOrder.save()'], .confirm-order-next-step-button, input[value='Confirm']",
  orderConfirmTitle: "h1:has-text('Thank you')",
  orderNumber: ".order-completed .details li:first-child, div.order-number strong, .order-number strong",
  orderSuccessMessage: ".section.order-completed .title strong, div.section.order-completed div.title strong"
};

export const LogoutPageLocators = {
  logoutLink: "a.ico-logout",
  loginLink: "a.ico-login",
};
