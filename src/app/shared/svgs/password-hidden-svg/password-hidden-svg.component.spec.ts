import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordHiddenSvgComponent } from './password-hidden-svg.component';

describe('PasswordHiddenSvgComponent', () => {
  let component: PasswordHiddenSvgComponent;
  let fixture: ComponentFixture<PasswordHiddenSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordHiddenSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordHiddenSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
