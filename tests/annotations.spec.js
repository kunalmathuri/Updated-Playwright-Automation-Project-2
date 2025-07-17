import { test, expect } from "@playwright/test";
test.only("Assertions in Playwright 1", async ({ page }) => {
  await page.goto(
    "https://www.youtube.com/results?search_query=api+testing+by+testers+talk"
  );
  console.log("test running 1............!");

  await expect(page).toHaveTitle("api testing by testers talk - YouTube");

  await expect(page.locator('[name="search_query"]')).toHaveValue(
    "api testing by testers talk"
  );

  //assert editable enabled visible

  await expect(page.locator('[name="search_query"]')).toBeEditable;
  await expect(page.locator('[name="search_query"]')).toBeVisible;
  await expect(page.locator('[name="search_query"]')).toBeEnabled;
});
test.skip("Assertions in Playwright 2", async ({ page }) => {
  await page.goto(
    "https://www.youtube.com/results?search_query=api+testing+by+testers+talk"
  );
  console.log("test running 2............!");

  await expect(page).toHaveTitle("api testing by testers talk - YouTube");

  await expect(page.locator('[name="search_query"]')).toHaveValue(
    "api testing by testers talk"
  );

  //assert editable enabled visible

  await expect(page.locator('[name="search_query"]')).toBeEditable;
  await expect(page.locator('[name="search_query"]')).toBeVisible;
  await expect(page.locator('[name="search_query"]')).toBeEnabled;
});
test("Assertions in Playwright 3", async ({ page }) => {
  await page.goto(
    "https://www.youtube.com/results?search_query=api+testing+by+testers+talk"
  );
  console.log("test running 3............!");

  await expect(page).toHaveTitle("api testing by testers talk - YouTube");

  await expect(page.locator('[name="search_query"]')).toHaveValue(
    "api testing by testers talk"
  );

  //assert editable enabled visible

  await expect(page.locator('[name="search_query"]')).toBeEditable;
  await expect(page.locator('[name="search_query"]')).toBeVisible;
  await expect(page.locator('[name="search_query"]')).toBeEnabled;
});
