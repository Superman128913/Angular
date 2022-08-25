"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderMenuComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var HeaderMenuComponent = /** @class */ (function () {
    function HeaderMenuComponent(router, navServices, apiService, userApiService) {
        var _this = this;
        this.router = router;
        this.navServices = navServices;
        this.apiService = apiService;
        this.userApiService = userApiService;
        this.navServices.items.subscribe(function (menuItems) { return _this.menuItems = menuItems; });
        this.router.events.subscribe(function (event) {
            _this.navServices.mainMenuToggle = false;
        });
        if (this.userApiService.currentUserType('ADMIN')) {
            this.navServices.adminitems.subscribe(function (menuItems) { return _this.menuItems = _this.menuItems.concat(menuItems); });
        }
        else {
            this.navServices.items.subscribe(function (menuItems) { return _this.menuItems = menuItems; });
        }
    }
    HeaderMenuComponent.prototype.ngOnInit = function () {
    };
    HeaderMenuComponent.prototype.mainMenuToggle = function () {
        this.navServices.mainMenuToggle = !this.navServices.mainMenuToggle;
    };
    // Click Toggle topbarMenuItems (Mobile)
    HeaderMenuComponent.prototype.toggleNavActive = function (item) {
        item.active = !item.active;
    };
    HeaderMenuComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-header-topbarMenuItems',
            templateUrl: './header-menu.component.html',
            styleUrls: ['./header-menu.component.scss']
        })
    ], HeaderMenuComponent);
    return HeaderMenuComponent;
}());
exports.HeaderMenuComponent = HeaderMenuComponent;
