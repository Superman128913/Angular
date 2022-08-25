import { TestBed } from '@angular/core/testing';
import { UserResetPasswordFormComponent } from './user-reset-password-form.component';
describe('UserResetPasswordFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserResetPasswordFormComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserResetPasswordFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-reset-password-form.component.spec.js.map