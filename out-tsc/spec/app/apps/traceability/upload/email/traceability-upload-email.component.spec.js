import { TestBed } from '@angular/core/testing';
import { TraceabilityUploadEmailComponent } from './traceability-upload-email.component';
describe('TraceabilityUploadEmailComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TraceabilityUploadEmailComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(TraceabilityUploadEmailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=traceability-upload-email.component.spec.js.map