import { TestBed } from '@angular/core/testing';
import { DocumentNameSvgComponent } from './document-name-svg.component';
describe('DocumentNameSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DocumentNameSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(DocumentNameSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=document-name-svg.component.spec.js.map