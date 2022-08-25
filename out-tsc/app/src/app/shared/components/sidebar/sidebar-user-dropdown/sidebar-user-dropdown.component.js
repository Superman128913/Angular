import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { GlobalConstants } from '../../../global-constants';
let SidebarUserDropdownComponent = class SidebarUserDropdownComponent {
    constructor(userApiService, userStorageService) {
        this.userApiService = userApiService;
        this.userStorageService = userStorageService;
        this.userProfilePath = GlobalConstants.userProfilePath;
        // set user variables
        this.fullName = this.userStorageService.getUserFullName();
        this.email = this.userStorageService.getUserEmail();
    }
    ngOnInit() {
    }
    /** Public **/
    signOutUser() {
        this.userApiService.signOutUser();
    }
};
SidebarUserDropdownComponent = __decorate([
    Component({
        selector: 'app-sidebar-user-dropdown',
        templateUrl: './sidebar-user-dropdown.component.html',
        styleUrls: ['./sidebar-user-dropdown.component.scss']
    })
], SidebarUserDropdownComponent);
export { SidebarUserDropdownComponent };
//# sourceMappingURL=sidebar-user-dropdown.component.js.map