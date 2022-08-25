import { TestBed } from '@angular/core/testing';
import { AddressDetailsSvgComponent } from './address-details-svg.component';
describe('AddressDetailsSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddressDetailsSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(AddressDetailsSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=address-details-svg.component.spec.js.map