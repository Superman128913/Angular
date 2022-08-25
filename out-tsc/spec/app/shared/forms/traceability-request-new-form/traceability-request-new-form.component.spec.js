import { TestBed } from '@angular/core/testing';
import { TraceabilityRequestNewFormComponent } from './traceability-request-new-form.component';
describe('TraceabilityRequestNewFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TraceabilityRequestNewFormComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(TraceabilityRequestNewFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=traceability-request-new-form.component.spec.js.map