import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySvgComponent } from './company-svg.component';

describe('CompanySvgComponent', () => {
  let component: CompanySvgComponent;
  let fixture: ComponentFixture<CompanySvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
