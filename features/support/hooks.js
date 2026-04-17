
const { createBdd } = require('playwright-bdd');
const { test } = require('./fixtures');

const { AfterStep } = createBdd(test);

AfterStep(async ({ page, $testInfo }) => {
  try {
    const screenshot = await page.screenshot({ fullPage: true });
    await $testInfo.attach('screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  } catch (_) {
    // página no disponible, se omite la captura
  }
});
