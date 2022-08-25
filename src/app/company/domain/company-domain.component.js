"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDomainComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var global_constants_1 = require("../../shared/global-constants");
var CompanyDomainComponent = /** @class */ (function () {
    function CompanyDomainComponent(companyApiService, loggerService, formBuilder, storageService) {
        this.companyApiService = companyApiService;
        this.loggerService = loggerService;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        // set patterns
        this.domainPattern = global_constants_1.GlobalConstants.domainPattern;
        this.emailPattern = global_constants_1.GlobalConstants.emailPattern;
        // create company domains form
        this.companyDomainsForm = this.createCompanyDomainForm();
        // log company domains form
        this.loggerService.debug('companyDomainComponent', '', 'companyDomainForm', this.companyDomainsForm);
        // set company domains list
        var companyDomainsList = this.storageService.getCompanyDomains();
        // log company domains list
        this.loggerService.debug('companyDomainComponent', '', 'companyDomainsList', companyDomainsList);
        // iterate through company domains for singular company domain
        if (companyDomainsList.length > 0) {
            for (var _i = 0, companyDomainsList_1 = companyDomainsList; _i < companyDomainsList_1.length; _i++) {
                var companyDomain = companyDomainsList_1[_i];
                // log company domain
                this.loggerService.debug('companyDomainComponent', '', 'companyDomain', companyDomain);
                // create company domain item with company domain
                this.getCompanyDomainsArray().push(this.createCompanyDomainItem(companyDomain));
            }
        }
        else {
            this.getCompanyDomainsArray().push(this.createCompanyDomainItem());
        }
    }
    /** Public **/
    CompanyDomainComponent.prototype.ngOnInit = function () {
    };
    CompanyDomainComponent.prototype.addCompanyDomainItem = function () {
        var _this = this;
        // get company domain form array
        this.companyDomainsArray = this.companyDomainsForm.get('companyDomains');
        // push empty domain into form array
        this.companyDomainsArray.push(this.createCompanyDomainItem());
        // set disable add domain
        this.disableAddDomain = true;
        var last = this.companyDomainsArray.length - 1;
        var formControl = this.companyDomainsArray.controls[last];
        formControl.valueChanges.subscribe(function (value) {
            var domainControl = formControl.get('domain');
            // check for email
            if (value.email) {
                _this.domainPattern = value.email.split('@').pop();
            }
            domainControl.setValidators([
                forms_1.Validators.required,
                forms_1.Validators.pattern(_this.domainPattern)
            ]);
            var emailControl = formControl.get('email');
            // check for domain
            if (value.domain) {
                _this.emailPattern = '^[A-Za-z0-9._%+-]+@' + value.domain;
            }
            emailControl.setValidators([
                forms_1.Validators.required,
                forms_1.Validators.email,
                forms_1.Validators.pattern(_this.emailPattern)
            ]);
        });
    };
    // domain
    CompanyDomainComponent.prototype.displayDomainEmailMatchError = function (currentRequiredPattern, domain, email) {
        // pattern has not changed
        if (currentRequiredPattern === this.domainPattern) {
            return false;
        }
        // pattern has changed
        else {
            var emailDomain = void 0;
            if (email) {
                emailDomain = email.split('@').pop();
            }
            if (emailDomain === domain) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    // email domain
    CompanyDomainComponent.prototype.displayEmailDomainMatchError = function (currentRequiredPattern, domain, email) {
        // pattern has not changed
        if (currentRequiredPattern === this.emailPattern) {
            return false;
        }
        // pattern has changed
        else {
            var emailDomain = void 0;
            if (email) {
                emailDomain = email.split('@').pop();
            }
            if (emailDomain === domain) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    // register company domain
    CompanyDomainComponent.prototype.registerCompanyDomain = function (newDomain, newEmail, isTest) {
        var _this = this;
        // set form values
        var companyDomainFormValue = {
            domain: newDomain,
            email: newEmail,
            companyId: this.storageService.getCompanyId(),
            userId: this.storageService.getUserId()
        };
        // log company domain form value
        this.loggerService.debug('companyDomainComponent', 'registerCompanyDomain', 'companyDomainFormValue', companyDomainFormValue);
        // // get company domain id
        // const companyDomainsList = this.storageService.getCompanyDomains();
        // let companyDomainId;
        // // iterate through company domains for singular company domain
        // for (const companyDomain of companyDomainsList) {
        //     if (companyDomain.domain === newDomain) {
        //         // set company domain id variable
        //         companyDomainId = companyDomain.id;
        //         // log data
        //         this.loggerService.log('companyDomainComponent', 'registerCompanyDomain', 'companyDomain', companyDomain, true)
        //     }
        // }
        // register company domain via the API
        // subscribe to dynamically update the domains array
        this.companyApiService.registerCompanyDomain(companyDomainFormValue).subscribe(function (next) {
            // log data
            _this.loggerService.debug('companyDomainComponent', 'registerCompanyDomain', 'next', next);
            // remove the domain form from the domains array as the new one will be added below
            if (!isTest || _this.disableAddDomain) {
                // remove domain in array
                _this.removeDomainFromDomainsArray(newDomain);
            }
            // add approved to object to push into company domains array
            companyDomainFormValue.approved = false;
            // create company domains form group with company domain
            _this.getCompanyDomainsArray().push(_this.createCompanyDomainItem(companyDomainFormValue));
            // set disable add domain
            _this.disableAddDomain = false;
        }, function (error) {
            // log error
            _this.loggerService.error('companyDomainComponent', 'registerCompanyDomain', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info('companyDomainComponent', 'registerCompanyDomain', 'complete', '');
        });
    };
    // delete company domain
    CompanyDomainComponent.prototype.deleteCompanyDomain = function (domain) {
        var _this = this;
        // get company domain id
        var companyDomainsList = this.storageService.getCompanyDomains();
        var companyDomainId;
        // iterate through company domains for singular company domain
        for (var _i = 0, companyDomainsList_2 = companyDomainsList; _i < companyDomainsList_2.length; _i++) {
            var companyDomain = companyDomainsList_2[_i];
            if (companyDomain.domain === domain) {
                // set company domain id variable
                companyDomainId = companyDomain.id;
                // log data
                this.loggerService.debug('companyDomainComponent', 'deleteCompanyDomain', 'companyDomainId', companyDomainId);
            }
        }
        // delete company domain via the API
        // subscribe to dynamically update the domains array
        this.companyApiService.deleteCompanyDomain(companyDomainId).subscribe(function (next) {
            // log data
            _this.loggerService.debug('companyDomainComponent', 'deleteCompanyDomain', 'next', next);
            // remove domain in array
            _this.removeDomainFromDomainsArray(domain);
            // when no domains are present add an empty company domain item
            if (_this.getCompanyDomainsArray().length === 0) {
                // create empty company domain item
                _this.getCompanyDomainsArray().push(_this.createCompanyDomainItem());
            }
        }, function (error) {
            // log error
            _this.loggerService.error('companyDomainComponent', 'deleteCompanyDomain', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info('companyDomainComponent', 'deleteCompanyDomain', 'complete', '');
        });
    };
    // resend company domain confirmation email
    CompanyDomainComponent.prototype.resendCompanyDomainConfirmationEmail = function (newDomain, newEmail) {
        // set form values
        var companyDomainResendConfirmationFormValue = {
            domain: newDomain,
            email: newEmail
        };
        // resend verify company domain via the API
        this.companyApiService.resendCompanyDomainConfirmationEmail(companyDomainResendConfirmationFormValue);
    };
    // dev mode helpers
    CompanyDomainComponent.prototype.isDevMode = function () {
        return (0, core_1.isDevMode)();
    };
    CompanyDomainComponent.prototype.testRegisterSeedCompanyDomain = function () {
        // newDomain
        var newDomain = 'aeroplicity.com';
        // userEmail
        var userEmail = this.storageService.getUserEmail();
        // register company domain
        this.registerCompanyDomain(newDomain, userEmail, true);
    };
    CompanyDomainComponent.prototype.testRegisterCompanyDomain = function (emailRandomUser) {
        // domainHash
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var domainHash = '';
        for (var i = 0; i < 6; i++) {
            domainHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        domainHash += '.com';
        // log domainHash
        this.loggerService.debug('companyDomainComponent', 'testRegisterCompanyDomain', 'domainHash', domainHash);
        // emailHash
        var emailHash = '';
        if (emailRandomUser) {
            for (var i = 0; i < 6; i++) {
                emailHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
            }
            emailHash = emailHash + '@' + domainHash;
        }
        else {
            emailHash = this.storageService.getUserEmail();
        }
        // log emailHash
        this.loggerService.debug('companyDomainComponent', 'testRegisterCompanyDomain', 'emailHash', emailHash);
        // register company domain
        this.registerCompanyDomain(domainHash, emailHash, true);
    };
    /** Private **/
    CompanyDomainComponent.prototype.createCompanyDomainForm = function () {
        return this.formBuilder.group({
            companyDomains: this.formBuilder.array([])
        });
    };
    CompanyDomainComponent.prototype.getCompanyDomainsArray = function () {
        return this.companyDomainsForm.get('companyDomains');
    };
    CompanyDomainComponent.prototype.createCompanyDomainItem = function (companyDomain) {
        if (companyDomain) {
            this.emailPattern = '^[A-Za-z0-9._%+-]+@' + companyDomain.domain;
        }
        else {
            // set company domain object
            companyDomain = {
                domain: null,
                approved: 'added',
                email: null
            };
            // set disable add domain
            this.disableAddDomain = true;
        }
        return this.formBuilder.group({
            domain: [
                companyDomain.domain,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(this.domainPattern)
                ]
            ],
            approved: [
                companyDomain.approved
            ],
            email: [
                companyDomain.email,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.email,
                    forms_1.Validators.pattern(this.emailPattern)
                ]
            ]
        });
    };
    CompanyDomainComponent.prototype.removeDomainFromDomainsArray = function (domain) {
        // get location of domain in array for removeAt
        var index = this.getCompanyDomainsArray().value.findIndex(function (x) { return x.domain === domain; });
        // log index
        this.loggerService.debug('companyDomainComponent', 'removeDomainFromDomainsArray', 'index', index);
        // create company domains form group with company domain
        this.getCompanyDomainsArray().removeAt(index);
    };
    CompanyDomainComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-company-domain',
            templateUrl: './company-domain.component.html',
            styleUrls: ['./company-domain.component.scss']
        })
    ], CompanyDomainComponent);
    return CompanyDomainComponent;
}());
exports.CompanyDomainComponent = CompanyDomainComponent;
