import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotNumberSvgComponent } from './lot-number-svg.component';

describe('LotNumberSvgComponent', () => {
  let component: LotNumberSvgComponent;
  let fixture: ComponentFixture<LotNumberSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotNumberSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotNumberSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
