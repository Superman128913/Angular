import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaxSvgComponent } from './fax-svg.component';

describe('FaxSvgComponent', () => {
  let component: FaxSvgComponent;
  let fixture: ComponentFixture<FaxSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaxSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaxSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
