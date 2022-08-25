import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
// Application
import { GlobalConstants } from '../../global-constants';
import { UserSignInModalComponent } from '../../modals/user-sign-in-modal/user-sign-in-modal.component';
let UserSignInFormComponent = class UserSignInFormComponent {
    constructor(formBuilder, userStorageService, userApiService, modalService) {
        this.formBuilder = formBuilder;
        this.userStorageService = userStorageService;
        this.userApiService = userApiService;
        this.modalService = modalService;
        // flag to show or hide the password
        this.showPassword = false;
        //
        this.emailPlaceholder = GlobalConstants.emailPlaceholder;
        // paths
        this.conditionsOfUsePath = GlobalConstants.conditionsOfUsePath;
        this.privacyNoticePath = GlobalConstants.privacyNoticePath;
        this.registerPath = GlobalConstants.registerPath;
        this.resetPasswordPath = GlobalConstants.resetPasswordPath;
        // create user sign in form
        this.userSignInForm = this.createUserSignInForm();
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.userSignInForm.controls;
    }
    ngOnInit() {
    }
    // show or hide the password
    togglePassword() {
        this.showPassword = !this.showPassword;
    }
    // sign in user
    signInUser(userSignInFormValue) {
        const userOTPRequirementFormValue = {
            email: userSignInFormValue.email,
            password: userSignInFormValue.password
        };
        // check if user needs OTP
        this.userApiService.checkUserOTPRequirement(userOTPRequirementFormValue).subscribe({
            next: (next) => {
                if (next.mfaEnabled) {
                    this.openModal(userSignInFormValue.email, userSignInFormValue.password);
                }
                else {
                    // sign in user via the API
                    this.userApiService.signInUser(userSignInFormValue);
                }
            }
        });
    }
    openModal(email, password) {
        const modalRef = this.modalService.open(UserSignInModalComponent, {
            centered: true,
            backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.email = email;
        modalRef.componentInstance.password = password;
    }
    /** Private **/
    createUserSignInForm() {
        return this.formBuilder.group({
            email: [
                this.userStorageService.getUserEmail(),
                [
                    Validators.required,
                    Validators.email,
                    Validators.pattern(GlobalConstants.emailPattern)
                ]
            ],
            password: [
                '',
                [
                    Validators.required
                ]
            ]
        });
    }
};
UserSignInFormComponent = __decorate([
    Component({
        selector: 'app-user-sign-in-form',
        templateUrl: './user-sign-in-form.component.html',
        styleUrls: ['./user-sign-in-form.component.scss']
    })
], UserSignInFormComponent);
export { UserSignInFormComponent };
//# sourceMappingURL=user-sign-in-form.component.js.map