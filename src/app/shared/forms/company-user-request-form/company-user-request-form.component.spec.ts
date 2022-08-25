import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CompanyUserRequestFormComponent} from './company-user-request-form.component';

describe('CompanyUserRequestFormComponent', () => {
  let component: CompanyUserRequestFormComponent;
  let fixture: ComponentFixture<CompanyUserRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyUserRequestFormComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyUserRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
