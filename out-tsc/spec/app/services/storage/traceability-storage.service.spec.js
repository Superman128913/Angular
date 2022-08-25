import { TestBed } from '@angular/core/testing';
import { TraceabilityStorageService } from './traceability-storage.service';
describe('TraceabilityStorageService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TraceabilityStorageService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=traceability-storage.service.spec.js.map