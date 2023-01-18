import { TestBed } from '@angular/core/testing';

import { ServiceLoginValidationService } from './service-login-validation.service';

describe('ServiceLoginValidationService', () => {
  let service: ServiceLoginValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLoginValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
