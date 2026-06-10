import { Page, expect, Locator } from "@playwright/test";
import { RegisterPageLocators } from "../selector/Locators";

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export class RegisterPage {
  readonly page: Page;
  readonly genderButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;

    const locators = new RegisterPageLocators();

    this.genderButton = page.locator(locators.genderButton);
    this.firstNameInput = page.locator(locators.firstNameInput);
    this.lastNameInput = page.locator(locators.lastNameInput);
    this.emailInput = page.locator(locators.emailInput);
    this.passwordInput = page.locator(locators.passwordInput);
    this.confirmPasswordInput = page.locator(locators.confirmPasswordInput);
    this.registerButton = page.locator(locators.registerButton);
  }

  async gotoRegisterPage() {
    await this.page.goto("/register");
  }

  async register(data: RegisterData) {
    const { firstName, lastName, email, password, confirmPassword } = data;
    await expect(this.genderButton).toBeVisible();
    await this.genderButton.check();
    await expect(this.firstNameInput).toBeVisible();
    await this.firstNameInput.fill(firstName);
    await expect(this.lastNameInput).toBeVisible();
    await this.lastNameInput.fill(lastName);
    await expect(this.emailInput).toBeVisible();
    await this.emailInput.fill(email);
    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill(password);
    await expect(this.confirmPasswordInput).toBeVisible();
    await this.confirmPasswordInput.fill(confirmPassword);
    await expect(this.registerButton).toBeEnabled();
    await this.registerButton.click();
  }
}
