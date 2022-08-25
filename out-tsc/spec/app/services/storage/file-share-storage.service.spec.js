import { TestBed } from '@angular/core/testing';
import { FileShareStorageService } from './file-share-storage.service';
describe('FileShareStorageService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FileShareStorageService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=file-share-storage.service.spec.js.map