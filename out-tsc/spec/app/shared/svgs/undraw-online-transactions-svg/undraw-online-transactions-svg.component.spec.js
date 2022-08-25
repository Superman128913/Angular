import { TestBed } from '@angular/core/testing';
import { UndrawOnlineTransactionsSvgComponent } from './undraw-online-transactions-svg.component';
describe('UndrawOnlineTransactionsSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UndrawOnlineTransactionsSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UndrawOnlineTransactionsSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=undraw-online-transactions-svg.component.spec.js.map