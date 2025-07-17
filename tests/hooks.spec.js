// Include Playwright module
import { test, expect } from "@playwright/test";
// Write a test

test.beforeEach("Run before each test", async ({ page }) => {
  console.log("Running before each test......!");
  await page.goto("https://www.youtube.com");
});
test.beforeAll("Run before all test", async () => {
  console.log("Running before all test....!");
});
test.afterEach("Run before each test", async ({ page }) => {
  console.log("Running After each test......!");
});
test.afterAll("Run before all test", async () => {
  console.log("Running After all test....!");
});

test("Hooks in playwright", async ({ page }) => {
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
});

test("Hooks in playwright2", async ({ page }) => {
  // Search with Keywords
  await page.getByRole("combobox", { name: "Search" }).click();
  await page
    .getByRole("combobox", { name: "Search" })
    .fill("api testing by testers talk");
  // perform on search textbox
  await expect(
    page.getByRole("button", { name: "Search", exact: true })
  ).toBeEnabled();
  await page.getByRole("button", { name: "Search", exact: true }).click();

  await page.close();
});
