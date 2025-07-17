import { test, expect } from "@playwright/test";
test("Handle iframes in playwright & Drag & Drop", async ({ page }) => {
  await page.goto("https://jqueryui.com/droppable/");

  // iframe
  const iframeElement = page.frameLocator(".demo-frame");

  //src and dest element
  const dragElement = iframeElement.locator('[id="draggable"]');

  //drag and drop element
  const dropElement = iframeElement.locator('[id="droppable"]');

  await dragElement.dragTo(dropElement);
  await page.waitForTimeout(5000);
});
