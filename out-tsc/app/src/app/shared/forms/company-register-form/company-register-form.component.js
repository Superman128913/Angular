import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { GlobalConstants } from '../../global-constants';
import { EmailDomainCompanyDomainValidator } from '../../validators/email-domain-company-domain.validator';
let CompanyRegisterFormComponent = class CompanyRegisterFormComponent {
    constructor(formBuilder, companyApiService, userStorageService) {
        this.formBuilder = formBuilder;
        this.companyApiService = companyApiService;
        this.userStorageService = userStorageService;
        this.requestToJoinPath = GlobalConstants.companyJoinPath;
        // create form
        this.organizationRegistrationForm = this.createCompanyRegistrationForm();
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.organizationRegistrationForm.controls;
    }
    ngOnInit() {
    }
    // register company
    registerOrganization(companyRegistrationFormValue) {
        console.log(companyRegistrationFormValue);
        // register company
        this.companyApiService.registerCompany(companyRegistrationFormValue);
    }
    /** Private **/
    createCompanyRegistrationForm() {
        return this.formBuilder.group({
            name: [
                '',
                [
                    Validators.required
                ]
            ],
            domain: [
                '',
                [
                    Validators.pattern(GlobalConstants.domainPattern)
                ]
            ]
        }, {
            validators: [
                EmailDomainCompanyDomainValidator.doesEmailDomainMatchCompanyDomain(this.userStorageService.getUserEmail())
            ],
            updateOn: 'blur'
        });
    }
};
CompanyRegisterFormComponent = __decorate([
    Component({
        selector: 'app-company-register-form',
        templateUrl: './company-register-form.component.html',
        styleUrls: ['./company-register-form.component.scss']
    })
], CompanyRegisterFormComponent);
export { CompanyRegisterFormComponent };
//# sourceMappingURL=company-register-form.component.js.map