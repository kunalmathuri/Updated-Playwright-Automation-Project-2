import { test, expect } from "@playwright/test";
test("Keyboard actions in playwright", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.locator('[aria-label="Search"]').first().click();
  //   await page
  //     .locator('[aria-label="Search"]')
  //     .first()
  //     .fill("playwright by testers talk");
  //   //press Enter
  //   await page.locator('[aria-label="Search"]').first().press("Enter");
  //   // press control+a & delete
  //   await page.locator('[aria-label="Search"]').first().click();
  //   await page.locator('[aria-label="Search"]').first().press("Control+a");
  //   await page.locator('[aria-label="Search"]').first().press("Delete");

  //press tab
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
});
