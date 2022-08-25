import { TestBed } from '@angular/core/testing';
import { UserChangePasswordFormComponent } from './user-change-password-form.component';
describe('UserChangePasswordFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserChangePasswordFormComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UserChangePasswordFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-change-password-form.component.spec.js.map