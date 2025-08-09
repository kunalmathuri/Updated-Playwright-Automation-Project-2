//Include playwright module
import { expect } from "@playwright/test";

exports.ResultPage = class ResultPage {
  /**
   * @param {import ('@playwright/test').Page} page
   *
   *
   */
  constructor(page) {
    //Init page object
    this.page = page;
    //Elements
    this.playlistlink = page.locator(
      'xpath=//a[contains(text(),"Playwright by Testers Talk☑️")]'
    );
  }

  async clickOnPlaylist() {
    // await expect(this.playlistlink).toBeEnabled();
    await this.playlistlink.click();
    await this.page.waitForTimeout(5000);
  }
};
