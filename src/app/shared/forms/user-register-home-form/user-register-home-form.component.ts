// Angular
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// Application
import {GlobalConstants} from '../../global-constants';
import {LoggerService} from '../../../services/logger.service';
import {UserStorageService} from '../../../services/storage/user-storage.service';

@Component({
  selector: 'app-user-register-home-form',
  templateUrl: './user-register-home-form.component.html',
  styleUrls: ['./user-register-home-form.component.scss']
})
export class UserRegisterHomeFormComponent implements OnInit {

  // public
  public userRegistrationRedirectForm: FormGroup;
  public emailPlaceholder = GlobalConstants.emailPlaceholder;
  // private
  private fileName = 'UserRegisterHomeFormComponent';

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private loggerService: LoggerService,
              private userStorageService: UserStorageService) {
    // create form
    this.userRegistrationRedirectForm = this.createUserRegistrationRedirectForm();
  }

  /** Public **/

  // form controls
  public get formControls() {
    return this.userRegistrationRedirectForm.controls;
  }

  ngOnInit(): void {
  }

  public redirectToUserRegisterForm(formValue) {
    // store email in session storage
    this.userStorageService.storeEmail(formValue.email);
    // navigate to register
    this.router.navigate([GlobalConstants.registerPath]).then(() => {
      // log message
      this.loggerService.info(this.fileName, 'redirectToUserRegisterForm', 'navigate', '');
    });
  }

  /** Private **/

  private createUserRegistrationRedirectForm() {
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
}
