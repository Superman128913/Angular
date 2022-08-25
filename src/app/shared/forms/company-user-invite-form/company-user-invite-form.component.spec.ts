import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CompanyUserInviteFormComponent} from './company-user-invite-form.component';

describe('CompanyUserInviteFormComponent', () => {
  let component: CompanyUserInviteFormComponent;
  let fixture: ComponentFixture<CompanyUserInviteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyUserInviteFormComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyUserInviteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
