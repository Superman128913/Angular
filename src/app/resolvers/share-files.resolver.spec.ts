import { TestBed } from '@angular/core/testing';

import { ShareFilesResolver } from './share-files.resolver';

describe('ShareFilesResolver', () => {
  let resolver: ShareFilesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ShareFilesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
