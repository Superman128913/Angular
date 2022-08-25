import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {ProductService} from '../../_future_src_app_services/product.service';
import {Product} from '../../_future_src_app/shop/product/shared/product.model';


@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    public products: Product[] = [];
    public search = false;

    public languages = [{
        name: 'English',
        code: 'en'
    }, {
        name: 'French',
        code: 'fr'
    }];

    public currencies = [{
        name: 'Euro',
        currency: 'EUR',
        price: 0.90 // price of euro
    }, {
        name: 'Rupees',
        currency: 'INR',
        price: 70.93 // price of inr
    }, {
        name: 'Pound',
        currency: 'GBP',
        price: 0.78 // price of euro
    }, {
        name: 'Dollar',
        currency: 'USD',
        price: 1 // price of usd
    }];

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
                private translate: TranslateService,
                public productService: ProductService) {
        this.productService.cartItems.subscribe(response => this.products = response);
    }

    get getTotal(): Observable<number> {
        return this.productService.cartTotalAmount();
    }

    ngOnInit(): void {
    }

    searchToggle() {
        this.search = !this.search;
    }

    changeLanguage(code) {
        if (isPlatformBrowser(this.platformId)) {
            this.translate.use(code);
        }
    }

    removeItem(product: any) {
        this.productService.removeCartItem(product);
    }

    changeCurrency(currency: any) {
        this.productService.Currency = currency;
    }

}
