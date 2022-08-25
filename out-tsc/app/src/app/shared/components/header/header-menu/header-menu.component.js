import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let HeaderMenuComponent = class HeaderMenuComponent {
    constructor(router, navServices, apiService, userApiService) {
        this.router = router;
        this.navServices = navServices;
        this.apiService = apiService;
        this.userApiService = userApiService;
        this.navServices.items.subscribe(menuItems => this.menuItems = menuItems);
        this.router.events.subscribe((event) => {
            this.navServices.mainMenuToggle = false;
        });
        if (this.userApiService.currentUserType('ADMIN')) {
            this.navServices.adminitems.subscribe(menuItems => this.menuItems = this.menuItems.concat(menuItems));
        }
        else {
            this.navServices.items.subscribe(menuItems => this.menuItems = menuItems);
        }
    }
    ngOnInit() {
    }
    mainMenuToggle() {
        this.navServices.mainMenuToggle = !this.navServices.mainMenuToggle;
    }
    // Click Toggle menu (Mobile)
    toggleNavActive(item) {
        item.active = !item.active;
    }
};
HeaderMenuComponent = __decorate([
    Component({
        selector: 'app-header-menu',
        templateUrl: './header-menu.component.html',
        styleUrls: ['./header-menu.component.scss']
    })
], HeaderMenuComponent);
export { HeaderMenuComponent };
//# sourceMappingURL=header-menu.component.js.map