import { TestBed } from '@angular/core/testing';
import { TraceabilityRequestOpenComponent } from './traceability-request-open.component';
describe('TraceabilityRequestOpenComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TraceabilityRequestOpenComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(TraceabilityRequestOpenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=traceability-request-open.component.spec.js.map