import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceabilitySvgComponent } from './traceability-svg.component';

describe('TraceabilitySvgComponent', () => {
  let component: TraceabilitySvgComponent;
  let fixture: ComponentFixture<TraceabilitySvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceabilitySvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceabilitySvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
