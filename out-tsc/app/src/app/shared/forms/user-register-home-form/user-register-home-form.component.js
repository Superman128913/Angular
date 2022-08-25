import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
// Application
import { GlobalConstants } from '../../global-constants';
let UserRegisterHomeFormComponent = class UserRegisterHomeFormComponent {
    constructor(router, formBuilder, loggerService, userStorageService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.loggerService = loggerService;
        this.userStorageService = userStorageService;
        this.emailPlaceholder = GlobalConstants.emailPlaceholder;
        // private
        this.fileName = 'UserRegisterHomeFormComponent';
        // create form
        this.userRegistrationRedirectForm = this.createUserRegistrationRedirectForm();
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.userRegistrationRedirectForm.controls;
    }
    ngOnInit() {
    }
    redirectToUserRegisterForm(formValue) {
        // store email in session storage
        this.userStorageService.storeEmail(formValue.email);
        // navigate to register
        this.router.navigate([GlobalConstants.registerPath]).then(() => {
            // log message
            this.loggerService.info(this.fileName, 'redirectToUserRegisterForm', 'navigate', '');
        });
    }
    /** Private **/
    createUserRegistrationRedirectForm() {
        return this.formBuilder.group({
            email: [
                '',
                [
                    Validators.email,
                    Validators.pattern(GlobalConstants.emailPattern)
                ]
            ]
        });
    }
};
UserRegisterHomeFormComponent = __decorate([
    Component({
        selector: 'app-user-register-home-form',
        templateUrl: './user-register-home-form.component.html',
        styleUrls: ['./user-register-home-form.component.scss']
    })
], UserRegisterHomeFormComponent);
export { UserRegisterHomeFormComponent };
//# sourceMappingURL=user-register-home-form.component.js.map