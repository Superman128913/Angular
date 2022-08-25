// Angular
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// Application
import {GlobalConstants} from '../../global-constants';
import {UserRegistrationForm} from '../../models/user.model';
import {UserApiService} from '../../../services/api/user-api.service';
import {LoggerService} from '../../../services/logger.service';
import {UserStorageService} from '../../../services/storage/user-storage.service';

@Component({
  selector: 'app-user-register-form',
  templateUrl: './user-register-form.component.html',
  styleUrls: ['./user-register-form.component.scss']
})
export class UserRegisterFormComponent implements OnInit {

  // public
  public userRegistrationForm: FormGroup;
  public showPassword = false;
  public emailPlaceholder = GlobalConstants.emailPlaceholder;
  // paths
  public conditionsOfUsePath = GlobalConstants.conditionsOfUsePath;
  public privacyNoticePath = GlobalConstants.privacyNoticePath;
  public signInPath = GlobalConstants.signInPath;

  constructor(private formBuilder: FormBuilder,
              private loggerService: LoggerService,
              private userStorageService: UserStorageService,
              private userApiService: UserApiService) {
    // create user registration forms
    this.userRegistrationForm = this.createUserRegistrationForm();
  }

  /** Public **/

  // form controls
  public get formControls() {
    return this.userRegistrationForm.controls;
  }

  ngOnInit(): void {
  }

  // register user
  public registerUser(userRegistrationFormValue: UserRegistrationForm) {
    // register the user via the API
    this.userApiService.registerUser(userRegistrationFormValue);
  }

  // show or hide the password
  public togglePassword() {
    this.showPassword = !this.showPassword;
  }

  /** Private **/

  private createUserRegistrationForm() {
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
          Validators.required,
          Validators.minLength(GlobalConstants.passwordMinLength),
          Validators.maxLength(GlobalConstants.passwordMaxLength)
        ]
      ]
    });
  }
}
