import { TestBed } from '@angular/core/testing';
import { CompanyUserInviteFormComponent } from './company-user-invite-form.component';
describe('CompanyUserInviteFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CompanyUserInviteFormComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(CompanyUserInviteFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=company-user-invite-form.component.spec.js.map