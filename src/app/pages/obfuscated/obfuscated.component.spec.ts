import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObfuscatedComponent } from './obfuscated.component';

describe('ObfuscatedComponent', () => {
  let component: ObfuscatedComponent;
  let fixture: ComponentFixture<ObfuscatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObfuscatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObfuscatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
