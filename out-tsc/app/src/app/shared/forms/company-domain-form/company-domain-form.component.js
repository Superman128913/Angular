import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { GlobalConstants } from '../../global-constants';
let CompanyDomainFormComponent = class CompanyDomainFormComponent {
    constructor(companyApiService, loggerService, formBuilder, userStorageService, companyStorageService) {
        this.companyApiService = companyApiService;
        this.loggerService = loggerService;
        this.formBuilder = formBuilder;
        this.userStorageService = userStorageService;
        this.companyStorageService = companyStorageService;
        // private
        this.fileName = 'CompanyDomainFormComponent';
        // create company domains form
        this.companyDomainsForm = this.createCompanyDomainsForm();
        // set company domains list
        const companyDomainsList = this.companyStorageService.getCompanyDomains();
        // create domain items
        if (companyDomainsList.length > 0) {
            for (const companyDomain of companyDomainsList) {
                // log company domain
                this.loggerService.debug(this.fileName, 'constructor', 'companyDomain', companyDomain);
                // create company domain item with company domain
                // this.addCompanyDomainItem(companyDomain);
                this.addCompanyDomain(companyDomain);
            }
        }
        // create blank domain item
        this.addCompanyDomain();
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.companyDomainsForm.controls;
    }
    get companyDomains() {
        return this.formControls[GlobalConstants.companyDomains];
    }
    ngOnInit() {
    }
    addCompanyDomain(companyDomainFormValue) {
        let domain;
        if (companyDomainFormValue === null || companyDomainFormValue === void 0 ? void 0 : companyDomainFormValue.domain) {
            domain = companyDomainFormValue === null || companyDomainFormValue === void 0 ? void 0 : companyDomainFormValue.domain;
        }
        else if (companyDomainFormValue === null || companyDomainFormValue === void 0 ? void 0 : companyDomainFormValue.unconfirmedDomain) {
            domain = companyDomainFormValue === null || companyDomainFormValue === void 0 ? void 0 : companyDomainFormValue.unconfirmedDomain;
        }
        const domainFormGroup = this.formBuilder.group({
            domain: [
                {
                    value: domain,
                    disabled: (companyDomainFormValue === null || companyDomainFormValue === void 0 ? void 0 : companyDomainFormValue.confirmed) === true || (companyDomainFormValue === null || companyDomainFormValue === void 0 ? void 0 : companyDomainFormValue.confirmed) === false
                },
                [
                    Validators.required,
                    Validators.pattern(GlobalConstants.domainPattern)
                ]
            ],
            confirmed: [
                companyDomainFormValue === null || companyDomainFormValue === void 0 ? void 0 : companyDomainFormValue.confirmed
            ],
            added: [
                !companyDomainFormValue // true if companyDomainFormValue is there, false otherwise
            ]
        });
        // push form group
        this.companyDomains.push(domainFormGroup);
    }
    removeCompanyDomain(index) {
        // remove at index
        this.companyDomains.removeAt(index);
    }
    // register company domain
    registerCompanyDomain(companyDomain) {
        // function name
        const functionName = 'registerCompanyDomain';
        const companyDomainRegisterFormValue = {
            unconfirmedDomain: companyDomain.domain,
            companyId: this.companyStorageService.getCompanyId()
        };
        // log value
        this.loggerService.debug(this.fileName, functionName, 'companyDomainRegisterFormValue', companyDomainRegisterFormValue);
        // register company domain via the API
        // subscribe to dynamically update the domains array
        this.companyApiService.registerCompanyDomain(companyDomainRegisterFormValue).subscribe({
            next: (next) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'next', next);
                // get index
                const index = this.companyDomains.value.findIndex((x) => x.domain === companyDomainRegisterFormValue.unconfirmedDomain);
                // remove domain in array
                this.removeCompanyDomain(index);
                console.log(companyDomain);
                companyDomain.domain = null;
                companyDomain.unconfirmedDomain = companyDomainRegisterFormValue.unconfirmedDomain;
                companyDomain.confirmed = false;
                companyDomain.added = true;
                // add company domain
                this.addCompanyDomain(companyDomain);
                // create blank domain item
                this.addCompanyDomain();
            },
            error: (error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    // delete company domain
    deleteCompanyDomain(index, domain) {
        // function name
        const functionName = 'deleteCompanyDomain';
        // get company domain id
        const companyDomainsList = this.companyStorageService.getCompanyDomains();
        // log data
        this.loggerService.debug(this.fileName, functionName, 'companyDomainsList', companyDomainsList);
        let companyDomainId;
        // iterate through company domains for singular company domain
        for (const companyDomain of companyDomainsList) {
            if (companyDomain.domain === domain) {
                // set company domain id variable
                companyDomainId = companyDomain.id;
            }
            else if (companyDomain.unconfirmedDomain === domain) {
                // set company domain id variable
                companyDomainId = companyDomain.id;
            }
            // log data
            this.loggerService.debug(this.fileName, functionName, 'companyDomainId', companyDomainId);
        }
        const companyDomainDeleteFormValue = {
            id: companyDomainId
        };
        // delete company domain via the API
        // subscribe to dynamically update the domains array
        this.companyApiService.deleteCompanyDomain(companyDomainDeleteFormValue).subscribe({
            next: (next) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'next', next);
                // remove domain in array
                this.removeCompanyDomain(index);
                // when no domains are present add an empty company domain item
                if (this.companyDomains.length === 0) {
                    // create blank domain item
                    this.addCompanyDomain();
                }
            },
            error: (error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    // resend company domain confirmation email
    resendCompanyDomainConfirmationEmail(newDomain) {
        // set form values
        const companyDomainResendConfirmationFormValue = {
            unconfirmedDomain: newDomain
        };
        // resend confirmation company domain via the API
        this.companyApiService.resendCompanyDomainConfirmationEmail(companyDomainResendConfirmationFormValue);
    }
    /** Private **/
    createCompanyDomainsForm() {
        return this.formBuilder.group({
            companyDomains: this.formBuilder.array([])
        });
    }
};
CompanyDomainFormComponent = __decorate([
    Component({
        selector: 'app-company-domain-form',
        templateUrl: './company-domain-form.component.html',
        styleUrls: ['./company-domain-form.component.scss']
    })
], CompanyDomainFormComponent);
export { CompanyDomainFormComponent };
//# sourceMappingURL=company-domain-form.component.js.map