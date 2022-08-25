"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyApiService = void 0;
// Angular
var core_1 = require("@angular/core");
// Libraries
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var global_constants_1 = require("../../shared/global-constants");
var CompanyApiService = /** @class */ (function () {
    function CompanyApiService(router, storageService, httpHelperApiService, notificationService, loggerService) {
        this.router = router;
        this.storageService = storageService;
        this.httpHelperApiService = httpHelperApiService;
        this.notificationService = notificationService;
        this.loggerService = loggerService;
    }
    /** Company **/
    // register company
    CompanyApiService.prototype.registerCompany = function (companyRegistrationFormValue) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log company registration form value
        this.loggerService.debug('companyApiService', 'registerCompany', 'companyRegistrationFormValue', companyRegistrationFormValue);
        this.httpHelperApiService.post('companies/', companyRegistrationFormValue).subscribe(function (next) {
            // log data
            _this.loggerService.debug('companyApiService', 'registerCompany', 'next', next);
            // store company
            _this.storageService.storeCompany(next);
            type = 'success';
            message = next.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // navigate to the company dashboard
            _this.router.navigate([global_constants_1.GlobalConstants.companyPath]).then(function () {
                // log message
                _this.loggerService.info('companyApiService', 'registerCompany', 'navigate', '');
            });
        }, function (error) {
            // log error
            _this.loggerService.error('companyApiService', 'registerCompany', 'error', error);
            if (error.status === 422) {
                type = 'error';
                message = error.error.error;
                title = '';
                // pop toastr message
                _this.notificationService.toasterNotification(type, message, title);
            }
        }, function () {
            // log message
            _this.loggerService.info('companyApiService', 'registerCompany', 'complete', '');
        });
    };
    // delete company
    CompanyApiService.prototype.deleteCompany = function (companyId) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log company id
        this.loggerService.debug('companyApiService', 'deleteCompany', 'companyId', companyId);
        this.httpHelperApiService.delete('companies/' + companyId).subscribe(function (next) {
            // log data
            _this.loggerService.debug('companyApiService', 'deleteCompany', 'next', next);
            // clear company
            _this.storageService.clearCompany();
            type = 'success';
            message = next.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // navigate to the user dashboard
            _this.router.navigate([global_constants_1.GlobalConstants.userPath]).then(function () {
                // log message
                _this.loggerService.info('companyApiService', 'deleteCompany', 'navigate', '');
            });
        }, function (error) {
            // log error
            _this.loggerService.error('companyApiService', 'deleteCompany', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info('companyApiService', 'deleteCompany', 'complete', '');
        });
    };
    /** Company Divisions **/
    // register company division
    CompanyApiService.prototype.registerCompanyDivision = function (companyDivisionRegisterFormValue) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log company division registration form value
        this.loggerService.debug('companyApiService', 'registerCompanyDivision', 'companyDivisionRegisterFormValue', companyDivisionRegisterFormValue);
        return this.httpHelperApiService.post('company_divisions/', companyDivisionRegisterFormValue).subscribe(function (next) {
            // log data
            _this.loggerService.debug('companyApiService', 'registerCompanyDivision', 'next', next);
            // store company
            _this.storageService.storeCompany(next);
            type = 'success';
            message = next.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // navigate to company division
            _this.router.navigate([global_constants_1.GlobalConstants.companyDivisionsPath]).then(function () {
                // log message
                _this.loggerService.info('companyApiService', 'registerCompanyDivision', 'navigate', '');
            });
        }, function (error) {
            // log error
            _this.loggerService.error('companyApiService', 'registerCompanyDivision', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info('companyApiService', 'registerCompanyDivision', 'complete', '');
        });
    };
    // update company division
    CompanyApiService.prototype.updateCompanyDivision = function (companyDivisionUpdateFormValue) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log company division update form value
        this.loggerService.debug('companyApiService', 'updateCompanyDivision', 'companyDivisionUpdateFormValue', companyDivisionUpdateFormValue);
        // update company division
        this.httpHelperApiService.put('company_divisions/' + companyDivisionUpdateFormValue.id, companyDivisionUpdateFormValue).subscribe(function (next) {
            // log data
            _this.loggerService.debug('companyApiService', 'updateCompanyDivision', 'next', next);
            // store company in local storage
            _this.storageService.storeCompany(next);
            type = 'success';
            message = next.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // navigate to company division
            _this.router.navigate([global_constants_1.GlobalConstants.companyDivisionsPath]).then(function () {
                // log message
                _this.loggerService.info('companyApiService', 'updateCompanyDivision', 'navigate', '');
            });
        }, function (error) {
            // log error
            _this.loggerService.error('companyApiService', 'updateCompanyDivision', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info('companyApiService', 'updateCompanyDivision', 'complete', '');
        });
    };
    // delete company division
    CompanyApiService.prototype.deleteCompanyDivision = function (companyDivisionId) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log company division id
        this.loggerService.debug('companyApiService', 'deleteCompanyDivision', 'companyDivisionId', companyDivisionId);
        this.httpHelperApiService.delete('company_divisions/' + companyDivisionId).subscribe(function (next) {
            // log data
            _this.loggerService.debug('companyApiService', 'deleteCompanyDivision', 'next', next);
            // store company
            _this.storageService.storeCompany(next);
            type = 'success';
            message = next.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // navigate to the company division dashboard
            _this.router.navigate([global_constants_1.GlobalConstants.companyDivisionsUpdatePath]).then(function () {
                // log message
                _this.loggerService.info('companyApiService', 'deleteCompanyDivision', 'navigate', '');
            });
        }, function (error) {
            // log error
            _this.loggerService.error('companyApiService', 'deleteCompanyDivision', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info('companyApiService', 'deleteCompanyDivision', 'complete', '');
        });
    };
    /** Company Division Addresses **/
    // register company division address
    CompanyApiService.prototype.registerCompanyDivisionAddress = function (companyDivisionAddressRegisterFormValue) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log company division address registration form value
        this.loggerService.debug('companyApiService', 'registerCompanyDivisionAddress', 'companyDivisionAddressRegisterFormValue', companyDivisionAddressRegisterFormValue);
        return this.httpHelperApiService.post('company_division_addresses/', companyDivisionAddressRegisterFormValue).subscribe(function (next) {
            // log data
            _this.loggerService.debug('companyApiService', 'registerCompanyDivisionAddress', 'next', next);
            // store company
            _this.storageService.storeCompany(next);
            type = 'success';
            message = next.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // navigate to company division
            _this.router.navigate([global_constants_1.GlobalConstants.companyDivisionsUpdatePath, companyDivisionAddressRegisterFormValue.companyDivisionId]).then(function () {
                // log message
                _this.loggerService.info('companyApiService', 'registerCompanyDivisionAddress', 'navigate', '');
            });
        }, function (error) {
            // log error
            _this.loggerService.error('companyApiService', 'registerCompanyDivisionAddress', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info('companyApiService', 'registerCompanyDivisionAddress', 'complete', '');
        });
    };
    // update company division address
    CompanyApiService.prototype.updateCompanyDivisionAddress = function (companyDivisionAddressUpdateFormValue) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log company division address update form value
        this.loggerService.debug('companyApiService', 'updateCompanyDivisionAddress', 'companyDivisionAddressUpdateFormValue', companyDivisionAddressUpdateFormValue);
        // update company division
        this.httpHelperApiService.put('company_division_addresses/' + companyDivisionAddressUpdateFormValue.id, companyDivisionAddressUpdateFormValue).subscribe(function (next) {
            // log data
            _this.loggerService.debug('companyApiService', 'updateCompanyDivisionAddress', 'next', next);
            // store company in local storage
            _this.storageService.storeCompany(next);
            type = 'success';
            message = next.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // navigate to company division
            _this.router.navigate([global_constants_1.GlobalConstants.companyDivisionsUpdatePath, companyDivisionAddressUpdateFormValue.companyDivisionId]).then(function () {
                // log message
                _this.loggerService.info('companyApiService', 'updateCompanyDivisionAddress', 'navigate', '');
            });
        }, function (error) {
            // log error
            _this.loggerService.error('companyApiService', 'updateCompanyDivisionAddress', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info('companyApiService', 'updateCompanyDivisionAddress', 'complete', '');
        });
    };
    // delete company division
    CompanyApiService.prototype.deleteCompanyDivisionAddress = function (companyDivisionAddressId, companyDivisionId) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log company division id
        this.loggerService.debug('companyApiService', 'deleteCompanyDivisionAddress', 'companyDivisionAddressId', companyDivisionAddressId);
        this.httpHelperApiService.delete('company_division_addresses/' + companyDivisionAddressId).subscribe(function (next) {
            // log data
            _this.loggerService.debug('companyApiService', 'deleteCompanyDivisionAddress', 'next', next);
            // store company
            _this.storageService.storeCompany(next);
            type = 'success';
            message = next.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // navigate to the company division
            _this.router.navigate([global_constants_1.GlobalConstants.companyDivisionsUpdatePath, companyDivisionId]).then(function () {
                // log message
                _this.loggerService.info('companyApiService', 'deleteCompanyDivisionAddress', 'navigate', '');
            });
        }, function (error) {
            // log error
            _this.loggerService.error('companyApiService', 'deleteCompanyDivisionAddress', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info('companyApiService', 'deleteCompanyDivisionAddress', 'complete', '');
        });
    };
    /** Company Domains **/
    // register company domain
    CompanyApiService.prototype.registerCompanyDomain = function (companyDomainFormValue) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log company registration form value
        this.loggerService.debug('companyApiService', 'registerCompanyDomain', 'companyDomainFormValue', companyDomainFormValue);
        return this.httpHelperApiService.post('company_domains/', companyDomainFormValue).pipe((0, operators_1.map)(function (project) {
            // log data
            _this.loggerService.debug('companyApiService', 'registerCompanyDomain', 'project', project);
            // store company
            _this.storageService.storeCompany(project);
            type = 'success';
            message = project.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
        }), (0, operators_1.catchError)(function (error) {
            // log error
            _this.loggerService.error('companyApiService', 'registerCompanyDomain', 'error', error);
            if (error.status === 422) {
                // error type
                type = 'warning';
                // server-side error
                // email has already been taken
                message = error.error.error;
                // pop toastr message
                _this.notificationService.toasterNotification(type, message, title);
            }
            // throw error
            return (0, rxjs_1.throwError)(error);
        }));
    };
    // delete company domain
    CompanyApiService.prototype.deleteCompanyDomain = function (companyDomainId) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log company registration form value
        this.loggerService.debug('companyApiService', 'deleteCompanyDomain', 'companyDomainId', companyDomainId);
        return this.httpHelperApiService.delete('company_domains/' + companyDomainId).pipe((0, operators_1.map)(function (project) {
            // log data
            _this.loggerService.debug('companyApiService', 'deleteCompanyDomain', 'project', project);
            // store company
            _this.storageService.storeCompany(project);
            type = 'success';
            message = project.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
        }, function (error) {
            // log error
            _this.loggerService.error('companyApiService', 'deleteCompanyDomain', 'error', error);
        }));
    };
    // verify company domain
    CompanyApiService.prototype.verifyCompanyDomain = function (confirmationToken) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log confirmationToken
        this.loggerService.debug('companyApiService', 'verifyCompanyDomain', 'confirmationToken', confirmationToken);
        this.httpHelperApiService.get('companyApiService company_domain_verify?confirmation_token=' + confirmationToken).subscribe(function (next) {
            // log data
            _this.loggerService.debug('companyApiService', 'deleteCompanyDomain', 'next', next);
            // store company
            _this.storageService.storeCompany(next);
            // retrieve from storage
            var companyDomains = _this.storageService.getCompanyDomains();
            var domain = companyDomains[companyDomains.length - 1].domain;
            type = 'success';
            message = 'You have successfully confirmed @' + domain + '.';
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            _this.router.navigate([global_constants_1.GlobalConstants.companyPath]).then(function () {
                // log message
                _this.loggerService.info('companyApiService', 'verifyCompanyDomain', 'navigate', '');
            });
        }, function (error) {
            // log error
            _this.loggerService.error('companyApiService', 'verifyCompanyDomain', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info('companyApiService', 'verifyCompanyDomain', 'complete', '');
        });
    };
    // resend company domain confirmation email
    CompanyApiService.prototype.resendCompanyDomainConfirmationEmail = function (companyDomainResendConfirmationFormValue) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log email
        this.loggerService.debug('companyApiService', 'resendCompanyDomainConfirmationEmail', 'companyDomainResendConfirmationFormValue', companyDomainResendConfirmationFormValue);
        this.httpHelperApiService.post('company_domain_verify/', companyDomainResendConfirmationFormValue).subscribe(function (next) {
            // log data
            _this.loggerService.debug('companyApiService', 'resendCompanyDomainConfirmationEmail', 'next', next);
            type = 'success';
            message = next.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
        }, function (error) {
            // log error
            _this.loggerService.error('companyApiService', 'resendCompanyDomainConfirmationEmail', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info('companyApiService', 'resendCompanyDomainConfirmationEmail', 'complete', '');
        });
    };
    /** Company Users **/
    // invite company user
    CompanyApiService.prototype.inviteCompanyUser = function (companyUserInviteFormValue) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log company registration form value
        this.loggerService.debug('companyApiService', 'inviteCompanyUser', 'companyUserInviteFormValue', companyUserInviteFormValue);
        return this.httpHelperApiService.post('company_users/', companyUserInviteFormValue).pipe((0, operators_1.map)(function (project) {
            // log data
            _this.loggerService.debug('companyApiService', 'inviteCompanyUser', 'project', project);
            // store company
            _this.storageService.storeCompany(project);
            type = 'success';
            message = project.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
        }), (0, operators_1.catchError)(function (error) {
            // log error
            _this.loggerService.error('companyApiService', 'inviteCompanyUser', 'error', error);
            if (error.status === 422) {
                // error type
                type = 'warning';
                // server-side error
                // email has already been taken
                message = error.error.error;
                // pop toastr message
                _this.notificationService.toasterNotification(type, message, title);
            }
            // throw error
            return (0, rxjs_1.throwError)(error);
        }));
    };
    // remove company user
    CompanyApiService.prototype.removeCompanyUser = function (companyUserId) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log company user form value
        this.loggerService.debug('companyApiService', 'removeCompanyUser', 'companyUserId', companyUserId);
        return this.httpHelperApiService.delete('company_users/' + companyUserId).pipe((0, operators_1.map)(function (project) {
            // log data
            _this.loggerService.debug('companyApiService', 'removeCompanyUser', 'project', project);
            // store company
            _this.storageService.storeCompany(project);
            type = 'success';
            message = project.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
        }, function (error) {
            // log error
            _this.loggerService.error('companyApiService', 'removeCompanyUser', 'error', error);
        }));
    };
    CompanyApiService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], CompanyApiService);
    return CompanyApiService;
}());
exports.CompanyApiService = CompanyApiService;
