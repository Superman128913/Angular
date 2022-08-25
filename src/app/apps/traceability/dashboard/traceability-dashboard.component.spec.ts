import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraceabilityDashboardComponent} from './traceability-dashboard.component';

describe('TraceabilityDashboardComponent', () => {
  let component: TraceabilityDashboardComponent;
  let fixture: ComponentFixture<TraceabilityDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraceabilityDashboardComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceabilityDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
