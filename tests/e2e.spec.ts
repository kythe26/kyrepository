import { test, expect } from '@playwright/test';

test("Swag labs text should be visible", async ({ page }) => {
  await page.goto("/inventory.html");
  await expect(page.locator("text=Swag Labs")).toBeVisible();
});


test('Add to cart', async ({page,}) => {
  await page.goto("/inventory.html");
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.waitForURL("/cart.html");
  await expect(page.locator('[data-test="cart-list"]')).toBeVisible();
});

test('Checkout', async ({page,})  => {
  await page.goto("/cart.html");
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('Kythe');
  await page.locator('[data-test="lastName"]').fill('Arguelles');
  await page.locator('[data-test="postalCode"]').fill('1100');
  await page.locator('[data-test="continue"]').click();
   await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  
});