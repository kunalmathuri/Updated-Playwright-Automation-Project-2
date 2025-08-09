//Include playwright module
import { expect } from "@playwright/test";

exports.HomePage = class HomePage {
  /**
   * @param {import ('@playwright/test').Page} page
   *
   *
   */
  constructor(page) {
    //Init page object
    this.page = page;
    //Elements
    this.searchTextbox = page.locator('[name="search_query"]');
  }
  async goto() {
    await this.page.goto("https://www.youtube.com/");
    await this.page.waitForTimeout(2000);
  }
  async searchKeywords(param1) {
    await expect(this.searchTextbox).toBeEnabled();
    await this.searchTextbox.click();
    await this.searchTextbox.fill(param1);
    await this.searchTextbox.click("Enter");
  }
};
