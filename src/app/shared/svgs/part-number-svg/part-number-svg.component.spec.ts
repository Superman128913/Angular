import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartNumberSvgComponent } from './part-number-svg.component';

describe('PartNumberSvgComponent', () => {
  let component: PartNumberSvgComponent;
  let fixture: ComponentFixture<PartNumberSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartNumberSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartNumberSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
