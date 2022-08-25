import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CompanyJoinComponent} from './company-join.component';

describe('CompanyJoinComponent', () => {
  let component: CompanyJoinComponent;
  let fixture: ComponentFixture<CompanyJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyJoinComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
