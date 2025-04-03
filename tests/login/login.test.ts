import { test, expect } from '@playwright/test'
import {LoginPage} from '../../test-pages/login-page'

test.describe.configure({ mode: 'serial' })

test.describe('login form tests', () => {
  test('logging in works with existing account', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.enterCredentialsAndSubmit()
    await loginPage.logOut()
  })

  
})
