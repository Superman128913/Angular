import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceabilityRequestNewComponent } from './traceability-request-new.component';

describe('TraceabilityRequestNewComponent', () => {
  let component: TraceabilityRequestNewComponent;
  let fixture: ComponentFixture<TraceabilityRequestNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceabilityRequestNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceabilityRequestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
