import { test, expect } from "@playwright/test";
const testParameters = [
  "api testing by testers talk",
  "javascript by testers talk",
  "playwright testing by testers talk",
];
for (const searchKeyword of testParameters) {
  test(`Parametrize tests in Playwright ${searchKeyword}`, async ({ page }) => {
    await page.goto("https://www.youtube.com");
    await page.getByPlaceholder("Search").click();
    await page.getByPlaceholder("search").fill(searchKeyword);
    await page.getByPlaceholder("search").press("Enter");
  });
}
