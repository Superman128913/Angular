import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImageSvgComponent } from './user-image-svg.component';

describe('UserImageSvgComponent', () => {
  let component: UserImageSvgComponent;
  let fixture: ComponentFixture<UserImageSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserImageSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImageSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
