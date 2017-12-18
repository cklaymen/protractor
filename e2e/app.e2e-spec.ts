import { browser, element, by } from 'protractor';
import { LoginPage } from './login.po';
import { WorkPackagesPage } from './workPackages.po';

const sleepTime = 2000;

const loginPage = new LoginPage();
const workPackagesPage = new WorkPackagesPage();
// Ryszard Plewnia
const login = "rishikbp@gmail.com";
const password = "ryszard123";

describe('Login', () => {

  beforeEach(() => {
    loginPage.navigateTo();
    loginPage.provideLogin(login);
    loginPage.providePassword(password);
    loginPage.loginToPage();
    browser.sleep(sleepTime);
  });

  it('should login to open project page', () => {
    const expectElem = 'My page';
    expect(browser.getPageSource()).toContain(expectElem);
  });

});

describe('Logout', () => {
  
  beforeEach(() => {
    loginPage.logoutFromPage();
    browser.sleep(sleepTime);
  });

  it('should logout from open project page', () => {
    const expectElem = 'Sign in';
    expect(browser.getPageSource()).toContain(expectElem);
  });
});