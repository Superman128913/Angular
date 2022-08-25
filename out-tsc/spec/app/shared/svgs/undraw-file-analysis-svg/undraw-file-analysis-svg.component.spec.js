import { TestBed } from '@angular/core/testing';
import { UndrawFileAnalysisSvgComponent } from './undraw-file-analysis-svg.component';
describe('UndrawFileAnalysisSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UndrawFileAnalysisSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UndrawFileAnalysisSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=undraw-file-analysis-svg.component.spec.js.map