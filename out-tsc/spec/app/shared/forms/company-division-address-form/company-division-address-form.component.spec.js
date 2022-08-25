import { TestBed } from '@angular/core/testing';
import { CompanyDivisionAddressFormComponent } from './company-division-address-form.component';
describe('CompanyDivisionAddressFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CompanyDivisionAddressFormComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(CompanyDivisionAddressFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=company-division-address-form.component.spec.js.map