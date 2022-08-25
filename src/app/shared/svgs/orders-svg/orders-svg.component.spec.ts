import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSvgComponent } from './orders-svg.component';

describe('OrdersSvgComponent', () => {
  let component: OrdersSvgComponent;
  let fixture: ComponentFixture<OrdersSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
