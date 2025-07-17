// Include Playwright module
import { test, expect } from "@playwright/test";
// Write a test

test("Handle dropdown list in playwright", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.facebook.com/");
  await page.getByText("Create new account").click();
  const dropDownList = page.locator("#month");
  await expect(dropDownList).toHaveValue("5");
  await page.waitForTimeout(5000);
  dropDownList.selectOption("5");
  dropDownList.selectOption("6");
  dropDownList.selectOption("Aug");
  await page.waitForTimeout(3000);
  await page.close();
});
