import { TestBed } from '@angular/core/testing';
import { CompanyApiService } from './company-api.service';
describe('CompanyApiService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CompanyApiService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=company-api.service.spec.js.map