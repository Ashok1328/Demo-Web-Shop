import { expect, Locator, Page } from "@playwright/test";
import { LoginPageLocators } from "../selector/Locators";

export interface LoginData {
  email: string;
  password: string;
}

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly rememberMeCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;

    const locators = new LoginPageLocators();

    this.emailInput = page.locator(locators.emailInput);
    this.passwordInput = page.locator(locators.passwordInput);
    this.rememberMeCheckbox = page.locator(locators.rememberMeCheckbox);
    this.loginButton = page.locator(locators.loginButton);
  }

  async login(data: LoginData) {
    await this.emailInput.fill(data.email);
    await this.passwordInput.fill(data.password);
    await this.rememberMeCheckbox.check({ force: true });
    await this.loginButton.click();
  }
}
