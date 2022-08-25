// Angular
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// Application
import {UserChangePasswordForm} from '../../models/user.model';
import {UserApiService} from '../../../services/api/user-api.service';
import {UserStorageService} from '../../../services/storage/user-storage.service';
import {GlobalConstants} from '../../global-constants';

@Component({
  selector: 'app-user-change-password-form',
  templateUrl: './user-change-password-form.component.html',
  styleUrls: ['./user-change-password-form.component.scss']
})
export class UserChangePasswordFormComponent implements OnInit {

  // public
  public userChangePasswordForm: FormGroup;
  public showPassword = false;

  constructor(private formBuilder: FormBuilder,
              private userApiService: UserApiService,
              private userStorageService: UserStorageService) {
    // create user change password form
    this.userChangePasswordForm = this.createUserChangePasswordForm();
  }

  /** Public **/

  // form controls
  public get formControls() {
    return this.userChangePasswordForm.controls;
  }

  ngOnInit(): void {
  }

  // change password
  public changePassword(userChangePasswordFormValue: UserChangePasswordForm) {
    // set form values
    userChangePasswordFormValue.id = this.userStorageService.getUserId();
    userChangePasswordFormValue.passwordConfirmation = userChangePasswordFormValue.password;

    // change password
    this.userApiService.changeUserPassword(userChangePasswordFormValue);
  }

  // show or hide the password
  public togglePassword() {
    this.showPassword = !this.showPassword;
  }

  /** Private **/

  private createUserChangePasswordForm() {
    return this.formBuilder.group({
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(GlobalConstants.passwordMinLength),
          Validators.maxLength(GlobalConstants.passwordMaxLength)
        ]
      ]
    });
  }

}
