import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductDetailsMainSlider, ProductDetailsThumbSlider} from '../../../../../_future_src_app_shared/data/slider';
import {Product} from '../../shared/product.model';
import {ProductService} from '../../../../../_future_src_app_services/product.service';
import {SizeModalComponent} from '../../../../../_future_src_app_shared/components/modal/size-modal/size-modal.component';
import {HttpHelperApiService} from '../../../../../../src/app/services/api/http-helper-api.service';
import {UserApiService} from '../../../../../../src/app/services/api/user-api.service';

@Component({
    selector: 'app-product-left-sidebar',
    templateUrl: './product-left-sidebar.component.html',
    styleUrls: ['./product-left-sidebar.component.scss']
})
export class ProductLeftSidebarComponent implements OnInit {

    public product: Product = {};
    public counter = 1;
    public activeSlide: any = 0;
    public selectedSize: any;
    public mobileSidebar = false;

    public first_name;
    public last_name;
    public email;

    @ViewChild('sizeChart') SizeChart: SizeModalComponent;

    public ProductDetailsMainSliderConfig: any = ProductDetailsMainSlider;
    public ProductDetailsThumbConfig: any = ProductDetailsThumbSlider;

    constructor(private route: ActivatedRoute,
                private router: Router,
                public productService: ProductService,
                public httpHelperApiService: HttpHelperApiService,
                public userApiService: UserApiService) {
        this.route.data.subscribe(response => this.product = response.data);


        const currentUserData = this.userApiService.currentUserData();
        if (currentUserData) {
            var user_id = currentUserData.id;
            this.email = currentUserData.uid;
        }
        if (user_id) {
            const url = 'user_profiles/' + user_id;
            let user_profile;

            this.httpHelperApiService.get(url).subscribe((res) => {
                //Show in console
                console.log('Profile: ', res);
                //Set local variables
                user_profile = res;
                this.first_name = user_profile.first_name;
                this.last_name = user_profile.last_name;
            });
        }
        console.log(user_id);
    }

    ngOnInit(): void {
    }

    // Get Product Color
    Color(variants) {
        const uniqColor = [];
        for (let i = 0; i < Object.keys(variants).length; i++) {
            if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
                uniqColor.push(variants[i].color);
            }
        }
        return uniqColor;
    }

    // Get Product Size
    Size(variants) {
        const uniqSize = [];
        for (let i = 0; i < Object.keys(variants).length; i++) {
            if (uniqSize.indexOf(variants[i].size) === -1 && variants[i].size) {
                uniqSize.push(variants[i].size);
            }
        }
        return uniqSize;
    }

    selectSize(size) {
        this.selectedSize = size;
    }

    // Increament
    increment() {
        this.counter++;
    }

    // Decrement
    decrement() {
        if (this.counter > 1) {
            this.counter--;
        }
    }

    // Add to cart
    async addToCart(product: any) {
        product.quantity = this.counter || 1;
        const status = await this.productService.addToCart(product);
        if (status) {
            this.router.navigate(['/shop/cart']);
        }
    }

    // Buy Now
    async buyNow(product: any) {
        product.quantity = this.counter || 1;
        const status = await this.productService.addToCart(product);
        if (status) {
            this.router.navigate(['/shop/checkout']);
        }
    }

    // Add to Wishlist
    addToWishlist(product: any) {
        this.productService.addToWishlist(product);
    }

    // Toggle Mobile Sidebar
    toggleMobileSidebar() {
        this.mobileSidebar = !this.mobileSidebar;
    }

}
