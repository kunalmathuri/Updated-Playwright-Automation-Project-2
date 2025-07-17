// Include Playwright module
import { test, expect } from "@playwright/test";
// Write a test

test("validate youtube title", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.youtube.com/");
  // Search with Keywords
  await page.getByRole("combobox", { name: "Search" }).click();
  await page
    .getByRole("combobox", { name: "Search" })
    .fill("cypress by testers talk");
  // perform on search textbox
  await expect(
    page.getByRole("button", { name: "Search", exact: true })
  ).toBeEnabled();
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await page.waitForTimeout(5000);
  // Click on Playlist
  await page.getByRole("link", { name: "Cypress by Testers Talk☑️" }).click();
  // validate title
  await expect(page).toHaveTitle(
    "Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs - YouTube"
  );
  await page.close();
});
