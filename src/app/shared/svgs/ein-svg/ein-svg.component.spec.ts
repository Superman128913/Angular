import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinSvgComponent } from './ein-svg.component';

describe('EinSvgComponent', () => {
  let component: EinSvgComponent;
  let fixture: ComponentFixture<EinSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
