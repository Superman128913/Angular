import { TestBed } from '@angular/core/testing';
import { DunsNumberSvgComponent } from './duns-number-svg.component';
describe('DunsNumberSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DunsNumberSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(DunsNumberSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=duns-number-svg.component.spec.js.map