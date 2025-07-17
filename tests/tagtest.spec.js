import { test, expect } from "@playwright/test";

test("demo test 1 @Tag1", async ({ page }) => {
  await page.goto("https://www.playwright.dev");
  await expect(page).toHaveTitle(/Playwright/);
});
test("demo test 2 @Tag2", async ({ page }) => {
  await page.goto("https://www.playwright.dev");
  await expect(page).toHaveTitle(/Playwright/);
});

test("demo test 3 @Tag1", async ({ page }) => {
  await page.goto("https://www.playwright.dev");
  await expect(page).toHaveTitle(/Playwright/);
  await page.close();
});
