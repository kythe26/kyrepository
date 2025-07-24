import { expect, test as setup } from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config';
import { LoginPage } from '../pages/LoginPage'; //importing POM


setup('Do Login', async ({ page }) => {
   const loginPage = new LoginPage(page); //POM

   await loginPage.navigateTo() //POM
   await loginPage.login(process.env.SAUCE_USERNAME!,process.env.SAUCE_PASSWORD!) //POM

    //comment out for POM
    // await page.goto('/');
    // await page.locator('[data-test="username"]').fill(process.env.SAUCE_USERNAME!);
    // await page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD!); 
    // await page.locator('[data-test="login-button"]').click();

    await expect(page.getByText('Swag Labs')).toBeVisible() 
    await page.context().storageState({path:STORAGE_STATE});
    
});   