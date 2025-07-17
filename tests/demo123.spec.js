import { test, expect } from "@playwright/test";
test("demo test", async ({ page }) => {
  await page.goto("https://www.playwright.dev");
  await expect(page).toHaveTitle(/Playwright/);
  await page.close();
});
