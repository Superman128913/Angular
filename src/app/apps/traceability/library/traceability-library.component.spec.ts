import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraceabilityLibraryComponent} from './traceability-library.component';

describe('TraceabilityLibraryComponent', () => {
  let component: TraceabilityLibraryComponent;
  let fixture: ComponentFixture<TraceabilityLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraceabilityLibraryComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceabilityLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
