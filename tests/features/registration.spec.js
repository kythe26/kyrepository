import { test, expect } from '@playwright/test';
// Before each test, we will clean the database to ensure a fresh state

test('clean db', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByRole('link', { name: 'Admin Page' }).click();
  await page.getByRole('button', { name: 'Clean' }).click();
});
test('Verify that user is able to register account', async ({ page }) => {
  
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('[id="customer.firstName"]').fill('kythe');
  await page.locator('[id="customer.lastName"]').fill('arguelles');
  await page.locator('[id="customer.address.street"]').fill('qwe St');
  await page.locator('[id="customer.address.city"]').fill('Test City');
  await page.locator('[id="customer.address.state"]').fill('Test State');
  await page.locator('[id="customer.address.zipCode"]').fill('1800');
  await page.locator('[id="customer.phoneNumber"]').fill('0912345678');
  await page.locator('[id="customer.ssn"]').fill('123456');
  await page.locator('[id="customer.username"]').fill('kythe');
  await page.locator('[id="customer.password"]').fill('zaqwsx');
  await page.locator('#repeatedPassword').fill('zaqwsx');

  await page.getByRole('button', { name: 'Register' }).click();
});