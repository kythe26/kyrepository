import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    //Locators
    //NTS declare
    public readonly usernameInput: Locator;
    public readonly passwordInput: Locator;
    public readonly loginButton: Locator;
    public readonly swagLabsHeader: Locator; // this will be used to verify successful login
    public readonly errorMessage: Locator;


    //NTS: assign value
    constructor(public readonly page: Page) {
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.swagLabsHeader = page.getByText('Swag Labs');
        this.errorMessage = page.locator('[data-test="error"]');
    }
    //Navigate to login page (method)
    async navigateTo(): Promise<void> {
        await this.page.goto('/');
        await this.page.waitForLoadState('domcontentloaded'); // 
    
    }
// Do login steps   with the provided username and password, @param username, @param password

async login(username: string, password: string): Promise<void>{
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}
}