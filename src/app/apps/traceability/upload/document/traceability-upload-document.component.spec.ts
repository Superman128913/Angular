import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraceabilityUploadDocumentComponent} from './traceability-upload-document.component';

describe('TraceabilityUploadDocumentComponent', () => {
  let component: TraceabilityUploadDocumentComponent;
  let fixture: ComponentFixture<TraceabilityUploadDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraceabilityUploadDocumentComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceabilityUploadDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
