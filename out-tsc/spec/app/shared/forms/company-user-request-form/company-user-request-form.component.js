import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
// Application
import { GlobalConstants } from '../../global-constants';
let CompanyUserRequestFormComponent = class CompanyUserRequestFormComponent {
    constructor(formBuilder, companyApiService, userStorageService) {
        this.formBuilder = formBuilder;
        this.companyApiService = companyApiService;
        this.userStorageService = userStorageService;
        this.companyRegisterPath = GlobalConstants.companyRegisterPath;
        // create form
        this.companyUserRequestForm = this.createCompanyUserRequestForm();
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.companyUserRequestForm.controls;
    }
    ngOnInit() {
    }
    // create company user request
    createCompanyUserRequest(companyUserRequestCreateFormValue) {
        // create company user request
        this.companyApiService.createCompanyUserRequest(companyUserRequestCreateFormValue);
    }
    /** Private **/
    createCompanyUserRequestForm() {
        return this.formBuilder.group({
            domain: [
                this.userStorageService.getUserDomain(),
                [
                    Validators.pattern(GlobalConstants.domainPattern),
                    Validators.required
                ]
            ]
        });
    }
};
CompanyUserRequestFormComponent = __decorate([
    Component({
        selector: 'app-company-user-request-form',
        templateUrl: './company-user-request-form.component.html',
        styleUrls: ['./company-user-request-form.component.scss']
    })
], CompanyUserRequestFormComponent);
export { CompanyUserRequestFormComponent };
//# sourceMappingURL=company-user-request-form.component.js.map