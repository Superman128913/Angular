import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraceabilitySettingsComponent} from './traceability-settings.component';

describe('TraceabilitySettingsComponent', () => {
  let component: TraceabilitySettingsComponent;
  let fixture: ComponentFixture<TraceabilitySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraceabilitySettingsComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceabilitySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
