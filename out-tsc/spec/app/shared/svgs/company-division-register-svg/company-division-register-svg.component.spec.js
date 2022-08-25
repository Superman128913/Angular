import { TestBed } from '@angular/core/testing';
import { CompanyDivisionRegisterSvgComponent } from './company-division-register-svg.component';
describe('CompanyDivisionRegisterSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CompanyDivisionRegisterSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(CompanyDivisionRegisterSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=company-division-register-svg.component.spec.js.map