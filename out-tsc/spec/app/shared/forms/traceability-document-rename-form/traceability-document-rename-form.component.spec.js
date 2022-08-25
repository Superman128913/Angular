import { TestBed } from '@angular/core/testing';
import { TraceabilityDocumentRenameFormComponent } from './traceability-document-rename-form.component';
describe('TraceabilityDocumentRenameFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TraceabilityDocumentRenameFormComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(TraceabilityDocumentRenameFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=traceability-document-rename-form.component.spec.js.map