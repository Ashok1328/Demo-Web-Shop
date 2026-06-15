import { expect, test } from "@playwright/test";
import { LoginTestData } from "../data/TestData";
import { LoginPage } from "../page/LoginPage";

test.describe("User Login", () => {
  test("should allow user to login successfully", async ({ page }) => {
    test.use({ storageState: "src/auth/auth.json" });

    test.beforeEach(async () => {
      await page.goto("/login");
    });

    // Positive test cases for login functionality
    test("Login with valid credentials", async ({ page }) => {
      const loginPage = new LoginPage(page);
      const loginData = new LoginTestData().valid;

      await loginPage.login(loginData);
      // Verify account page or dashboard is visible after login
      await expect(page.locator(".account")).toBeVisible();
    });

    // Negative test cases for login functionality
    test("Login with invalid email", async ({ page }) => {
      // Clear storage state to simulate a fresh login attempt
      await page.context().clearCookies();
      await page.context().clearPermissions();

      const loginPage = new LoginPage(page);
      const loginData = new LoginTestData().invalidEmail;

      await loginPage.login(loginData);
      // Verify an error message is visible after failed login
      await expect(page.locator(".message-errors")).toBeVisible();
    });

    // Negative test cases for login functionality
    test("Login with invalid password", async ({ page }) => {
      // Clear storage state to simulate a fresh login attempt
      await page.context().clearCookies();
      await page.context().clearPermissions();

      const loginPage = new LoginPage(page);
      const loginData = new LoginTestData().invalidPassword;

      await loginPage.login(loginData);
      // Verify an error message is visible after failed login
      await expect(page.locator(".message-errors")).toBeVisible();
    });

    // Negative test cases for login functionality
    test("Login with invalid credentials", async ({ page }) => {
      // Clear storage state to simulate a fresh login attempt
      await page.context().clearCookies();
      await page.context().clearPermissions();

      const loginPage = new LoginPage(page);
      const loginData = new LoginTestData().invalidEmailAndPassword;

      await loginPage.login(loginData);
      // Verify an error message is visible after failed login
      await expect(page.locator(".message-errors")).toBeVisible();
    });

    // Negative test cases for login functionality
    test("Login with empty fields", async ({ page }) => {
      // Clear storage state to simulate a fresh login attempt
      await page.context().clearCookies();
      await page.context().clearPermissions();

      const loginPage = new LoginPage(page);
      const loginData = new LoginTestData().emptyFields;

      await loginPage.login(loginData);
      // Verify an error message is visible after failed login
      await expect(page.locator(".message-errors")).toBeVisible();
    });
  });
});
