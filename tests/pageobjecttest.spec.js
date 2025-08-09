import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homepage";
import { PlayListPage } from "../pages/playlistpage";
import { ResultPage } from "../pages/resultpage";

test("Page Object model in PlayWright", async ({ page }) => {
  //goto url

  const homepage = new HomePage(page); //create new object from the same class of Homepage to use their elements & methods.
  await homepage.goto();

  //search with keywords
  await homepage.searchKeywords("playwright by testers talk");
  //click on playlist
  const resultpage = new ResultPage(page);
  await resultpage.clickOnPlaylist();

  //click on Video
  const playListPage = new PlayListPage(page);
  playListPage.clickOnVideo();
});
