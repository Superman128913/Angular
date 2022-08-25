import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndrawSyncFilesSvgComponent } from './undraw-sync-files-svg.component';

describe('UndrawSyncFilesSvgComponent', () => {
  let component: UndrawSyncFilesSvgComponent;
  let fixture: ComponentFixture<UndrawSyncFilesSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndrawSyncFilesSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndrawSyncFilesSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
