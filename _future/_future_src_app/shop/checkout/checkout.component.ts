import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';
import {Product} from '../product/shared/product.model';
import {ProductService} from '../../../_future_src_app_services/product.service';
import {OrderService} from '../../../_future_src_app_services/order.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    public checkoutForm: FormGroup;
    public products: Product[] = [];
    public payPalConfig?: IPayPalConfig;
    public payment = 'Stripe';
    public amount: any;

    constructor(private fb: FormBuilder,
                public productService: ProductService,
                private orderService: OrderService) {
        this.checkoutForm = this.fb.group({
            firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
            lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
            phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
            email: ['', [Validators.required, Validators.email]],
            address: ['', [Validators.required, Validators.maxLength(50)]],
            country: ['', Validators.required],
            town: ['', Validators.required],
            state: ['', Validators.required],
            postalcode: ['', Validators.required]
        });
    }

    public get getTotal(): Observable<number> {
        return this.productService.cartTotalAmount();
    }

    ngOnInit(): void {
        this.productService.cartItems.subscribe(response => this.products = response);
        this.getTotal.subscribe(amount => this.amount = amount);
        this.initConfig();
    }

    // Stripe Payment Gateway
    stripeCheckout() {
        const handler = (<any>window).StripeCheckout.configure({
            key: '', // publishble key
            locale: 'auto',
            token: (token: any) => {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                this.orderService.createOrder(this.products, this.checkoutForm.value, token.id, this.amount);
            }
        });
        handler.open({
            name: 'Aeroplicity',
            description: 'Online Fashion Store',
            amount: this.amount * 100
        });
    }

    // Paypal Payment Gateway
    private initConfig(): void {
        this.payPalConfig = {
            currency: this.productService.Currency.currency,
            clientId: '',
            createOrderOnClient: (data) => <ICreateOrderRequest>{
                intent: 'CAPTURE',
                purchase_units: [{
                    amount: {
                        currency_code: this.productService.Currency.currency,
                        value: this.amount,
                        breakdown: {
                            item_total: {
                                currency_code: this.productService.Currency.currency,
                                value: this.amount
                            }
                        }
                    }
                }]
            },
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                size: 'small', // small | medium | large | responsive
                shape: 'rect', // pill | rect
            },
            onApprove: (data, actions) => {
                this.orderService.createOrder(this.products, this.checkoutForm.value, data.orderID, this.getTotal);
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then(details => {
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });
            },
            onClientAuthorization: (data) => {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            },
            onCancel: (data, actions) => {
                console.log('OnCancel', data, actions);
            },
            onError: err => {
                console.log('OnError', err);
            },
            onClick: (data, actions) => {
                console.log('onClick', data, actions);
            }
        };
    }

}
