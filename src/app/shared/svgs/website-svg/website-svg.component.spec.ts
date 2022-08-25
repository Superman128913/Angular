import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteSvgComponent } from './website-svg.component';

describe('WebsiteSvgComponent', () => {
  let component: WebsiteSvgComponent;
  let fixture: ComponentFixture<WebsiteSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
