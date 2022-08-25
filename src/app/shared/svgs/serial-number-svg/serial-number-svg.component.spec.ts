import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialNumberSvgComponent } from './serial-number-svg.component';

describe('SerialNumberSvgComponent', () => {
  let component: SerialNumberSvgComponent;
  let fixture: ComponentFixture<SerialNumberSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialNumberSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialNumberSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
