import {TestBed} from '@angular/core/testing';

import {TraceabilityStorageService} from './traceability-storage.service';

describe('TraceabilityStorageService', () => {
  let service: TraceabilityStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraceabilityStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
