import { TestBed } from '@angular/core/testing';
import { TraceabilityDevToolsComponent } from './traceability-dev-tools.component';
describe('TraceabilityDevToolsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TraceabilityDevToolsComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(TraceabilityDevToolsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=traceability-dev-tools.component.spec.js.map