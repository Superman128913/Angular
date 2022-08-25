import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSvgComponent } from './users-svg.component';

describe('UserSvgComponent', () => {
  let component: UsersSvgComponent;
  let fixture: ComponentFixture<UsersSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
