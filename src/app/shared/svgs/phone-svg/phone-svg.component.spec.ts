import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSvgComponent } from './phone-svg.component';

describe('PhoneSvgComponent', () => {
  let component: PhoneSvgComponent;
  let fixture: ComponentFixture<PhoneSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
