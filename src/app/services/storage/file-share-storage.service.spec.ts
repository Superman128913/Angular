import {TestBed} from '@angular/core/testing';

import {FileShareStorageService} from './file-share-storage.service';

describe('FileShareStorageService', () => {
  let service: FileShareStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileShareStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
