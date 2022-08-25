// Angular
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
// Application
import {HeaderNavigationTopComponent} from './header-navigation-top.component';

describe('NavigationTopComponent', () => {
    let component: HeaderNavigationTopComponent;
    let fixture: ComponentFixture<HeaderNavigationTopComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderNavigationTopComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderNavigationTopComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
