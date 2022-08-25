import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CompanyDivisionFormComponent} from './company-division-form.component';

describe('CompanyDivisionFormComponent', () => {
  let component: CompanyDivisionFormComponent;
  let fixture: ComponentFixture<CompanyDivisionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyDivisionFormComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDivisionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
