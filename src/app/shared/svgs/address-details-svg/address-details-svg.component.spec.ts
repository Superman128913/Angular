import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailsSvgComponent } from './address-details-svg.component';

describe('AddressDetailsSvgComponent', () => {
  let component: AddressDetailsSvgComponent;
  let fixture: ComponentFixture<AddressDetailsSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressDetailsSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDetailsSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
