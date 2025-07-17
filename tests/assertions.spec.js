import { test, expect } from "@playwright/test";
test("Assertions in Playwright", async ({ page }) => {
  await page.goto(
    "https://www.youtube.com/results?search_query=api+testing+by+testers+talk"
  );
  console.log("test running............!");
  // await page.goto(
  //   "https://www.google.com/search?q=api+testing+by+testers+talk"
  // );
  // assert url
  //   await expect(page).toHaveURL("https://www.google.com/");

  //assert title
  // await expect.soft(page).toHaveTitle("api testing by talk - YouTube");
  await expect(page).toHaveTitle("api testing by testers talk - YouTube");

  // assert text
  // await expect
  //   .soft(page.locator('[name="search_query"]'))
  //   .toHaveValue("api by testers talk");

  await expect(page.locator('[name="search_query"]')).toHaveValue(
    "api testing by testers talk"
  );

  //assert editable enabled visible

  await expect(page.locator('[name="search_query"]')).toBeEditable;
  await expect(page.locator('[name="search_query"]')).toBeVisible;
  await expect(page.locator('[name="search_query"]')).toBeEnabled;

  //assert disabled empty

  // await expect(page.locator('[name="search_query"]')).toBeDisabled();
  // await expect(page.locator('[aria-label="Search"]')).toBeEmpty();

  //count

  // await page.waitForTimeout(15000);
  // await expect(page.locator('[aria-label="Search"]')).toHaveCount(2);
});
