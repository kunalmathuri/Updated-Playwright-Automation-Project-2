import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const records = parse(
  fs.readFileSync(path.join(__dirname, "../test-data/qa/testdata.csv")),
  {
    columns: true,
    skip_empty_lines: true,
  }
);

for (const record of records) {
  test(`Data Driven Testing using csv file in Playwright ${record.TestCaseId}`, async ({
    page,
  }) => {
    //Goto URL
    await page.goto(process.env.URL);
    // search with keyword
    await page.locator('[name="search_query"]').click();
    await page.locator('[name="search_query"]').fill(record.skill2);
    await page.locator('[name="search_query"]').press("Enter");
    //   console.log("Username is : " + process.env.USER_NAME);
    //   console.log("Passsword is : " + process.env.PASSWORD);
  });
}
