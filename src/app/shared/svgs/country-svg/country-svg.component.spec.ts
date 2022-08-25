import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySvgComponent } from './country-svg.component';

describe('CountrySvgComponent', () => {
  let component: CountrySvgComponent;
  let fixture: ComponentFixture<CountrySvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrySvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
