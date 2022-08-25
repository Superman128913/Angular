// Angular
import {Component, isDevMode, OnInit} from '@angular/core';
// Application
import {
  UserChangePasswordForm,
  UserOTPRequirementForm,
  UserRegistrationForm,
  UserResendConfirmationForm,
  UserResetPasswordForm,
  UserSignInForm
} from '../../../models/user.model';
import {GlobalConstants} from '../../../global-constants';
import {UserApiService} from '../../../../services/api/user-api.service';
import {LoggerService} from '../../../../services/logger.service';
import {UserStorageService} from '../../../../services/storage/user-storage.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {UserSignInModalComponent} from '../../../modals/user-sign-in-modal/user-sign-in-modal.component';

@Component({
  selector: 'app-user-dev-tools',
  templateUrl: './user-dev-tools.component.html',
  styleUrls: ['./user-dev-tools.component.scss']
})
export class UserDevToolsComponent implements OnInit {

  // private
  private fileName = 'UserDevToolsComponent';

  constructor(private userApiService: UserApiService,
              private loggerService: LoggerService,
              private userStorageService: UserStorageService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  public isDevMode() {
    return isDevMode();
  }

  public testChangePassword() {
    // set password
    const formPassword = '123456789';

    // set form values
    const userChangePasswordFormValue: UserChangePasswordForm = {
      id: this.userStorageService.getUserId(),
      password: formPassword,
      passwordConfirmation: formPassword
    };

    // change password
    this.userApiService.changeUserPassword(userChangePasswordFormValue);
  }

  public testDeleteUser() {
    // delete user via the API
    this.userApiService.deleteUser();
  }

  public testRegisterSeedUser() {
    const newEmail = 'jamey.rose@aeroplicity.com';
    const newPassword = '123456789';

    // set user registration forms value
    const userRegistrationFormValue: UserRegistrationForm = {
      email: newEmail,
      password: newPassword
    };

    // register user via the API
    this.userApiService.registerUser(userRegistrationFormValue);
  }

  public testRegisterAeroplicityUser() {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let hash = '';
    for (let i = 0; i < 8; i++) {
      hash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    const newEmail = hash + '@aeroplicity.com';
    const newPassword = '123456789';

    // set user registration forms value
    const userRegistrationFormValue: UserRegistrationForm = {
      email: newEmail,
      password: newPassword
    };

    // register user via the API
    this.userApiService.registerUser(userRegistrationFormValue);
  }

  public testRegisterRandomUser() {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let hash = '';
    for (let i = 0; i < 8; i++) {
      hash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    const newEmail = hash + '@' + hash + '.com';
    const newPassword = '123456789';

    // set user registration forms value
    const userRegistrationFormValue: UserRegistrationForm = {
      email: newEmail,
      password: newPassword
    };

    // register user via the API
    this.userApiService.registerUser(userRegistrationFormValue);
  }

  public testResendResetPassword() {
    // set userResetPasswordFormValue
    const userResetPasswordFormValue: UserResetPasswordForm = {
      email: 'jamey.rose@aeroplicity.com'
    };

    // reset user password via the api
    this.userApiService.resetUserPassword(userResetPasswordFormValue);
  }

  public testSignInSeedUser() {
    const newEmail = 'jamey.rose@aeroplicity.com';
    const newPassword = '123456789';

    // set otp requirement form value
    const userOTPRequirementFormValue: UserOTPRequirementForm = {
      email: newEmail,
      password: newPassword
    };

    // set user sign in form value
    const userSignInFormValue: UserSignInForm = {
      email: newEmail,
      password: newPassword,
      userType: GlobalConstants.userUserType
    };

    // check if user needs OTP
    this.userApiService.checkUserOTPRequirement(
        userOTPRequirementFormValue
    ).subscribe({
      next: (next: any) => {
        if (next.mfaEnabled) {
          const modalRef: NgbModalRef = this.modalService.open(UserSignInModalComponent,
              {
                centered: true,
                backdrop: 'static',
                keyboard: false
              });
          modalRef.componentInstance.email = userOTPRequirementFormValue.email;
          modalRef.componentInstance.password = userOTPRequirementFormValue.password;
        } else {
          // sign in user via the API
          this.userApiService.signInUser(userSignInFormValue);
        }
      }
    });
  }

  public testSignInAdmin() {
    const newEmail = 'jamey.rose@aeroplicity.com';
    const newPassword = 'testtest12345!';

    // set otp requirement form value
    const userOTPRequirementFormValue: UserOTPRequirementForm = {
      email: newEmail,
      password: newPassword
    };

    // set user sign in form value
    const userSignInFormValue: UserSignInForm = {
      email: newEmail,
      password: newPassword,
      userType: GlobalConstants.adminUserType
    };

    // check if user needs OTP
    this.userApiService.checkUserOTPRequirement(
        userOTPRequirementFormValue
    ).subscribe({
      next: (next: any) => {
        if (next.mfaEnabled) {
          const modalRef: NgbModalRef = this.modalService.open(UserSignInModalComponent,
              {
                centered: true,
                backdrop: 'static',
                keyboard: false
              });
          modalRef.componentInstance.email = userOTPRequirementFormValue.email;
          modalRef.componentInstance.password = userOTPRequirementFormValue.password;
        } else {
          // sign in user via the API
          this.userApiService.signInUser(userSignInFormValue);
        }
      }
    });
  }

  public testResendConfirmationEmail() {
    const newEmail = 'jamey.rose@aeroplicity.com';

    // set user resend confirmation form value
    const userResendConfirmationFormValue: UserResendConfirmationForm = {
      email: newEmail
    };

    // resend user confirmation email vis the API
    this.userApiService.resendUserConfirmationEmail(userResendConfirmationFormValue);
  }

}
