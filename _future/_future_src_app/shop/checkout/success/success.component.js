"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessComponent = void 0;
var core_1 = require("@angular/core");
var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(productService, orderService) {
        this.productService = productService;
        this.orderService = orderService;
        this.orderDetails = {};
    }
    SuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.checkoutItems.subscribe(function (response) { return _this.orderDetails = response; });
    };
    SuccessComponent.prototype.ngAfterViewInit = function () {
    };
    SuccessComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-success',
            templateUrl: './success.component.html',
            styleUrls: ['./success.component.scss']
        })
    ], SuccessComponent);
    return SuccessComponent;
}());
exports.SuccessComponent = SuccessComponent;
