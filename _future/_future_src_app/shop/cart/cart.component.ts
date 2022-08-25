import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductService} from "../../../_future_src_app_services/product.service";
import {Product} from "../product/shared/product.model";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    public products: Product[] = [];

    constructor(public productService: ProductService) {
        this.productService.cartItems.subscribe(response => this.products = response);
    }

    public get getTotal(): Observable<number> {
        return this.productService.cartTotalAmount();
    }

    ngOnInit(): void {
    }

    // Increament
    increment(product, qty = 1) {
        this.productService.updateCartQuantity(product, qty);
    }

    // Decrement
    decrement(product, qty = -1) {
        this.productService.updateCartQuantity(product, qty);
    }

    public removeItem(product: any) {
        this.productService.removeCartItem(product);
    }

}
