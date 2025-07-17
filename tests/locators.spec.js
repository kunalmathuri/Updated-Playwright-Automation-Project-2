import { test, expect } from "@playwright/test";
test("locators test", async ({ page }) => {
  //by role

  // await page.goto(
  //   "https://www.google.com/search?q=cypress%2Bby%2Btesters%2Btalk"
  // );
  // await page.getByRole("link", { hasText: "Videos" }).click();
  // await page.waitForTimeout(7000);

  // by lable

  // await page.goto("https://www.google.com");
  // await page
  //   .getByLabel("Search", { exact: true })
  //   .fill("api testing by testers talk");
  // await page.getByLabel("Search", { exact: true }).press("Enter");
  // await page.waitForTimeout(7000);

  // by altText

  // await page.goto("https://github.com/kunalmathuri");
  // await page.getByAltText("View kunalmathuri's full-sized avatar").click();

  // by test id

  // await page.goto("https://github.com/login");
  // await page.getByTestId("username").fill("kunalmathuri");
  // await page.waitForTimeout(7000);
  // await page.close();

  // by text
  // await page.goto("https://www.youtube.com/@testerstalk");
  // await page.getByText("Cypress by Testers Talk").click();

  //by title

  // await page.goto("https://www.youtube.com/@testerstalk");
  // await page.getByTitle("Cypress by Testers Talk☑️").click();

  // by xpath

  // await page.goto("https://www.youtube.com/");
  // // await page.locator('xpath=//*[@name="search_query"]').click();
  // //or we can remove xpath=, as xpath= is the optional word here.
  // await page.locator('//*[@name="search_query"]').click();
  // await page
  //   .locator('//*[@name="search_query"]')
  //   .fill("javascript by testers talk");
  // await page.locator('//*[@name="search_query"]').press("Enter");

  // by css selector

  await page.goto("https://www.youtube.com/");
  // await page.locator('[name="search_query"]').click();
  // we can add css= as a optional word inside locator
  await page.locator('css=[name="search_query"]').click();
  await page
    .locator('[name="search_query"]')
    .fill("javascript by testers talk");
  await page.locator('[name="search_query"]').press("Enter");
});
