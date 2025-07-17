import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://github.com/kunalmathuri");
  await page.getByRole("link", { name: "Sign in" }).click();
  await page
    .getByRole("textbox", { name: "Username or email address" })
    .click();
  await page
    .getByRole("textbox", { name: "Username or email address" })
    .fill("235648792");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("kjhgfdevbn");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByRole("alert")).toContainText(
    "Incorrect username or password."
  );
});
