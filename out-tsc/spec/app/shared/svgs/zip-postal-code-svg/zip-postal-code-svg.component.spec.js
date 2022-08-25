import { TestBed } from '@angular/core/testing';
import { ZipPostalCodeSvgComponent } from './zip-postal-code-svg.component';
describe('ZipPostalCodeSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ZipPostalCodeSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(ZipPostalCodeSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=zip-postal-code-svg.component.spec.js.map