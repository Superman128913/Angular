import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileShareTrashComponent} from './file-share-trash.component';

describe('FileShareTrashComponent', () => {
  let component: FileShareTrashComponent;
  let fixture: ComponentFixture<FileShareTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileShareTrashComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileShareTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
