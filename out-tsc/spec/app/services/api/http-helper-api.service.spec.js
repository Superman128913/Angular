import { TestBed } from '@angular/core/testing';
import { HttpHelperApiService } from './http-helper-api.service';
describe('HttpHelperApiService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HttpHelperApiService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=http-helper-api.service.spec.js.map