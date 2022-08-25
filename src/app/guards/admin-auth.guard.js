"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAuthGuard = void 0;
// Angular
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var global_constants_1 = require("../shared/global-constants");
var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(authTokenService, router, loggerService) {
        this.authTokenService = authTokenService;
        this.router = router;
        this.loggerService = loggerService;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        var _this = this;
        if (this.authTokenService.userSignedIn()) {
            return this.authTokenService.validateToken().pipe((0, operators_1.map)(function (result) {
                // log data
                _this.loggerService.debug('adminAuthGuard', 'canActivate()', 'result', result);
                if (_this.authTokenService.currentUserData) {
                    // log data
                    _this.loggerService.debug('adminAuthGuard', 'canActivate()', 'currentUserType', _this.authTokenService.currentUserType);
                    if (_this.authTokenService.currentUserType === 'ADMIN') {
                        // log message
                        _this.loggerService.info('adminAuthGuard', 'canActivate()', 'admin', 'logged in');
                        return true;
                    }
                    else {
                        // log message
                        _this.loggerService.info('adminAuthGuard', 'canActivate()', 'admin', 'not logged in');
                        // navigate to home
                        _this.router.navigate([global_constants_1.GlobalConstants.homePath]).then(function () {
                            // log message
                            _this.loggerService.info('adminAuthGuard', 'canActivate()', 'navigate', '');
                        });
                        return false;
                    }
                }
                else {
                    // log message
                    _this.loggerService.info('adminAuthGuard', 'canActivate()', 'admin', 'not logged in');
                    // navigate to home
                    _this.router.navigate([global_constants_1.GlobalConstants.homePath]).then(function () {
                        // log message
                        _this.loggerService.info('adminAuthGuard', 'canActivate()', 'navigate', '');
                    });
                    return false;
                }
            }));
        }
        else {
            // log message
            this.loggerService.info('adminAuthGuard', 'canActivate()', 'user', 'not logged in');
            // navigate to home
            this.router.navigate([global_constants_1.GlobalConstants.homePath]).then(function () {
                // log message
                _this.loggerService.info('adminAuthGuard', 'canActivate()', 'navigate', '');
            });
            return false;
        }
    };
    AdminAuthGuard = __decorate([
        (0, core_1.Injectable)()
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());
exports.AdminAuthGuard = AdminAuthGuard;
