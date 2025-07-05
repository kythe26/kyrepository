import { test, expect } from '@playwright/test';

test('verify user is able to register successfully', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('[id="customer.firstName"]').fill('kythe');
  await page.locator('[id="customer.lastName"]').fill('arg');
  await page.locator('[id="customer.address.street"]').fill('Street');
  await page.locator('[id="customer.address.city"]').fill('City');
  await page.locator('[id="customer.address.state"]').fill('State');
  await page.locator('[id="customer.address.zipCode"]').fill('1234');
  await page.locator('[id="customer.phoneNumber"]').fill('09123456789');
  await page.locator('[id="customer.ssn"]').fill('987654321');
  await page.locator('[id="customer.username"]').fill('kythe');
  await page.locator('[id="customer.password"]').fill('zaqwsx');
  await page.locator('#repeatedPassword').fill('zaqwsx');
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
  await page.getByText('Your account was created').click();
 
  // verify URL
  await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')

  await page.screenshot({ path: 'test-screenshots/successful-registration.png', fullPage: true })
});