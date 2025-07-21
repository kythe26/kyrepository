import { test, expect } from '@playwright/test';

test('verify user is able to register successfully', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  //Auto-retrying assertion
  await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('[id="customer.firstName"]').fill('kythe');
  await page.locator('[id="customer.lastName"]').fill('arg');
  await page.locator('[id="customer.address.street"]').fill('Street');
  await page.locator('[id="customer.address.city"]').fill('City');
  await page.locator('[id="customer.address.state"]').fill('State');
  await page.locator('[id="customer.address.zipCode"]').fill('1234');
  await page.locator('[id="customer.phoneNumber"]').fill('09123456789');
  await page.locator('[id="customer.ssn"]').fill('987');
  await page.locator('[id="customer.username"]').fill('kythe');
    //Non-retrying assetion + negating matchers
  await page.locator('[id="customer.password"]').fill('zaqwsx'); 
  const password = page.locator('[id="customer.password"]');
  expect (password).not.toBeNull();
   //Soft assertion
  await expect.soft(page.getByPlaceholder('repeatedPassword')).toBeVisible();
  await page.locator('#repeatedPassword').fill('zaqwsx');
    //Negating matcher
  await expect(page.getByRole("button", { name: 'Register' })).not.toHaveText("Sign In");
  await page.getByRole('button', { name: 'Register' }).click();  
  await expect(page.getByRole('heading', { name: 'Welcome ' })).toBeVisible();
   //Custom expect message
  await expect(page.getByText("Your account was created"),'Expect the page to display "Your account was created"').toBeVisible(); 
 
  // verify URL
  //await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')

  //await page.screenshot({ path: 'test-screenshots/successful-registration.png', fullPage: true })
}); 
  
  