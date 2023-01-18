import { TestBed } from '@angular/core/testing';

import { ServeiDeDadesService } from './servei-de-dades.service';

describe('ServeiDeDadesService', () => {
  let service: ServeiDeDadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiDeDadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
