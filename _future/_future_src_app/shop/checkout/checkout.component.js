"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(fb, productService, orderService) {
        this.fb = fb;
        this.productService = productService;
        this.orderService = orderService;
        this.products = [];
        this.payment = 'Stripe';
        this.checkoutForm = this.fb.group({
            firstname: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
            lastname: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
            phone: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]+')]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            address: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(50)]],
            country: ['', forms_1.Validators.required],
            town: ['', forms_1.Validators.required],
            state: ['', forms_1.Validators.required],
            postalcode: ['', forms_1.Validators.required]
        });
    }
    Object.defineProperty(CheckoutComponent.prototype, "getTotal", {
        get: function () {
            return this.productService.cartTotalAmount();
        },
        enumerable: false,
        configurable: true
    });
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.cartItems.subscribe(function (response) { return _this.products = response; });
        this.getTotal.subscribe(function (amount) { return _this.amount = amount; });
        this.initConfig();
    };
    // Stripe Payment Gateway
    CheckoutComponent.prototype.stripeCheckout = function () {
        var _this = this;
        var handler = window.StripeCheckout.configure({
            key: '',
            locale: 'auto',
            token: function (token) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                _this.orderService.createOrder(_this.products, _this.checkoutForm.value, token.id, _this.amount);
            }
        });
        handler.open({
            name: 'Aeroplicity',
            description: 'Online Fashion Store',
            amount: this.amount * 100
        });
    };
    // Paypal Payment Gateway
    CheckoutComponent.prototype.initConfig = function () {
        var _this = this;
        this.payPalConfig = {
            currency: this.productService.Currency.currency,
            clientId: '',
            createOrderOnClient: function (data) { return ({
                intent: 'CAPTURE',
                purchase_units: [{
                        amount: {
                            currency_code: _this.productService.Currency.currency,
                            value: _this.amount,
                            breakdown: {
                                item_total: {
                                    currency_code: _this.productService.Currency.currency,
                                    value: _this.amount
                                }
                            }
                        }
                    }]
            }); },
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                size: 'small',
                shape: 'rect',
            },
            onApprove: function (data, actions) {
                _this.orderService.createOrder(_this.products, _this.checkoutForm.value, data.orderID, _this.getTotal);
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then(function (details) {
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });
            },
            onClientAuthorization: function (data) {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            },
            onCancel: function (data, actions) {
                console.log('OnCancel', data, actions);
            },
            onError: function (err) {
                console.log('OnError', err);
            },
            onClick: function (data, actions) {
                console.log('onClick', data, actions);
            }
        };
    };
    CheckoutComponent = __decorate([
        core_1.Component({
            selector: 'app-checkout',
            templateUrl: './checkout.component.html',
            styleUrls: ['./checkout.component.scss']
        })
    ], CheckoutComponent);
    return CheckoutComponent;
}());
exports.CheckoutComponent = CheckoutComponent;
