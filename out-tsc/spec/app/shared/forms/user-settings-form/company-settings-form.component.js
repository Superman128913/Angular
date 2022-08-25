import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let CompanySettingsFormComponent = class CompanySettingsFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        // create user profile form
        this.companySettingsForm = this.createCompanySettingsForm();
        // disable form
        this.companySettingsForm.disable();
    }
    /** Public **/
    ngOnInit() {
    }
    // update company settings from form
    updateCompanySettings(companySettingsFormValue) {
    }
    /** Private **/
    createCompanySettingsForm() {
        return this.formBuilder.group({});
    }
};
CompanySettingsFormComponent = __decorate([
    Component({
        selector: 'app-company-settings-form',
        templateUrl: './company-settings-form.component.html',
        styleUrls: ['./company-settings-form.component.scss']
    })
], CompanySettingsFormComponent);
export { CompanySettingsFormComponent };
//# sourceMappingURL=company-settings-form.component.js.map