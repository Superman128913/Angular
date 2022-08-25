import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndrawDataProcessingSvgComponent } from './undraw-data-processing-svg.component';

describe('UndrawDataProcessingSvgComponent', () => {
  let component: UndrawDataProcessingSvgComponent;
  let fixture: ComponentFixture<UndrawDataProcessingSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndrawDataProcessingSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndrawDataProcessingSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
