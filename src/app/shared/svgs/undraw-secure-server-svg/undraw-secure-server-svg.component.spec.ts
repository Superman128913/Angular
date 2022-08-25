import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndrawSecureServerSvgComponent } from './undraw-secure-server-svg.component';

describe('UndrawSecureServerSvgComponent', () => {
  let component: UndrawSecureServerSvgComponent;
  let fixture: ComponentFixture<UndrawSecureServerSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndrawSecureServerSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndrawSecureServerSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
