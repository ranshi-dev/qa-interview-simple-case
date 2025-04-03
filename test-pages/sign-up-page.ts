import type { Page, Locator } from '@playwright/test';

export class Signup {
    private readonly signUp;
    private readonly firstName;
    private readonly lastName;
    private readonly email;
    private readonly password;

  constructor(public readonly page: Page) {
    this.signUp = this.page.getByRole('link', { name: 'Signup' })
    this.firstName = this.page.getByRole('textbox', { name: 'First name' })
    this.lastName = this.page.getByRole('textbox', { name: 'Last name' })
    this.email = this.page.getByRole('textbox', { name: 'Email' })
    this.password = this.page.getByRole('textbox', { name: 'Password' })
  }

 
  async enterSignUpDetails(){
    await this.signUp.click();
    //probably some of value needs to be randomized in real world
    await this.firstName.fill('test5');
    await this.lastName.fill('testson5');
    await this.email.fill('test5@mail.com');
    await this.password.fill('testPassword!');
  }

  async submit() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
}