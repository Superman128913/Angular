import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PoNumberSvgComponent} from './po-number-svg.component';

describe('PoNumberSvgComponent', () => {
  let component: PoNumberSvgComponent;
  let fixture: ComponentFixture<PoNumberSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoNumberSvgComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoNumberSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
