import { TestBed } from '@angular/core/testing';
import { CompanyDomainFormComponent } from './company-domain-form.component';
describe('CompanyDomainFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CompanyDomainFormComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(CompanyDomainFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=company-domain-form.component.spec.js.map