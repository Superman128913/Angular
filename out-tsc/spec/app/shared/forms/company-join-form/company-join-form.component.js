import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
// Application
import { GlobalConstants } from '../../global-constants';
let CompanyJoinFormComponent = class CompanyJoinFormComponent {
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
        // add user id to the value
        companyUserRequestCreateFormValue.userId = this.userStorageService.getUserId();
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
CompanyJoinFormComponent = __decorate([
    Component({
        selector: 'app-company-join-form',
        templateUrl: './company-join-form.component.html',
        styleUrls: ['./company-join-form.component.scss']
    })
], CompanyJoinFormComponent);
export { CompanyJoinFormComponent };
//# sourceMappingURL=company-join-form.component.js.map