import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CompanyUserRequestComponent} from './company-user-request.component';

describe('CompanyUserRequestComponent', () => {
  let component: CompanyUserRequestComponent;
  let fixture: ComponentFixture<CompanyUserRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyUserRequestComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyUserRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
