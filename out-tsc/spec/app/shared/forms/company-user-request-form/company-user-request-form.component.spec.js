import { TestBed } from '@angular/core/testing';
import { CompanyUserRequestFormComponent } from './company-user-request-form.component';
describe('CompanyUserRequestFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CompanyUserRequestFormComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(CompanyUserRequestFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=company-user-request-form.component.spec.js.map