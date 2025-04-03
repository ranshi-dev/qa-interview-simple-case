import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import { existingUsers } from '../test-setup/localstorage.setup'

const existingUser = existingUsers[0]
export class LoginPage {
  private readonly email;
  private readonly password;
  private readonly login;
  private readonly logout;

  constructor(public readonly page: Page) {
    this.email = this.page.getByLabel('Email *')
    this.password = this.page.getByLabel('Password', { exact: true })
    this.login = this.page.getByRole('button', { name: 'Login' })
    this.logout = this.page.getByText('Log out')

  }

  async goto() {
    await this.page.goto('localhost:8080/login');
  }

  
  async enterCredentialsAndSubmit() {
    await this.email.fill(existingUser.email)
    
    await this.password.fill(existingUser.password);

    // Submit button
    await this.login.click();
  }

  async logOut() {
    await this.page.waitForTimeout(1000)
    await this.logout.click()
    await expect(this.page.getByRole('heading', { name: 'Welcome to the Strawberry QA' })).toBeVisible();
  }
}