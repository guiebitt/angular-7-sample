import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/') as Promise<any>;
  }

  getTitle() {
    return element(by.deepCss('mat-card')).getText();
  }

  getButton(text: string) {
    return element(by.buttonText(text));
  }
}
