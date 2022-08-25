import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinSvgComponent } from './linkedin-svg.component';

describe('LinkedinSvgComponent', () => {
  let component: LinkedinSvgComponent;
  let fixture: ComponentFixture<LinkedinSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
