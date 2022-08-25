import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileShareSvgComponent } from './file-share-svg.component';

describe('FileShareSvgComponent', () => {
  let component: FileShareSvgComponent;
  let fixture: ComponentFixture<FileShareSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileShareSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileShareSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
