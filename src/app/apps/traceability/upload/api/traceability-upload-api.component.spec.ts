import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraceabilityUploadApiComponent} from './traceability-upload-api.component';

describe('TraceabilityUploadApiComponent', () => {
  let component: TraceabilityUploadApiComponent;
  let fixture: ComponentFixture<TraceabilityUploadApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraceabilityUploadApiComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceabilityUploadApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
