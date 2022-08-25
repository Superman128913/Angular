import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {FooterScrollToTopComponent} from './footer-scroll-to-top.component';

describe('FooterScrollToTopComponent', () => {
    let component: FooterScrollToTopComponent;
    let fixture: ComponentFixture<FooterScrollToTopComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FooterScrollToTopComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterScrollToTopComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
