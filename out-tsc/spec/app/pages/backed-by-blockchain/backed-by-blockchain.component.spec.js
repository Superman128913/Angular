import { TestBed } from '@angular/core/testing';
import { BackedByBlockchainComponent } from './backed-by-blockchain.component';
describe('BackedByBlockchainComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BackedByBlockchainComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(BackedByBlockchainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=backed-by-blockchain.component.spec.js.map