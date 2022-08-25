import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AuthorizedSliderComponent} from './authorized-slider.component';

describe('AuthorizedSliderComponent', () => {
    let component: AuthorizedSliderComponent;
    let fixture: ComponentFixture<AuthorizedSliderComponent>;

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
