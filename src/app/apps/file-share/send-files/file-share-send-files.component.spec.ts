import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileShareSendFilesComponent} from './file-share-send-files.component';

describe('FileShareSendFilesComponent', () => {
  let component: FileShareSendFilesComponent;
  let fixture: ComponentFixture<FileShareSendFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileShareSendFilesComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileShareSendFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
