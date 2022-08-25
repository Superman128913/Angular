import { TestBed } from '@angular/core/testing';
import { TraceabilityDocumentUploadFormComponent } from './traceability-document-upload-form.component';
describe('TraceabilityDocumentUploadFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TraceabilityDocumentUploadFormComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(TraceabilityDocumentUploadFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=traceability-document-upload-form.component.spec.js.map