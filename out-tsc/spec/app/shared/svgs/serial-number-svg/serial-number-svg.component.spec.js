import { TestBed } from '@angular/core/testing';
import { SerialNumberSvgComponent } from './serial-number-svg.component';
describe('SerialNumberSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SerialNumberSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(SerialNumberSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=serial-number-svg.component.spec.js.map