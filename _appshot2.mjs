import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox','--disable-gpu'] });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
// block ONLY external hosts (youtube/analytics) — allow localhost app assets
await ctx.route('**/*', (r) => {
  const u = r.request().url();
  if (u.includes('localhost') || u.includes('127.0.0.1')) return r.continue();
  return r.abort();
});
const page = await ctx.newPage();
const [url, out] = [process.argv[2], process.argv[3]];
await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 }).catch(e=>console.log('nav', e.message));
await page.evaluate(async () => { for (let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,50));} window.scrollTo(0,0); });
await page.waitForTimeout(1000);
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log('ok', out);
