import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceabilityShareFormComponent } from './traceability-share-form.component';

describe('TraceabilityShareFormComponent', () => {
  let component: TraceabilityShareFormComponent;
  let fixture: ComponentFixture<TraceabilityShareFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceabilityShareFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceabilityShareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
