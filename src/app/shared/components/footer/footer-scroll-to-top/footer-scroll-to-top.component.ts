// Angular
import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
    selector: 'app-footer-scroll-to-top',
    templateUrl: './footer-scroll-to-top.component.html',
    styleUrls: ['./footer-scroll-to-top.component.scss']
})
export class FooterScrollToTopComponent implements OnInit {

    constructor(private viewScroller: ViewportScroller) {
    }

    // Function to scroll to top of page
    scrollToTop() {
        this.viewScroller.scrollToPosition([0, 0]);
    }

    ngOnInit(): void {
    }

}
