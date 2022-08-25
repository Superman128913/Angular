import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraceabilitySendComponent} from './traceability-send.component';

describe('TraceabilitySendComponent', () => {
  let component: TraceabilitySendComponent;
  let fixture: ComponentFixture<TraceabilitySendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraceabilitySendComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceabilitySendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
