"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthGuard = void 0;
// Angular
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var global_constants_1 = require("../shared/global-constants");
var UserAuthGuard = /** @class */ (function () {
    function UserAuthGuard(authTokenService, router) {
        this.authTokenService = authTokenService;
        this.router = router;
    }
    UserAuthGuard.prototype.canActivate = function () {
        var _this = this;
        if (this.authTokenService.userSignedIn()) {
            return this.authTokenService.validateToken().pipe((0, operators_1.map)(function (result) {
                console.log('Token validation result', result);
                if (_this.authTokenService.currentUserData) {
                    console.log('User data', _this.authTokenService.currentUserData);
                    if (_this.authTokenService.currentUserType === 'USER') {
                        // log message
                        console.log('User logged in.');
                        return true;
                    }
                    else {
                        // log message
                        console.log('User not logged in.');
                        // navigate to home
                        _this.router.navigate([global_constants_1.GlobalConstants.homePath]).then(function () {
                            // log message
                            console.log('userAuthGuard navigate completed.');
                        });
                        return false;
                    }
                }
                else {
                    // log message
                    console.log('User not logged in.');
                    // navigate to home
                    _this.router.navigate([global_constants_1.GlobalConstants.homePath]).then(function () {
                        // log message
                        console.log('userAuthGuard navigate completed.');
                    });
                    return false;
                }
            }));
        }
        else {
            // log message
            console.log('User not logged in.');
            // navigate to home
            this.router.navigate([global_constants_1.GlobalConstants.homePath]).then(function () {
                // log message
                console.log('userAuthGuard navigate completed.');
            });
            return false;
        }
    };
    UserAuthGuard = __decorate([
        (0, core_1.Injectable)()
    ], UserAuthGuard);
    return UserAuthGuard;
}());
exports.UserAuthGuard = UserAuthGuard;
