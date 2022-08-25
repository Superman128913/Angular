import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDivisionAddressAddSvgComponent } from './company-division-address-add-svg.component';

describe('CompanyDivisionAddressAddSvgComponent', () => {
  let component: CompanyDivisionAddressAddSvgComponent;
  let fixture: ComponentFixture<CompanyDivisionAddressAddSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDivisionAddressAddSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDivisionAddressAddSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
