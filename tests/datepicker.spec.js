import { test, expect } from "@playwright/test";
test("Date Picker in Playwright", async ({ page }) => {
  //Go to Url

  await page.goto("https://www.jqueryui.com/datepicker/");
  const frameElement = page.frameLocator(".demo-frame");
  //   await frameElement.locator(".hasDatepicker").fill("15/07/2025");
  await frameElement.locator(".hasDatepicker").click();

  // today's date
  //   await frameElement.locator(".ui-datepicker-today").click();

  //custom date value
  const defaultDate = frameElement.locator(".ui-datepicker-today > a");
  const currentDateValue = await defaultDate.getAttribute("data-date"); //16 as value

  let customDate = parseInt(currentDateValue) + 3; //13 as value

  const element = "[data-date=" + "'" + customDate.toString() + "'" + "]";

  await frameElement.locator(element).click();
});
