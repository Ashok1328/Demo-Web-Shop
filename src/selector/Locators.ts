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
  emptyCartMessage: ".no-data",
};  