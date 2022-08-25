import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateProvinceCountySvgComponent } from './state-province-county-svg.component';

describe('StateProvinceCountySvgComponent', () => {
  let component: StateProvinceCountySvgComponent;
  let fixture: ComponentFixture<StateProvinceCountySvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateProvinceCountySvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateProvinceCountySvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
