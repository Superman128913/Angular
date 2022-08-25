import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceabilityRequestCompleteComponent } from './traceability-request-complete.component';

describe('TraceabilityRequestCompleteComponent', () => {
  let component: TraceabilityRequestCompleteComponent;
  let fixture: ComponentFixture<TraceabilityRequestCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceabilityRequestCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceabilityRequestCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
