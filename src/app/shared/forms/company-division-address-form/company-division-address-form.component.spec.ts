import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CompanyDivisionAddressFormComponent} from './company-division-address-form.component';

describe('CompanyDivisionAddressFormComponent', () => {
  let component: CompanyDivisionAddressFormComponent;
  let fixture: ComponentFixture<CompanyDivisionAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyDivisionAddressFormComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDivisionAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
