import { test, expect } from '@playwright/test';

test.describe('Saucedemo login and navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    });


    test('Should be able to login successfully', {tag: ['@Happy-Path', "@Functional-Testing"]}, async ({ page }) => {

        await expect(page.getByText('Swag Labs')).toBeVisible();
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        await page.screenshot({ path: 'test-screenshots/saucedemo-allitems.png', fullPage: true })
    });

    test('Should be able to sort the products by price from low to high', {tag: ['@Happy-Path', "@Functional-Testing"]}, async ({ page }) => {

        await page.getByText('Name (A to Z)Name (A to Z)').click();
        await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
        await page.screenshot({ path: 'test-screenshots/saucedemo-lowtohjgh.png', fullPage: true })
    });
    test('Shopping',
        {
            annotation: {
                type: "Functional Testing",
                description: "This is to test the shopping features",
            },
            tag: ['@Happy-Path', "@Functional-Testing"],


        },
        async ({ page }) => {
            await test.step('Add to cart', async () => {

                await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
                await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
                await page.locator('[data-test="shopping-cart-link"]').click();
                await page.screenshot({ path: 'test-screenshots/saucedemo-addtocart.png', fullPage: true })
            });
            await test.step('Add more item', async () => {
                await page.locator('[data-test="continue-shopping"]').click();
                await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
                await page.locator('[data-test="shopping-cart-link"]').click();
                await page.screenshot({ path: 'test-screenshots/saucedemo-addmore.png', fullPage: true });
            });
            await test.step('Checkout', async () => {
                await page.locator('[data-test="checkout"]').click();
                await page.locator('[data-test="firstName"]').fill('Kythe');
                await page.locator('[data-test="lastName"]').fill('Arguelles');
                await page.locator('[data-test="postalCode"]').fill('1100');
                await page.locator('[data-test="continue"]').click();
                await page.screenshot({ path: 'test-screenshots/saucedemo-checkout.png', fullPage: true })
                await page.locator('[data-test="finish"]').click();
                await expect(page.locator('[data-test="title"]')).toBeVisible();
                await page.screenshot({ path: 'test-screenshots/saucedemo-finish.png', fullPage: true })
            });

        });


});

