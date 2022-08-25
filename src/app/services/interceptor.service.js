"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterceptorService = void 0;
// Angular
var core_1 = require("@angular/core");
// Libraries
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var InterceptorService = /** @class */ (function () {
    function InterceptorService(notificationService) {
        this.notificationService = notificationService;
    }
    InterceptorService.prototype.intercept = function (request, next) {
        return next.handle(request).pipe((0, operators_1.retry)(1), (0, operators_1.catchError)(function (error) {
            // let type = '';
            // let message = '';
            // const title = '';
            //
            // // gather error information
            // if (error.error instanceof ErrorEvent) {
            //     // error type
            //     type = 'error';
            //     // client-side error
            //     message = error.error.message;
            // } else if (error.status === 422) {
            //     // error type
            //     type = 'warning';
            //     // server-side error
            //     // email has already been taken
            //     message = error.error.errors.full_messages + ', please sign in.';
            //     // store email in session storage
            //     this.sessionStorage.store('email', registrationEmail);
            //     // navigate to sign in
            //     this.router.navigate([GlobalConstants.signInPath]).then(() => {
            //         // log completion
            //         console.log('registerUser navigate completed.');
            //     });
            // } else if (error.status === 500) {
            //     // error type
            //     type = 'error';
            //     // server-side error
            //     // email has already been taken
            //     message = 'Congratulations, you broke it! A team of our best engineers have commandeered a ' +
            //         'refurbished Concorde and headed to the cloud to investigate.';
            //     // navigate to sign in
            //     this.router.navigate([GlobalConstants.signInPath]).then(() => {
            //         // log completion
            //         console.log('registerUser navigate completed.');
            //     });
            // } else {
            //     // error type
            //     type = 'error';
            //     // server-side error
            //     message = error.error.errors.full_messages;
            // }
            //
            // // pop toastr message
            // this.notificationService.toasterNotification(type, message, title);
            //
            // log error
            console.log(error);
            // throw error
            return (0, rxjs_1.throwError)(error);
        }));
    };
    InterceptorService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], InterceptorService);
    return InterceptorService;
}());
exports.InterceptorService = InterceptorService;
