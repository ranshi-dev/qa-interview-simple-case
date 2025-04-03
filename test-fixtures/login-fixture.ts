import { test as base , expect} from '@playwright/test';
import { LoginPage } from '../test-pages/login-page';

// fixture declaration
type TestFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<TestFixtures>({
    //login fixture
  loginPage: async ({ page }, use) => {
    // setup 
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterCredentialsAndSubmit();
    // use
    await use(loginPage);
    //clean up needs to be implemented below. I was getting some browser context issue.
    // Not sure, because, this is dummy application
    
  },

});
export { expect } from '@playwright/test';