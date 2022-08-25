import {TestBed} from '@angular/core/testing';

import {ErrorHelperApiService} from './error-helper-api.service';

describe('ErrorHelperApiService', () => {
  let service: ErrorHelperApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHelperApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
