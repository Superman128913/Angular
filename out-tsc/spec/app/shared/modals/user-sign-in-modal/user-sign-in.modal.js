import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let UserSignInModal = class UserSignInModal {
    constructor(modalRef, userApiService, formBuilder) {
        this.modalRef = modalRef;
        this.userApiService = userApiService;
        this.formBuilder = formBuilder;
        this.email = null;
        this.password = null;
        this.otpData = {
            email: '',
            required: false,
            result: null,
            otp: ''
        };
    }
    ngOnInit() {
        this.userSignInForm = this.createUserSignInForm();
    }
    signInUser() {
        //let userSignInFormValue: UserSignInForm;
        const otp = this.otpData.otp;
        //console.log(this.userSignInForm.value,otp);
        const userSignInFormValue = this.userSignInForm.value;
        // sign in user via the API
        this.userApiService.signInUser(userSignInFormValue, otp);
        this.modalRef.close();
    }
    createUserSignInForm() {
        return this.formBuilder.group({
            email: [this.email],
            password: [this.password],
            userType: ['USER']
        });
    }
};
UserSignInModal = __decorate([
    Component({
        selector: 'app-user-sign-in-modal',
        templateUrl: './user-sign-in.modal.html',
    })
], UserSignInModal);
export { UserSignInModal };
//# sourceMappingURL=user-sign-in.modal.js.map