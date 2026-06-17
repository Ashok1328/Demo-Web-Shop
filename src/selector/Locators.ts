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
