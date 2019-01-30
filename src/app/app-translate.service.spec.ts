import { TestBed } from '@angular/core/testing';

import { AppTranslateService } from './app-translate.service';

describe('AppTranslateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppTranslateService = TestBed.get(AppTranslateService);
    expect(service).toBeTruthy();
  });
});
