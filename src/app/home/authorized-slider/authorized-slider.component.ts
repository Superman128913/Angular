// Angular
import {Component, OnInit} from '@angular/core';
// Libraries
// Application

@Component({
    selector: 'app-authorized-slider',
    templateUrl: './authorized-slider.component.html',
    styleUrls: ['./authorized-slider.component.scss']
})
export class AuthorizedSliderComponent implements OnInit {

    public images = [{
        thumbImage: 'assets/demo/authorized-slider-1.png',
    }, {
        thumbImage: 'assets/demo/authorized-slider-2.png',
    }, {
        thumbImage: 'assets/demo/authorized-slider-3.png',
    }, {
        thumbImage: 'assets/demo/authorized-slider-1.png',
    }, {
        thumbImage: 'assets/demo/authorized-slider-2.png',
    }, {
        thumbImage: 'assets/demo/authorized-slider-3.png',
    }, {
        thumbImage: 'assets/demo/authorized-slider-1.png',
    }, {
        thumbImage: 'assets/demo/authorized-slider-2.png',
    }, {
        thumbImage: 'assets/demo/authorized-slider-3.png',
    }];
    public infinite = true;
    public imageSize = {
        space: 12.5
    };
    public manageImageRatio = true;
    public imagePopup = false;
    public autoSlide = {
        interval: 1,
        stopOnHover: false
    };
    public showArrow = false;

    constructor() {
    }

    ngOnInit(): void {
    }

}
