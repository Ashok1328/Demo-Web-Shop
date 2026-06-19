export class RegisterPageLocators {
  genderButton = "#gender-male";
  firstNameInput = "#FirstName";
  lastNameInput = "#LastName";
  emailInput = "#Email";
  passwordInput = "#Password";
  confirmPasswordInput = "#ConfirmPassword";
  registerButton = "#register-button";
  textContent = ".result";
  continueButton = "//input[@value='Continue']";
  account = "(//div[@class='header']//ul//li/a)[1]";
}

export class LoginPageLocators {
  emailInput = "#Email";
  passwordInput = "#Password";
  rememberMeCheckbox = "#RememberMe";
  loginButton = "//input[@value='Log in']";
  errorMessage = "//div[@class='validation-summary-errors']/ul/li";
}

export class ProductPageLocators {
  productList = "//div[@class='item-box']/div/div/h2/a";
  notificationBar = "//div[@id='bar-notification']";
  addToCartButton = "//input[@id='add-to-cart-button-31']";
  shoppingCartLink = "//span[normalize-space()='Shopping cart']";
  cartItemCount = "//td[@class='product']";
}
