import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndrawUploadSvgComponent } from './undraw-upload-svg.component';

describe('UndrawUploadSvgComponent', () => {
  let component: UndrawUploadSvgComponent;
  let fixture: ComponentFixture<UndrawUploadSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndrawUploadSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndrawUploadSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
