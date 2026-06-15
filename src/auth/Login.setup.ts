import { test } from "@playwright/test";
import { LoginPage } from "../page/LoginPage";
import { LoginTestData } from "../data/TestData";

test("Authenticated User Setup", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loginData = new LoginTestData().valid;

  await page.goto("/login");

  await loginPage.login(loginData);

  // Save storage state for reuse in tests
  await page.context().storageState({ path: "src/auth/auth.json" });
});
