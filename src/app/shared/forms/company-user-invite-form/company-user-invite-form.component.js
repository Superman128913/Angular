"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUserInviteFormComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CompanyUserInviteFormComponent = /** @class */ (function () {
    function CompanyUserInviteFormComponent(formBuilder, companyApiService, storageService, loggerService) {
        this.formBuilder = formBuilder;
        this.companyApiService = companyApiService;
        this.storageService = storageService;
        this.loggerService = loggerService;
        this.rolesInvalid = false;
        // company user variables
        this.isUserCompanyAdministrator = false;
        // create company user invite form
        this.companyUserInviteForm = this.createCompanyUserInviteForm();
        // set is user company administrator
        this.isUserCompanyAdministrator = this.storageService.isUserCompanyAdmin();
        // log is user company administrator
        this.loggerService.debug('companyUserInviteComponent', 'constructor', 'isUserCompanyAdministrator', this.isUserCompanyAdministrator);
        // set company name
        var companyNames = this.storageService.getCompanyNames();
        // log is company names
        console.log('companyUserDashboard companyNames: ', companyNames);
        if (companyNames.length === 1) {
            this.companyName = companyNames;
        }
        else {
            for (var _i = 0, companyNames_1 = companyNames; _i < companyNames_1.length; _i++) {
                var companyName = companyNames_1[_i];
                if (this.companyName === undefined) {
                    this.companyName = companyName;
                }
                else {
                    this.companyName = this.companyName + ' | ' + companyName;
                }
            }
        }
    }
    Object.defineProperty(CompanyUserInviteFormComponent.prototype, "formControls", {
        /** Public **/
        // convenience getter for easy access to form fields
        get: function () {
            return this.companyUserInviteForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    CompanyUserInviteFormComponent.prototype.ngOnInit = function () {
    };
    CompanyUserInviteFormComponent.prototype.onCheckboxChange = function (e) {
        var _this = this;
        var roles = this.companyUserInviteForm.get('roles');
        if (e.target.checked) {
            roles.push(new forms_1.FormControl(e.target.value));
            this.isRoleSelected();
        }
        else {
            var i_1 = 0;
            roles.controls.forEach(function (item) {
                if (item.value === e.target.value) {
                    roles.removeAt(i_1);
                    _this.isRoleSelected();
                    return;
                }
                i_1++;
            });
        }
    };
    CompanyUserInviteFormComponent.prototype.isRoleSelected = function () {
        var roles = this.companyUserInviteForm.get('roles');
        if (roles.errors !== null) {
            if (roles.errors.required) {
                this.rolesInvalid = true;
            }
        }
        else {
            this.rolesInvalid = false;
        }
        console.log('rolesInvalid: ', this.rolesInvalid);
    };
    CompanyUserInviteFormComponent.prototype.inviteCompanyUser = function (companyUserInviteFormValue) {
        this.companyApiService.inviteCompanyUser(companyUserInviteFormValue).subscribe(function (next) {
            // log data
            console.log(next);
            // // remove domain in array
            // this.removeDomainFromDomainsArray(domain);
            //
            // if (this.getCompanyDomainsArray().length === 0) {
            //
            //     // create company domain item with no data
            //     this.getCompanyDomainsArray().push(this.createAdditionalCompanyDomainItem());
            // }
            // log message
            console.log('companyUserDashboardComponent inviteCompanyUser next.');
        }, function (error) {
            // log error
            console.log(error);
            // log message
            console.log('companyUserDashboardComponent inviteCompanyUser error.');
        }, function () {
            // log message
            console.log('companyUserDashboardComponent inviteCompanyUser completed.');
        });
    };
    // dev mode helpers
    CompanyUserInviteFormComponent.prototype.isDevMode = function () {
        return (0, core_1.isDevMode)();
    };
    CompanyUserInviteFormComponent.prototype.testInviteCompanyUser = function () {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var hash = '';
        for (var i = 0; i < 10; i++) {
            hash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        var emailHash = hash + '@aeroplicity.com';
        // set form values
        var inviteCompanyUserFormValue = {
            email: emailHash,
            roles: [
                'administrator',
                'standard'
            ],
            // add user id to the value
            userId: this.storageService.getUserId(),
            companyId: this.storageService.getCompanyId()
        };
        this.inviteCompanyUser(inviteCompanyUserFormValue);
    };
    /** Private **/
    CompanyUserInviteFormComponent.prototype.createCompanyUserInviteForm = function () {
        return this.formBuilder.group({
            email: [
                '', [
                    forms_1.Validators.required,
                    forms_1.Validators.email,
                    forms_1.Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')
                ]
            ],
            roles: this.formBuilder.array([
                'standard'
            ], forms_1.Validators.required)
        });
    };
    CompanyUserInviteFormComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-company-user-invite-form',
            templateUrl: './company-user-invite-form.component.html',
            styleUrls: ['./company-user-invite-form.component.scss']
        })
    ], CompanyUserInviteFormComponent);
    return CompanyUserInviteFormComponent;
}());
exports.CompanyUserInviteFormComponent = CompanyUserInviteFormComponent;
