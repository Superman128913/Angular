import { TestBed } from '@angular/core/testing';
import { CompanyStorageService } from './company-storage.service';
describe('CompanyStorageService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CompanyStorageService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=company-storage.service.spec.js.map