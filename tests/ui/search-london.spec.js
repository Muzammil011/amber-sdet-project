const { test, expect } = require('@playwright/test');

test('Search for London on AmberStudent', async ({ page }) => {
  await page.goto('https://amberstudent.com');

  const searchInput = page.locator('input[placeholder*="Search"]');
  await searchInput.fill('London');
  await page.waitForTimeout(2000);

  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');

  
  await expect(page).toHaveURL(/london/i);
});
