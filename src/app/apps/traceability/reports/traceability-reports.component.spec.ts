import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraceabilityReportsComponent} from './traceability-reports.component';

describe('TraceabilityReportsComponent', () => {
  let component: TraceabilityReportsComponent;
  let fixture: ComponentFixture<TraceabilityReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraceabilityReportsComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceabilityReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
