import { test, expect } from "@playwright/test";
import { Module1TestData } from "../test-data/qa/google.json";

for (const [key, value] of Object.entries(Module1TestData)) {
  test(`Data Driven Testing using JSON file in Playwright ${value}`, async ({
    page,
  }) => {
    //Goto URL
    await page.goto(process.env.URL);
    // search with keyword
    await page.locator('[name="search_query"]').click();
    await page.locator('[name="search_query"]').fill(value);
    await page.locator('[name="search_query"]').press("Enter");
    //   console.log("Username is : " + process.env.USER_NAME);
    //   console.log("Passsword is : " + process.env.PASSWORD);
  });
}
