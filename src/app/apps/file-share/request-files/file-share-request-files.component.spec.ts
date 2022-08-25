import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileShareRequestFilesComponent} from './file-share-request-files.component';

describe('FileShareRequestFilesComponent', () => {
  let component: FileShareRequestFilesComponent;
  let fixture: ComponentFixture<FileShareRequestFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileShareRequestFilesComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileShareRequestFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
