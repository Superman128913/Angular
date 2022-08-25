import { TestBed } from '@angular/core/testing';
import { UserApiService } from './user-api.service';
describe('UserApiService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserApiService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=user-api.service.spec.js.map