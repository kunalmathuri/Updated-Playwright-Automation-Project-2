import { test, expect } from "@playwright/test";

test("Visual Compare testing in Playwright ", async ({ page }) => {
  //before action 1 image comparison
  await page.goto("https://www.github.com/login/");
  await expect(page).toHaveScreenshot("githubpage.png");
  await page.locator("#login_field").click();
  await page.locator("#login_field").fill("testers tallk");
  //after action2 image comparison
  await expect(page).toHaveScreenshot("githubpage.png");
});
