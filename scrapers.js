const puppeteer = require("puppeteer");
const url =
  "https://www.flipkart.com/acer-predator-helios-300-core-i9-12th-gen-16-gb-1-tb-ssd-windows-11-home-6-gb-graphics-nvidia-geforce-rtx-3060-ph315-55-ph315-55-99z6-gaming-laptop/p/itm85043c4f71d4a?pid=COMGHY4DQWWBKZUK&lid=LSTCOMGHY4DQWWBKZUKT8DSUT";

const maxPriceICanAfford = 160000;

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  //   const [el] = await page.$x('//*[@id="landingImage"]');
  //   const src = await el.getProperty("src");
  //   const srcTxt = await src.jsonValue();

  //   const [el2] = await page.$x('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[1]/h1/span');
  //   const txt = await el2.getProperty("textContent");
  //   const title = await txt.jsonValue();

  const [el3] = await page.$x("/html/body/div[1]/div/div[3]/div[1]/div[2]/div[2]/div/div[3]/div[1]/div/div[1]");
  const txt2 = await el3.getProperty("textContent");
  console.log(txt2);
  const price = await txt2.jsonValue();
  const finalPrice = price.slice(1).replaceAll(",", "");
  console.log({ price });
  if (Number(finalPrice) < maxPriceICanAfford) {
    console.log(true);
  } else {
    console.log(false);
  }

  browser.close();
}

scrapeProduct(url);
