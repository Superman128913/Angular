import { TestBed, waitForAsync } from '@angular/core/testing';
import { AuthorizedSliderComponent } from './authorized-slider.component';
describe('AuthorizedSliderComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AuthorizedSliderComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorizedSliderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=authorized-slider.component.spec.js.map