import puppeteer from 'puppeteer';


const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://www.traversymedia.com/store', {
  waitUntil: 'networkidle2',
});
// Saves the PDF to PDF.pdf.
await page.pdf({
  path: 'PDF.pdf',
});

await browser.close();