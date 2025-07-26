//import { expect, test as setup } from '@playwright/test';
import { test as setup } from '../shared/base';
import { STORAGE_STATE } from '../playwright.config';
//import { LoginPage } from '../pages/LoginPage'; //importing POM


setup('Do Login', async ({ loginPage, page }) => {
   await loginPage.navigateTo()
   await loginPage.login(process.env.SAUCE_USERNAME! || 'standard_user', process.env.SAUCE_PASSWORD || 'secret_sauce');
   //await loginPage.verifyLoginSuccess();
   await page.context().storageState({path: STORAGE_STATE});

    
});   