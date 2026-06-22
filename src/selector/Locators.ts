export const RegisterPageLocators = {
  genderButton: "#gender-male",
  firstNameInput: "#FirstName",
  lastNameInput: "#LastName",
  emailInput: "#Email",
  passwordInput: "#Password",
  confirmPasswordInput: "#ConfirmPassword",
  registerButton: "#register-button",
  textContent: ".result",
  continueButton: "//input[value='Continue']",
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
  addToCartButton: "//input[@id='add-to-cart-button-31']",
  shoppingCartLink: "//span[normalize-space()='Shopping cart']",
  cartItemCount: "//td[@class='product']",
};
