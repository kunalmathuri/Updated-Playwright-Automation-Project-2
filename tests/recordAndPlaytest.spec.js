import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  await page.waitForTimeout(5000);
  await page.getByRole("combobox", { name: "Search" }).click();
  await page
    .getByRole("combobox", { name: "Search" })
    .fill("api testing by testers talk");
  await page.getByRole("button", { name: "Search", exact: true }).click();

  await page
    .getByRole("link", { name: "API Testing by Testers Talk☑️", exact: true })
    .click();
  await page.waitForTimeout(5000);
  await expect(page.locator("#secondary-inner")).toContainText(
    "API Testing by Testers Talk☑️"
  );
  await page.close();
});
