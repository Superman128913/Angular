import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CompanyUserInviteComponent} from './company-user-invite.component';

describe('CompanyUserInviteComponent', () => {
  let component: CompanyUserInviteComponent;
  let fixture: ComponentFixture<CompanyUserInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyUserInviteComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyUserInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
