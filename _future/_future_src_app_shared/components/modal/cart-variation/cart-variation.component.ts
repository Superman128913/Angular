import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductService} from "../../../../_future_src_app_services/product.service";
import {Product} from "../../../../_future_src_app/shop/product/shared/product.model";

@Component({
    selector: 'app-cart-variation',
    templateUrl: './cart-variation.component.html',
    styleUrls: ['./cart-variation.component.scss']
})
export class CartVariationComponent implements OnInit, OnDestroy {

    @Input() direction: string = 'right'; // Default Direction Right

    public products: Product[] = [];

    constructor(public productService: ProductService) {
        this.productService.cartItems.subscribe(response => this.products = response);
    }

    get getTotal(): Observable<number> {
        return this.productService.cartTotalAmount();
    }

    ngOnInit(): void {
        this.productService.OpenCart = false;
    }

    closeCart() {
        this.productService.OpenCart = false;
    }

    removeItem(product: any) {
        this.productService.removeCartItem(product);
    }

    ngOnDestroy(): void {
        this.closeCart();
    }

}
