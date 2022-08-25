import { TestBed } from '@angular/core/testing';
import { PasswordVisibleSvgComponent } from './password-visible-svg.component';
describe('PasswordVisibleSvgComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PasswordVisibleSvgComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordVisibleSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=password-visible-svg.component.spec.js.map