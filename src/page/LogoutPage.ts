import { expect, Locator, Page } from "@playwright/test";
import { LogoutPageLocators } from "../selector/Locators";

export class LogoutPage {
  readonly page: Page;
  readonly logoutLink: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutLink = page.locator(LogoutPageLocators.logoutLink);
    this.loginLink = page.locator(LogoutPageLocators.loginLink);
  }

  async logout() {
    await expect(this.logoutLink).toBeVisible();
    await this.logoutLink.click();
    await expect(this.loginLink).toBeVisible();
  }
}
