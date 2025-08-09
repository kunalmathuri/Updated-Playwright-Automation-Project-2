import { test, expect } from "@playwright/test";
test("Read Env file in Playwright", async ({ page }) => {
  //Goto URL
  await page.goto(process.env.URL);
  // search with keyword
  await page.locator('[name="search_query"]').first().click();
  await page
    .locator('[name="search_query"]')
    .first()
    .fill("Api by tester talk");
  await page.locator('[name="search_query"]').first().press("Enter");
  //   console.log("Username is : " + process.env.USER_NAME);
  //   console.log("Passsword is : " + process.env.PASSWORD);
});
