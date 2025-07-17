import { test, expect } from "@playwright/test";
test("Take screenshot in playwright", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.youtube.com/@testerstalk");

  //element screenshot

  //   await page
  //     .locator("#page-header-banner")
  //     .screenshot({ path: "./screenshots/element.png" });

  //page screenshot
  //   await page.screenshot({ path: "./screenshots/page.png" });

  //full page screenshot
  await page.screenshot({ path: "./screenshots/fullpage.png", fullPage: true });
  await page.close();
});
