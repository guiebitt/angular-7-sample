import { TestBed } from '@angular/core/testing';

import { AppTranslateService } from './app-translate.service';
import { TranslateTestingModule } from 'ngx-translate-testing';

describe('AppTranslateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      TranslateTestingModule.withTranslations({})
    ]
  }));

  it('should be created', () => {
    const service: AppTranslateService = TestBed.get(AppTranslateService);
    expect(service).toBeTruthy();
  });

  it('should be initialize', () => {
    const service: AppTranslateService = TestBed.get(AppTranslateService);
    service.initializeTranslate();

    expect(service.translate.getDefaultLang()).toBe('en');
    expect(service.translate.currentLang).toContain(service.translate.getBrowserLang());
  });

  it('should be change language', () => {
    const service: AppTranslateService = TestBed.get(AppTranslateService);
    service.changeTranslate('es');

    expect(service.translate.currentLang).toBe('es');
  });
});
