"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderNavigationTopComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var global_constants_1 = require("../../../global-constants");
var HeaderNavigationTopComponent = /** @class */ (function () {
    function HeaderNavigationTopComponent(userApiService, storageService) {
        this.userApiService = userApiService;
        this.storageService = storageService;
        // logo
        this.invertedLogo = global_constants_1.GlobalConstants.invertedWordmark;
        this.shortLogo = global_constants_1.GlobalConstants.defaultLogo;
        // paths
        this.homePath = global_constants_1.GlobalConstants.homePath;
        this.companyPath = global_constants_1.GlobalConstants.companyPath;
        this.userPath = global_constants_1.GlobalConstants.userPath;
        this.registerPath = global_constants_1.GlobalConstants.registerPath;
        this.signInPath = global_constants_1.GlobalConstants.signInPath;
        // this.user = this.localStorage.retrieve('user');
        // this.generateMessage();
    }
    HeaderNavigationTopComponent.prototype.ngOnInit = function () {
    };
    HeaderNavigationTopComponent.prototype.generateMessage = function () {
        // set message for display
        if (this.user.firstName !== undefined) {
            this.message = 'Hello ' + this.user.firstName;
        }
        else {
            this.message = '';
        }
    };
    HeaderNavigationTopComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-header-navigation-top',
            templateUrl: './header-navigation-top.component.html',
            styleUrls: ['./header-navigation-top.component.scss']
        })
    ], HeaderNavigationTopComponent);
    return HeaderNavigationTopComponent;
}());
exports.HeaderNavigationTopComponent = HeaderNavigationTopComponent;
