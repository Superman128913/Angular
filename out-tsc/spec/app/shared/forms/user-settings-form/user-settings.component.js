import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let UserSettingsComponent = class UserSettingsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        // create user profile form
        this.userSettingsForm = this.createUserSettingsForm();
        // disable form
        this.userSettingsForm.disable();
    }
    /** Public **/
    ngOnInit() {
    }
    // update company settings from form
    updateUserSettings(userSettingsFormValue) {
    }
    /** Private **/
    createUserSettingsForm() {
        return this.formBuilder.group({});
    }
};
UserSettingsComponent = __decorate([
    Component({
        selector: 'app-user-settings',
        templateUrl: './user-settings-form.component.html',
        styleUrls: ['./user-settings-form.component.scss']
    })
], UserSettingsComponent);
export { UserSettingsComponent };
//# sourceMappingURL=user-settings.component.js.map