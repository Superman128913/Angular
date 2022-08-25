import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { GlobalConstants } from '../../global-constants';
let UserSignInModalComponent = class UserSignInModalComponent {
    constructor(activeModal, userApiService, formBuilder) {
        this.activeModal = activeModal;
        this.userApiService = userApiService;
        this.formBuilder = formBuilder;
        this.supportEmail = GlobalConstants.supportEmail;
        // private
        this.email = null;
        this.password = null;
    }
    ngOnInit() {
        // create user sign in form
        // NOTE: must be in ngOnInit and not in constructor to get email and passwords
        this.userSignInForm = this.createUserSignInForm();
    }
    // this called only if user entered full code
    onCodeCompleted(code) {
        // set sign in form value
        const userSignInFormValue = this.userSignInForm.value;
        // sign in user via the API
        this.userApiService.signInUser(userSignInFormValue, code);
        // close modal
        this.activeModal.close();
    }
    /**
     * Private
     **/
    createUserSignInForm() {
        return this.formBuilder.group({
            email: [
                this.email
            ],
            password: [
                this.password
            ],
            userType: [
                'USER'
            ]
        });
    }
};
UserSignInModalComponent = __decorate([
    Component({
        selector: 'app-user-sign-in-modal',
        templateUrl: './user-sign-in-modal.component.html',
    })
], UserSignInModalComponent);
export { UserSignInModalComponent };
//# sourceMappingURL=user-sign-in-modal.component.js.map