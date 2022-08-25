"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var ConfirmationComponent = /** @class */ (function () {
    function VerifyComponent(userApiService, activatedRoute, loggerService) {
        this.userApiService = userApiService;
        this.activatedRoute = activatedRoute;
        this.loggerService = loggerService;
    }

    VerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get confirmation token from activated route
        this.activatedRoute.queryParams.subscribe(function (params) {
            // get confirmation token
            var confirmationToken = params.confirmation_token;
            if (confirmationToken) {
                // log confirmation token
                _this.loggerService.debug('verifyComponent ', 'ngOnInit', 'confirmationToken: ', confirmationToken);
                // confirmation email
                _this.userApiService.verifyUserEmail(confirmationToken);
            }
        });
    };
    VerifyComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-confirmation',
            templateUrl: './confirmation.component.html',
            styleUrls: ['./confirmation.component.scss']
        })
    ], VerifyComponent);
    return VerifyComponent;
}());
exports.VerifyComponent = ConfirmationComponent;
