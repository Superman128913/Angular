import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySvgComponent } from './city-svg.component';

describe('CitySvgComponent', () => {
  let component: CitySvgComponent;
  let fixture: ComponentFixture<CitySvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitySvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
