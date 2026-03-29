const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  // Need to start dev server
  const { spawn } = require('child_process');
  const server = spawn('npm', ['run', 'dev']);

  server.stdout.on('data', async (data) => {
    if (data.toString().includes('Ready in')) {
      console.log('Server is ready');

      try {
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

        // Wait for hydration and animation
        await page.waitForTimeout(2000);

        // Screenshot top section unscrolled
        await page.screenshot({ path: 'navbar-unscrolled.png', clip: { x: 0, y: 0, width: 1280, height: 200 } });
        console.log('Took unscrolled screenshot');

        // Scroll down
        await page.evaluate(() => window.scrollBy(0, 500));
        await page.waitForTimeout(1500);

        // Screenshot scrolled
        await page.screenshot({ path: 'navbar-scrolled.png', clip: { x: 0, y: 0, width: 1280, height: 100 } });
        console.log('Took scrolled screenshot');
      } catch (e) {
        console.error(e);
      } finally {
        await browser.close();
        server.kill();
        process.exit(0);
      }
    }
  });
})();
