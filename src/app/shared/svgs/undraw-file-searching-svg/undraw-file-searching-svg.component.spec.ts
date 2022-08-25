import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UndrawFileSearchingSvgComponent} from './undraw-file-searching-svg.component';

describe('UndrawFileSearchingSvgComponent', () => {
  let component: UndrawFileSearchingSvgComponent;
  let fixture: ComponentFixture<UndrawFileSearchingSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UndrawFileSearchingSvgComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndrawFileSearchingSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
