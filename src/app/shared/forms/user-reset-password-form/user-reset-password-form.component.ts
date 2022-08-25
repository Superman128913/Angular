// Angular
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// Application
import {GlobalConstants} from '../../global-constants';
import {UserResetPasswordForm} from '../../models/user.model';
import {UserApiService} from '../../../services/api/user-api.service';

@Component({
  selector: 'app-user-reset-password-form',
  templateUrl: './user-reset-password-form.component.html',
  styleUrls: ['./user-reset-password-form.component.scss']
})
export class UserResetPasswordFormComponent implements OnInit {

  // public
  public userResetPasswordForm: FormGroup;
  public emailPlaceholder = GlobalConstants.emailPlaceholder;
  // paths
  public signInPath = GlobalConstants.signInPath;
  public registerPath = GlobalConstants.registerPath;

  constructor(private formBuilder: FormBuilder,
              private userApiService: UserApiService) {
    // create user reset password forms
    this.userResetPasswordForm = this.createUserResetPasswordForm();
  }

  /** Public **/

  // form controls
  public get formControls() {
    return this.userResetPasswordForm.controls;
  }

  ngOnInit(): void {
  }

  // reset password
  public resetPassword(userResetPasswordFormValue: UserResetPasswordForm) {
    // reset user password via the API
    this.userApiService.resetUserPassword(userResetPasswordFormValue);
  }

  /** Private **/

  private createUserResetPasswordForm() {
    return this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(GlobalConstants.emailPattern)
        ]
      ]
    });
  }
}
