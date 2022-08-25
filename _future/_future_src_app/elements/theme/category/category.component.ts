import {Component, OnInit} from '@angular/core';
import {CategorySlider} from '../../../../_future_src_app_shared/data/slider';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    public CategorySliderConfig: any = CategorySlider;

    constructor() {
    }

    ngOnInit(): void {
    }

}
