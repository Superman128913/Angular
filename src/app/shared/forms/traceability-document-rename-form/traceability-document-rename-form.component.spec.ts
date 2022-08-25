import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraceabilityDocumentRenameFormComponent} from './traceability-document-rename-form.component';

describe('TraceabilityDocumentRenameFormComponent', () => {
  let component: TraceabilityDocumentRenameFormComponent;
  let fixture: ComponentFixture<TraceabilityDocumentRenameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraceabilityDocumentRenameFormComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceabilityDocumentRenameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
