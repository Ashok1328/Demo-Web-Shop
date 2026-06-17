import { expect, test } from "@playwright/test";
import { LoginTestData } from "../data/TestData";
import { LoginPage } from "../page/LoginPage";
import { LoginPageLocators } from "../selector/Locators";

test.describe("User Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test("Login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginData = new LoginTestData().valid;

    await loginPage.login(loginData);

    await expect(
      page.locator("//a[normalize-space()='Batasey22@gmail.com']"),
    ).toBeVisible();
  });

  test("Login with invalid email", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginData = new LoginTestData().invalidEmail;

    await loginPage.login(loginData);

    await page.locator(new LoginPageLocators().errorMessage).isVisible();
  });

  test("Login with invalid password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginData = new LoginTestData().invalidPassword;

    await loginPage.login(loginData);

    await page.locator(new LoginPageLocators().errorMessage).isVisible();
  });

  test("Login with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginData = new LoginTestData().invalidEmailAndPassword;

    await loginPage.login(loginData);

    await page.locator(new LoginPageLocators().errorMessage).isVisible();
  });

  test("Login with empty fields", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginData = new LoginTestData().emptyFields;

    await loginPage.login(loginData);

    await page.locator(new LoginPageLocators().errorMessage).isVisible();
  });
});
