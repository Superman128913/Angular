import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndrawFileSyncSvgComponent } from './undraw-file-sync-svg.component';

describe('UndrawFileSyncSvgComponent', () => {
  let component: UndrawFileSyncSvgComponent;
  let fixture: ComponentFixture<UndrawFileSyncSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndrawFileSyncSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndrawFileSyncSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
