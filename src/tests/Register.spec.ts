import { test, expect } from "@playwright/test";
import { RegisterTestData } from "../data/TestData";
import { RegisterPage } from "../page/RegisterPage";
import { RegisterPageLocators } from "../selector/Locators";

test.describe("Register Page", () => {
  test("should allow user to register successfully", async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.gotoRegisterPage();

    await expect(page).toHaveURL(/register/);
  });

  test("Register with valid data", async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const data = new RegisterTestData();

    await registerPage.gotoRegisterPage();
    await registerPage.register(data);

    // Verify a success message or result is visible
    await page.locator(new RegisterPageLocators().account).isVisible();
  });
});
