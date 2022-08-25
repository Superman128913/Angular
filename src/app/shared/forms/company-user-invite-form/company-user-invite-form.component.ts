// Angular
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// Application
import {CompanyUserInviteCreateForm} from '../../models/company_user_invite.model';
import {CompanyApiService} from '../../../services/api/company-api.service';
import {UserStorageService} from '../../../services/storage/user-storage.service';
import {CompanyStorageService} from '../../../services/storage/company-storage.service';
import {LoggerService} from '../../../services/logger.service';
import {GlobalConstants} from '../../global-constants';

@Component({
  selector: 'app-company-user-invite-form',
  templateUrl: './company-user-invite-form.component.html',
  styleUrls: ['./company-user-invite-form.component.scss']
})
export class CompanyUserInviteFormComponent implements OnInit {

  // public
  public companyUserInviteForm: FormGroup;
  public isUserCompanyAdministrator: boolean | undefined = false;
  public emailPlaceholder = GlobalConstants.emailPlaceholder;
  // private
  private fileName = 'CompanyUserInviteFormComponent';

  constructor(private formBuilder: FormBuilder,
              private companyApiService: CompanyApiService,
              private userStorageService: UserStorageService,
              private companyStorageService: CompanyStorageService,
              private loggerService: LoggerService) {
    // create company user invite form
    this.companyUserInviteForm = this.createCompanyUserInviteForm();

    // set is user company administrator
    this.isUserCompanyAdministrator = this.userStorageService.isCurrentUserCompanyAdmin();
    // log is user company administrator
    this.loggerService.debug(this.fileName, 'constructor', 'isUserCompanyAdministrator', this.isUserCompanyAdministrator);
  }

  /** Public **/

  // form controls
  public get formControls() {
    return this.companyUserInviteForm.controls;
  }

  ngOnInit(): void {
  }

  public onCheckboxChange(e: any) {
    if (e.target.checked) {
      if (e.target.value === 'administrator') {
        this.formControls['administrator'].setValue(true);
      }
    } else {
      if (e.target.value === 'administrator') {
        this.formControls['administrator'].setValue(false);
      }
    }
  }

  // create company user invite
  public createCompanyUserInvite(companyUserInviteFormValue: CompanyUserInviteCreateForm) {
    // add values
    companyUserInviteFormValue.companyId = this.companyStorageService.getCompanyId();

    // create company user invite
    this.companyApiService.createCompanyUserInvite(companyUserInviteFormValue);
  }

  /** Private **/

  private createCompanyUserInviteForm() {
    return this.formBuilder.group({
      email: [
        '', [
          Validators.required,
          Validators.email,
          Validators.pattern(GlobalConstants.emailPattern)
        ]
      ],
      administrator: [
        false
      ]
    });
  }

}
