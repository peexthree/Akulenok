const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000');

  // Wait for the services element to be loaded
  await page.waitForSelector('#services');

  // Scroll to the services section
  await page.evaluate(() => {
    document.getElementById('services').scrollIntoView();
  });

  // Wait for a little bit for animations to complete
  await new Promise(resolve => setTimeout(resolve, 2000));

  await page.screenshot({ path: 'services2.png' });
  await browser.close();
})();
