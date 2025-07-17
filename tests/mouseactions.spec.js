import { test, expect } from "@playwright/test";

test("Mouse action in Playwright", async ({ page }) => {
  //goto url
  await page.goto("https://www.google.com/search?q=testers+talk");
  //click
  //   await page.getByRole("link", { name: "Testers Talk" }).first().click();
  //dblclick
  //   await page.getByRole("link", { name: "Testers Talk" }).first().dblclick();
  //mouse right click
  //   await page
  //     .getByRole("link", { name: "Testers Talk" })
  //     .first()
  //     .click({ button: "right" });
  //mouse middle click
  //   await page
  //     .getByRole("link", { name: "Testers Talk" })
  //     .first()
  //     .click({ button: "middle" });
  //mouse left click
  //   await page
  //     .getByRole("link", { name: "Testers Talk" })
  //     .first()
  //     .click({ button: "left" });
  // mouse hover
  await page.locator('[aria-label="Search by voice"]').hover();
  await page.waitForTimeout(7000);
  //   await page.close();
});
