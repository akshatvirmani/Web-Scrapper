import puppeteer from 'puppeteer';

const url='https://hackmamba.io/blog/';

const main=async ()=>{
    const browser = await puppeteer.launch(); 
    const page = await browser.newPage(); 
    await page.goto(url); 

const allArticles= await page.evaluate(()=>{  
const articles= document.querySelectorAll('section');

return Array.from(articles).slice(0,4).map((section)=>{  
    const title=section.querySelector('h2').innerText; 
    const url=section.querySelector('a').href; 
    return {title,url} 
})
})

console.log(allArticles);
}
main();