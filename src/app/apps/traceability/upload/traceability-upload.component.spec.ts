import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraceabilityUploadComponent} from './traceability-upload.component';

describe('TraceabilityUploadComponent', () => {
  let component: TraceabilityUploadComponent;
  let fixture: ComponentFixture<TraceabilityUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraceabilityUploadComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceabilityUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
