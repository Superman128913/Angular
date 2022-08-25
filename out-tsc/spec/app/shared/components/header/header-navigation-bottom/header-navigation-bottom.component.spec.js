// Angular
import { TestBed, waitForAsync } from '@angular/core/testing';
// Application
import { HeaderNavigationBottomComponent } from './header-navigation-bottom.component';
describe('NavigationBottomComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderNavigationBottomComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderNavigationBottomComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=header-navigation-bottom.component.spec.js.map