import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileShareRecentFilesComponent} from './file-share-recent-files.component';

describe('FileShareRecentFilesComponent', () => {
  let component: FileShareRecentFilesComponent;
  let fixture: ComponentFixture<FileShareRecentFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileShareRecentFilesComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileShareRecentFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
