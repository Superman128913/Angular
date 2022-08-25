import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceabilityReceivedFilesComponent } from './traceability-received-files.component';

describe('TraceabilityReceivedFilesComponent', () => {
  let component: TraceabilityReceivedFilesComponent;
  let fixture: ComponentFixture<TraceabilityReceivedFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceabilityReceivedFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceabilityReceivedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
