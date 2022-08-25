import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { GlobalConstants } from '../../../global-constants';
let HeaderNavigationTopComponent = class HeaderNavigationTopComponent {
    constructor(userApiService, userStorageService) {
        this.userApiService = userApiService;
        this.userStorageService = userStorageService;
        // logo
        this.invertedLogo = GlobalConstants.invertedWordmark;
        this.shortLogo = GlobalConstants.defaultLogo;
        // message
        this.message = '';
        // paths
        this.homePath = GlobalConstants.homePath;
        this.companyPath = GlobalConstants.companyPath;
        this.userPath = GlobalConstants.userPath;
        this.registerPath = GlobalConstants.registerPath;
        this.signInPath = GlobalConstants.signInPath;
        // this.user = this.localStorage.retrieve('user');
        // this.generateMessage();
    }
    ngOnInit() {
    }
    generateMessage() {
        // set message for display
        if (this.user.firstName !== undefined) {
            this.message = 'Hello ' + this.user.firstName;
        }
        else {
            this.message = '';
        }
    }
};
HeaderNavigationTopComponent = __decorate([
    Component({
        selector: 'app-header-navigation-top',
        templateUrl: './header-navigation-top.component.html',
        styleUrls: ['./header-navigation-top.component.scss']
    })
], HeaderNavigationTopComponent);
export { HeaderNavigationTopComponent };
//# sourceMappingURL=header-navigation-top.component.js.map