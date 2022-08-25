import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndrawSecureFilesSvgComponent } from './undraw-secure-files-svg.component';

describe('UndrawSecureFilesSvgComponent', () => {
  let component: UndrawSecureFilesSvgComponent;
  let fixture: ComponentFixture<UndrawSecureFilesSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndrawSecureFilesSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndrawSecureFilesSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
