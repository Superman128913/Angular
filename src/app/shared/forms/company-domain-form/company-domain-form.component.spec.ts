import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDomainFormComponent } from './company-domain-form.component';

describe('CompanyDomainFormComponent', () => {
  let component: CompanyDomainFormComponent;
  let fixture: ComponentFixture<CompanyDomainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDomainFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDomainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
