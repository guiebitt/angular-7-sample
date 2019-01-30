import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AppTranslateService {

  constructor(private translate: TranslateService) { }

  public initializeTranslate() {

    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    if (browserLang.match('pt-*') || browserLang === 'pt') {
      this.translate.use('pt-br');
    } else if (browserLang.match('es-*') || browserLang === 'es') {
      this.translate.use('es');
    } else {
      this.translate.use('en');
    }
  }

  public changeTranslate(lang: string) {
    this.translate.use(lang);
  }
}
