// Angular
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// Application
import {User, UserProfileForm, UserResendConfirmationForm} from '../../models/user.model';
import {GlobalConstants} from '../../global-constants';
import {UserStorageService} from '../../../services/storage/user-storage.service';
import {UserApiService} from '../../../services/api/user-api.service';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent implements OnInit {

  // init user
  public user: User;
  // form
  public userProfileForm: FormGroup;
  public placeholderText = 'Please edit to enter your information.';
  public fieldClass = 'form-control-plaintext';
  public firstName = 'firstName';
  public lastName = 'lastName';
  // paths
  public companyPath = GlobalConstants.companyPath;
  public companyRegisterPath = GlobalConstants.companyRegisterPath;
  public companyJoinPath = GlobalConstants.companyJoinPath;
  public userChangePasswordPath = GlobalConstants.userChangePasswordPath;

  constructor(public userStorageService: UserStorageService,
              private formBuilder: FormBuilder,
              private userApiService: UserApiService) {
    // create user profile form
    this.userProfileForm = this.createUserProfileForm();

    // disable form
    this.userProfileForm.disable();
  }

  /** Public **/

  // form controls
  public get formControls() {
    return this.userProfileForm.controls;
  }

  ngOnInit(): void {
  }

  // enable forms
  public enableForm() {
    this.fieldClass = 'form-control';
    // enable forms
    this.userProfileForm.enable();
  }

  public resendConfirmationEmail() {
    // set userResendConfirmationFormValue
    const userResendConfirmationFormValue: UserResendConfirmationForm = {
      email: this.userStorageService.getUserEmail()
    };

    // resend user confirmation email via api
    this.userApiService.resendUserConfirmationEmail(userResendConfirmationFormValue);
  }

  // update user profile from forms
  public updateUserProfile(userProfileFormValue: UserProfileForm) {
    // add user id to the value
    userProfileFormValue.id = this.userStorageService.getUserId();

    // update user via api
    this.userApiService.updateUser(userProfileFormValue);
  }

  // update user profile image
  public updateUserProfileImage(selectedProfileImage: File) {
    // update user profile image via api
    this.userApiService.updateUserProfileImage(selectedProfileImage);
  }

  /** Private **/

  private createUserProfileForm() {
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
}
