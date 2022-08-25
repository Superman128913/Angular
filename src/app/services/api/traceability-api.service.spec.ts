import {TestBed} from '@angular/core/testing';

import {TraceabilityApiService} from './traceability-api.service';

describe('TraceabilityApiService', () => {
    let service: TraceabilityApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TraceabilityApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
