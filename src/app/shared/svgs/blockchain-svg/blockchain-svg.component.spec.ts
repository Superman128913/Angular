import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BlockchainSvgComponent} from './blockchain-svg.component';

describe('BlockchainComponent', () => {
  let component: BlockchainSvgComponent;
  let fixture: ComponentFixture<BlockchainSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockchainSvgComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
