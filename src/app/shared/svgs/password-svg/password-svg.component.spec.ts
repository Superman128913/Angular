import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSvgComponent } from './password-svg.component';

describe('PasswordSvgComponent', () => {
  let component: PasswordSvgComponent;
  let fixture: ComponentFixture<PasswordSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
