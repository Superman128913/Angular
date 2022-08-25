import { TestBed } from '@angular/core/testing';
import { UndrawContentStructureSvgComponent } from './undraw-content-structure-svg.component';
describe('UndrawContentStructureSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UndrawContentStructureSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UndrawContentStructureSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=undraw-content-structure-svg.component.spec.js.map