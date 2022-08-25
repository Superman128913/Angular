import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTitleSvgComponent } from './user-title-svg.component';

describe('UserTitleSvgComponent', () => {
  let component: UserTitleSvgComponent;
  let fixture: ComponentFixture<UserTitleSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTitleSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTitleSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
