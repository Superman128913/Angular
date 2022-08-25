import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {QuickViewComponent} from '../../modal/quick-view/quick-view.component';
import {CartModalComponent} from '../../modal/cart-modal/cart-modal.component';
import {Product} from '../../../../_future_src_app/shop/product/shared/product.model';
import {ProductService} from '../../../../_future_src_app_services/product.service';

@Component({
    selector: 'app-product-box-three',
    templateUrl: './product-box-three.component.html',
    styleUrls: ['./product-box-three.component.scss']
})
export class ProductBoxThreeComponent implements OnInit {

    @Input() product: Product;
    @Input() currency: any = this.productService.Currency; // Default Currency
    @Input() cartModal = false; // Default False

    @ViewChild('quickView') QuickView: QuickViewComponent;
    @ViewChild('cartModal') CartModal: CartModalComponent;

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
    }

    addToCart(product: any) {
        this.productService.addToCart(product);
    }

    addToWishlist(product: any) {
        this.productService.addToWishlist(product);
    }

    addToCompare(product: any) {
        this.productService.addToCompare(product);
    }

}
