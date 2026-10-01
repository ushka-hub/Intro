// Renders each <section class="slide"> in an HTML file to a 1600x2000 PNG.
// Usage: node observances/render.js <slides.html>
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const file = path.resolve(process.argv[2]);
  const outDir = path.dirname(file);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 2000 } });
  await page.goto('file://' + file, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const slides = await page.$$('section.slide');
  for (let i = 0; i < slides.length; i++) {
    const out = path.join(outDir, `slide-${String(i + 1).padStart(2, '0')}.png`);
    await slides[i].screenshot({ path: out });
    console.log(out);
  }
  await browser.close();
})();
