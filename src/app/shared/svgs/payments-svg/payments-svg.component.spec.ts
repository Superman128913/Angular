import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsSvgComponent } from './payments-svg.component';

describe('PaymentsSvgComponent', () => {
  let component: PaymentsSvgComponent;
  let fixture: ComponentFixture<PaymentsSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
