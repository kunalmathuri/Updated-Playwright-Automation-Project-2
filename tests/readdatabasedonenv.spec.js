import { test, expect } from "@playwright/test";
import { qaTestData } from "../test-data/qa/google.json";
import { stageTestData } from "../test-data/stage/google.json";

test.describe("Module1 Test", () => {
  let testData = null;
  test.beforeAll("Running before all tests", () => {
    if (process.env.ENV == "qa") {
      testData = qaTestData;
    } else {
      testData = stageTestData;
    }
  });

  test("Read test data based on different env in Playwright", async ({
    page,
  }) => {
    //Goto URL
    await page.goto(process.env.URL);
    // search with keyword
    await page.locator('[name="search_query"]').click();
    await page.locator('[name="search_query"]').fill(testData.skill1);
    await page.locator('[name="search_query"]').press("Enter");
    //   console.log("Username is : " + process.env.USER_NAME);
    //   console.log("Passsword is : " + process.env.PASSWORD);
  });
});
