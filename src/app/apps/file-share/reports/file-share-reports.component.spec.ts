import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileShareReportsComponent} from './file-share-reports.component';

describe('FileShareReportsComponent', () => {
  let component: FileShareReportsComponent;
  let fixture: ComponentFixture<FileShareReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileShareReportsComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileShareReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
