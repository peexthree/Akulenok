const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000');

  await page.waitForSelector('nav');
  const nav = page.locator('nav').first();

  // Test 1: Click "Услуги"
  const servicesLink = nav.getByRole('link', { name: 'Услуги' });
  await servicesLink.click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/verify_services.png' });

  // Test 2: Click "Цены"
  const pricingLink = nav.getByRole('link', { name: 'Цены' });
  await pricingLink.click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/verify_pricing.png' });

  // Test 3: Click "Галерея"
  const galleryLink = nav.getByRole('link', { name: 'Галерея' });
  await galleryLink.click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/verify_gallery.png' });

  // Test 4: Click "Отзывы"
  const testimonialsLink = nav.getByRole('link', { name: 'Отзывы' });
  await testimonialsLink.click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/verify_testimonials.png' });

  // Test 5: Click "Контакты"
  const contactsLink = nav.getByRole('link', { name: 'Контакты' });
  await contactsLink.click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/verify_contacts.png' });

  await browser.close();
  console.log('Verification complete');
})();
