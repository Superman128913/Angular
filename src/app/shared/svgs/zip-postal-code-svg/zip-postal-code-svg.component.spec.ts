import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipPostalCodeSvgComponent } from './zip-postal-code-svg.component';

describe('ZipPostalCodeSvgComponent', () => {
  let component: ZipPostalCodeSvgComponent;
  let fixture: ComponentFixture<ZipPostalCodeSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipPostalCodeSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipPostalCodeSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
