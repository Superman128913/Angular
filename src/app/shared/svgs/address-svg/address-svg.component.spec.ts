import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSvgComponent } from './address-svg.component';

describe('AddressSvgComponent', () => {
  let component: AddressSvgComponent;
  let fixture: ComponentFixture<AddressSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
