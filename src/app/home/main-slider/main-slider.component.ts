// Angular
import {Component, OnInit} from '@angular/core';
// Libraries
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

// Application

@Component({
    selector: 'app-main-slider',
    templateUrl: './main-slider.component.html',
    styleUrls: ['./main-slider.component.scss'],
    providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class MainSliderComponent implements OnInit {

    public slides = [
        {
            imagePath: 'assets/main-slider/main-slider-2.jpg',
            imageAlt: '',
            imageTitle: '',
            pitch: 'Provide full material disclosure to your customers or request it from your suppliers'
        }
        // {
        //     path: 'assets/main-slider/main-slider-2.jpg',
        //     alt: '',
        //     title: ''
        // }
    ];

    constructor(config: NgbCarouselConfig) {
        config.animation = true;
        config.interval = 10000; // ms
        config.keyboard = true;
        config.pauseOnFocus = false;
        config.pauseOnHover = false;
        config.showNavigationArrows = false;
        config.showNavigationIndicators = false;
        config.wrap = true;
    }

    ngOnInit(): void {
    }

}
