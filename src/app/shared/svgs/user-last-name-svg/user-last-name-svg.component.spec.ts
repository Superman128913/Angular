import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLastNameSvgComponent } from './user-last-name-svg.component';

describe('UserLastNameSvgComponent', () => {
  let component: UserLastNameSvgComponent;
  let fixture: ComponentFixture<UserLastNameSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLastNameSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLastNameSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
