import puppeteer from "puppeteer";
import fs from "fs";

const url = "https://hackmamba.io/blog/";

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const allArticles = await page.evaluate(() => {
    const articles = document.querySelectorAll("section");

    return Array.from(articles)
      .slice(0, 4)
      .map((section) => {
        const title = section.querySelector("h2").innerText;
        const url = section.querySelector("a").href;
        return { title, url };
      });
  });

  console.log(allArticles);

  fs.writeFile(`pageData.json`, JSON.stringify(allArticles), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Data  of  Page Scraped`);
    }
  });
};
main();
