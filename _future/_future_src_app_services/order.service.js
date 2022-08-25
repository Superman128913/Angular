"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var state = {
    checkoutItems: JSON.parse(localStorage['checkoutItems'] || '[]')
};
var OrderService = /** @class */ (function () {
    function OrderService(router) {
        this.router = router;
    }
    Object.defineProperty(OrderService.prototype, "checkoutItems", {
        // Get Checkout Items
        get: function () {
            var itemsStream = new rxjs_1.Observable(function (observer) {
                observer.next(state.checkoutItems);
                observer.complete();
            });
            return itemsStream;
        },
        enumerable: false,
        configurable: true
    });
    // Create order
    OrderService.prototype.createOrder = function (product, details, orderId, amount) {
        var item = {
            shippingDetails: details,
            product: product,
            orderId: orderId,
            totalAmount: amount
        };
        state.checkoutItems = item;
        localStorage.setItem("checkoutItems", JSON.stringify(item));
        localStorage.removeItem("cartItems");
        this.router.navigate(['/shop/checkout/success', orderId]);
    };
    OrderService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
