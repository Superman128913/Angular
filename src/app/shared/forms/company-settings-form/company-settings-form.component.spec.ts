import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySettingsFormComponent } from './company-settings-form.component';

describe('CompanySettingsFormComponent', () => {
  let component: CompanySettingsFormComponent;
  let fixture: ComponentFixture<CompanySettingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySettingsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
