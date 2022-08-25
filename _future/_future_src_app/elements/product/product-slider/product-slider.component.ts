import {Component, OnInit} from '@angular/core';
import {ProductSlider} from '../../../../_future_src_app_shared/data/slider';
import {Product} from '../../../shop/product/shared/product.model';
import {ProductService} from '../../../../_future_src_app_services/product.service';

@Component({
    selector: 'app-product-slider',
    templateUrl: './product-slider.component.html',
    styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {

    public products: Product[] = [];

    public ProductSliderConfig: any = ProductSlider;

    constructor(public productService: ProductService) {
        this.productService.getProducts.subscribe(response => this.products = response);
    }

    ngOnInit(): void {
    }

}
