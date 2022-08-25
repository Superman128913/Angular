import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserDevToolsComponent} from './user-dev-tools.component';

describe('UserDevToolsComponent', () => {
  let component: UserDevToolsComponent;
  let fixture: ComponentFixture<UserDevToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDevToolsComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDevToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
