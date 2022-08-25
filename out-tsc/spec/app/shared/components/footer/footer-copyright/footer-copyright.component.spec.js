import { TestBed, waitForAsync } from '@angular/core/testing';
import { FooterCopyrightComponent } from './footer-copyright.component';
describe('FooterCopyrightComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FooterCopyrightComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FooterCopyrightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=footer-copyright.component.spec.js.map