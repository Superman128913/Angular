// Angular
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// Application
import {GlobalConstants} from '../../global-constants';
import {UserStorageService} from '../../../services/storage/user-storage.service';
import {CompanyApiService} from '../../../services/api/company-api.service';
import {CompanyUserRequestCreateForm} from '../../models/company_user_request.model';

@Component({
  selector: 'app-company-user-request-form',
  templateUrl: './company-user-request-form.component.html',
  styleUrls: ['./company-user-request-form.component.scss']
})
export class CompanyUserRequestFormComponent implements OnInit {

  // form
  public companyUserRequestForm: FormGroup;
  public companyRegisterPath = GlobalConstants.companyRegisterPath;

  constructor(private formBuilder: FormBuilder,
              private companyApiService: CompanyApiService,
              private userStorageService: UserStorageService) {
    // create form
    this.companyUserRequestForm = this.createCompanyUserRequestForm();
  }

  /** Public **/

  // form controls
  public get formControls() {
    return this.companyUserRequestForm.controls;
  }

  ngOnInit(): void {
  }

  // create company user request
  public createCompanyUserRequest(companyUserRequestCreateFormValue: CompanyUserRequestCreateForm) {
    // create company user request
    this.companyApiService.createCompanyUserRequest(companyUserRequestCreateFormValue);
  }

  /** Private **/

  private createCompanyUserRequestForm() {
    return this.formBuilder.group({
      domain: [
        this.userStorageService.getUserDomain(),
        [
          Validators.pattern(GlobalConstants.domainPattern),
          Validators.required
        ]
      ]
    });
  }
}
