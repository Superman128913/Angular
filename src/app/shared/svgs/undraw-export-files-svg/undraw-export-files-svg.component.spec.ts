import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UndrawExportFilesSvgComponent} from './undraw-export-files-svg.component';

describe('UndrawExportFilesSvgComponent', () => {
  let component: UndrawExportFilesSvgComponent;
  let fixture: ComponentFixture<UndrawExportFilesSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UndrawExportFilesSvgComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndrawExportFilesSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
