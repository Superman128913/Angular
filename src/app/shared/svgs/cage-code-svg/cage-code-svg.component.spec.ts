import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CageCodeSvgComponent } from './cage-code-svg.component';

describe('CageCodeSvgComponent', () => {
  let component: CageCodeSvgComponent;
  let fixture: ComponentFixture<CageCodeSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CageCodeSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CageCodeSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
