import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterHomeFormComponent } from './user-register-home-form.component';

describe('UserRegisterHomeFormComponent', () => {
  let component: UserRegisterHomeFormComponent;
  let fixture: ComponentFixture<UserRegisterHomeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegisterHomeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterHomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
