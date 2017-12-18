import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class LoginPage {

  url = '/login';

  private loginName = '//*[@id="username"]';
  private passwordName = '//*[@id="password"]';

  private profileButton = '//*[@id="account-nav-right"]/li[3]/a';
  private navMenu = '//*[@id="user-menu"]';

  constructor() { }

  navigateTo() {
    return browser.get(this.url);
  }

  provideLogin(login: string) {
    const elem = element(by.xpath(this.loginName));
    elem.clear().then(() =>{
      elem.sendKeys(login);
    })
    browser.waitForAngular();
  }

  providePassword(password: string) {
    const elem = element(by.xpath(this.passwordName));
    elem.clear().then(() =>{
      elem.sendKeys(password);
    })
    browser.waitForAngular();
  }

  loginToPage() {
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    browser.waitForAngular();
  }

  logoutFromPage() {
    // const elem = element(by.xpath(this.navMenu));
    const elem = element(by.xpath(this.profileButton));
    elem.click().then(() => {
      element.all(by.xpath('//*[@id="user-menu"]/li')).filter(function(elem) {
        return elem.getText().then(function(text) {
          return text === 'Sign out';
        });
      }).click();
    })

    browser.waitForAngular();    
    // return browser.get('/logout');    
  }
}
