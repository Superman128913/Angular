import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneSvgComponent } from './telephone-svg.component';

describe('TelephoneSvgComponent', () => {
  let component: TelephoneSvgComponent;
  let fixture: ComponentFixture<TelephoneSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
