import {Component, OnInit} from '@angular/core';
import {Product} from '../../../_future_src_app/shop/product/shared/product.model';
import {ProductService} from '../../../_future_src_app_services/product.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    public products: Product[] = [];
    public collapse: boolean = true;

    constructor(public productService: ProductService) {
        this.productService.getProducts.subscribe(product => this.products = product);
    }

    get filterbyCategory() {
        const category = [...new Set(this.products.map(product => product.type))];
        return category
    }

    ngOnInit(): void {
    }

}
