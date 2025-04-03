import { test } from '../test-fixtures/login-fixture';
import { Signup } from '../test-pages/sign-up-page';



test('sign up happy path test', async ({ loginPage, page }) => {
    //I know this step is unnecessary, but just wanted to show that fixtures could be used
    await loginPage.logOut();

    const signUp = new Signup(page);
    //Enter the details required for sign up
    signUp.enterSignUpDetails()

    //submit
    signUp.submit()
    //logout    
    await loginPage.logOut();
});