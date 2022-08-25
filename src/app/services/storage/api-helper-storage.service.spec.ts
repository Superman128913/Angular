import {TestBed} from '@angular/core/testing';

import {ApiHelperStorageService} from './api-helper-storage.service';

describe('ApiHelperStorageService', () => {
  let service: ApiHelperStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHelperStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
