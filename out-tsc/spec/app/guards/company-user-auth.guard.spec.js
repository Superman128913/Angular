import { TestBed } from '@angular/core/testing';
import { CompanyUserAuthGuard } from './company-user-auth.guard';
describe('CompanyUserAuth', () => {
    let guard;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(CompanyUserAuthGuard);
    });
    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
//# sourceMappingURL=company-user-auth.guard.spec.js.map