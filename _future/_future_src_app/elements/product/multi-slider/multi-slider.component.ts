import {Component, OnInit} from '@angular/core';
import {ProductOneSlider} from '../../../../_future_src_app_shared/data/slider';
import {Product} from '../../../shop/product/shared/product.model';
import {ProductService} from '../../../../_future_src_app_services/product.service';

@Component({
    selector: 'app-multi-slider',
    templateUrl: './multi-slider.component.html',
    styleUrls: ['./multi-slider.component.scss']
})
export class MultiSliderComponent implements OnInit {

    public products: Product[] = [];

    public ProductSliderOneConfig: any = ProductOneSlider;

    constructor(public productService: ProductService) {
        this.productService.getProducts.subscribe(response =>
            this.products = response.filter(item => item.type == 'bags')
        );
    }

    ngOnInit(): void {
    }

}
