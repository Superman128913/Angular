import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { GlobalConstants } from '../../global-constants';
let UserProfileFormComponent = class UserProfileFormComponent {
    constructor(userStorageService, formBuilder, userApiService) {
        this.userStorageService = userStorageService;
        this.formBuilder = formBuilder;
        this.userApiService = userApiService;
        this.placeholderText = 'Please edit to enter your information.';
        this.fieldClass = 'form-control-plaintext';
        this.firstName = 'firstName';
        this.lastName = 'lastName';
        // paths
        this.companyPath = GlobalConstants.companyPath;
        this.companyRegisterPath = GlobalConstants.companyRegisterPath;
        this.companyJoinPath = GlobalConstants.companyJoinPath;
        this.userChangePasswordPath = GlobalConstants.userChangePasswordPath;
        // create user profile form
        this.userProfileForm = this.createUserProfileForm();
        // disable form
        this.userProfileForm.disable();
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.userProfileForm.controls;
    }
    ngOnInit() {
    }
    // enable forms
    enableForm() {
        this.fieldClass = 'form-control';
        // enable forms
        this.userProfileForm.enable();
    }
    resendConfirmationEmail() {
        // set userResendConfirmationFormValue
        const userResendConfirmationFormValue = {
            email: this.userStorageService.getUserEmail()
        };
        // resend user confirmation email via api
        this.userApiService.resendUserConfirmationEmail(userResendConfirmationFormValue);
    }
    // update user profile from forms
    updateUserProfile(userProfileFormValue) {
        // add user id to the value
        userProfileFormValue.id = this.userStorageService.getUserId();
        // update user via api
        this.userApiService.updateUser(userProfileFormValue);
    }
    // update user profile image
    updateUserProfileImage(selectedProfileImage) {
        // update user profile image via api
        this.userApiService.updateUserProfileImage(selectedProfileImage);
    }
    /** Private **/
    createUserProfileForm() {
        // retrieve user from local storage
        const firstName = this.userStorageService.getUserFirstName();
        const lastName = this.userStorageService.getUserLastName();
        const title = this.userStorageService.getUserTitle();
        const email = this.userStorageService.getUserEmail();
        const mobile = this.userStorageService.getUserMobile();
        const work = this.userStorageService.getUserWork();
        return this.formBuilder.group({
            firstName: [
                firstName,
                Validators.required
            ],
            lastName: [
                lastName,
                Validators.required
            ],
            title: [
                title,
                Validators.required
            ],
            email: [
                email,
                [
                    Validators.required,
                    Validators.email,
                    Validators.pattern(GlobalConstants.emailPattern)
                ]
            ],
            mobile: [
                mobile
            ],
            work: [
                work
            ]
        });
    }
};
UserProfileFormComponent = __decorate([
    Component({
        selector: 'app-user-profile-form',
        templateUrl: './user-profile-form.component.html',
        styleUrls: ['./user-profile-form.component.scss']
    })
], UserProfileFormComponent);
export { UserProfileFormComponent };
//# sourceMappingURL=user-profile-form.component.js.map