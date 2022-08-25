// Angular
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// Libraries
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
// Application
import {GlobalConstants} from '../../global-constants';
import {UserOTPRequirementForm, UserSignInForm} from '../../models/user.model';
import {UserApiService} from '../../../services/api/user-api.service';
import {UserStorageService} from '../../../services/storage/user-storage.service';
import {UserSignInModalComponent} from '../../modals/user-sign-in-modal/user-sign-in-modal.component';

@Component({
  selector: 'app-user-sign-in-form',
  templateUrl: './user-sign-in-form.component.html',
  styleUrls: ['./user-sign-in-form.component.scss']
})
export class UserSignInFormComponent implements OnInit {

  // initializing sign in form
  public userSignInForm: FormGroup;
  // flag to show or hide the password
  public showPassword = false;
  //
  public emailPlaceholder = GlobalConstants.emailPlaceholder;
  // paths
  public conditionsOfUsePath = GlobalConstants.conditionsOfUsePath;
  public privacyNoticePath = GlobalConstants.privacyNoticePath;
  public registerPath = GlobalConstants.registerPath;
  public resetPasswordPath = GlobalConstants.resetPasswordPath;

  constructor(private formBuilder: FormBuilder,
              private userStorageService: UserStorageService,
              private userApiService: UserApiService,
              private modalService: NgbModal) {
    // create user sign in form
    this.userSignInForm = this.createUserSignInForm();
  }

  /** Public **/

  // form controls
  public get formControls() {
    return this.userSignInForm.controls;
  }

  ngOnInit(): void {
  }

  // show or hide the password
  public togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // sign in user
  public signInUser(userSignInFormValue: UserSignInForm) {
    const userOTPRequirementFormValue: UserOTPRequirementForm = {
      email: userSignInFormValue.email,
      password: userSignInFormValue.password
    };

    // check if user needs OTP
    this.userApiService.checkUserOTPRequirement(
        userOTPRequirementFormValue
    ).subscribe({
      next: (next: any) => {
        if (next.mfaEnabled) {
          this.openModal(
              userSignInFormValue.email,
              userSignInFormValue.password
          );
        } else {
          // sign in user via the API
          this.userApiService.signInUser(userSignInFormValue);
        }
      }
    });
  }

  public openModal(email: string,
                   password: string) {
    const modalRef: NgbModalRef = this.modalService.open(UserSignInModalComponent,
        {
          centered: true,
          backdrop: 'static',
          keyboard: false
        });
    modalRef.componentInstance.email = email;
    modalRef.componentInstance.password = password;
  }

  /** Private **/

  private createUserSignInForm() {
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
}
