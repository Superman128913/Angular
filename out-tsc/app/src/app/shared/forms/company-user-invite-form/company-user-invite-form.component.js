import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { GlobalConstants } from '../../global-constants';
let CompanyUserInviteFormComponent = class CompanyUserInviteFormComponent {
    constructor(formBuilder, companyApiService, userStorageService, companyStorageService, loggerService) {
        this.formBuilder = formBuilder;
        this.companyApiService = companyApiService;
        this.userStorageService = userStorageService;
        this.companyStorageService = companyStorageService;
        this.loggerService = loggerService;
        this.isUserCompanyAdministrator = false;
        this.emailPlaceholder = GlobalConstants.emailPlaceholder;
        // private
        this.fileName = 'CompanyUserInviteFormComponent';
        // create company user invite form
        this.companyUserInviteForm = this.createCompanyUserInviteForm();
        // set is user company administrator
        this.isUserCompanyAdministrator = this.userStorageService.isCurrentUserCompanyAdmin();
        // log is user company administrator
        this.loggerService.debug(this.fileName, 'constructor', 'isUserCompanyAdministrator', this.isUserCompanyAdministrator);
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.companyUserInviteForm.controls;
    }
    ngOnInit() {
    }
    onCheckboxChange(e) {
        if (e.target.checked) {
            if (e.target.value === 'administrator') {
                this.formControls['administrator'].setValue(true);
            }
        }
        else {
            if (e.target.value === 'administrator') {
                this.formControls['administrator'].setValue(false);
            }
        }
    }
    // create company user invite
    createCompanyUserInvite(companyUserInviteFormValue) {
        // add values
        companyUserInviteFormValue.companyId = this.companyStorageService.getCompanyId();
        // create company user invite
        this.companyApiService.createCompanyUserInvite(companyUserInviteFormValue);
    }
    /** Private **/
    createCompanyUserInviteForm() {
        return this.formBuilder.group({
            email: [
                '', [
                    Validators.required,
                    Validators.email,
                    Validators.pattern(GlobalConstants.emailPattern)
                ]
            ],
            administrator: [
                false
            ]
        });
    }
};
CompanyUserInviteFormComponent = __decorate([
    Component({
        selector: 'app-company-user-invite-form',
        templateUrl: './company-user-invite-form.component.html',
        styleUrls: ['./company-user-invite-form.component.scss']
    })
], CompanyUserInviteFormComponent);
export { CompanyUserInviteFormComponent };
//# sourceMappingURL=company-user-invite-form.component.js.map