import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class LogoutPage{
  private readonly logout;

  constructor(public readonly page: Page) {
    this.logout = page.getByText('Log out')
  }

  async goto() {
    await this.page.goto('localhost:8080');
  }

  async logOut() {
    await this.logout.click()
    await expect(this.page.getByRole('heading', { name: 'Welcome to the Strawberry QA' })).toBeVisible();

  }
}