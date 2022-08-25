// Angular
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// Application
import {CompanyRegistrationForm} from '../../models/company.model';
import {GlobalConstants} from '../../global-constants';
import {UserStorageService} from '../../../services/storage/user-storage.service';
import {CompanyApiService} from '../../../services/api/company-api.service';
import {EmailDomainCompanyDomainValidator} from '../../validators/email-domain-company-domain.validator';

@Component({
  selector: 'app-company-register-form',
  templateUrl: './company-register-form.component.html',
  styleUrls: ['./company-register-form.component.scss']
})
export class CompanyRegisterFormComponent implements OnInit {

  // form
  public organizationRegistrationForm: FormGroup;
  public requestToJoinPath = GlobalConstants.companyJoinPath;

  constructor(private formBuilder: FormBuilder,
              private companyApiService: CompanyApiService,
              private userStorageService: UserStorageService) {
    // create form
    this.organizationRegistrationForm = this.createCompanyRegistrationForm();
  }

  /** Public **/

  // form controls
  public get formControls() {
    return this.organizationRegistrationForm.controls;
  }

  ngOnInit(): void {
  }

  // register company
  public registerOrganization(companyRegistrationFormValue: CompanyRegistrationForm) {

    console.log(companyRegistrationFormValue);

    // register company
    this.companyApiService.registerCompany(companyRegistrationFormValue);
  }

  /** Private **/

  private createCompanyRegistrationForm() {
    return this.formBuilder.group({
      name: [
        '',
        [
          Validators.required
        ]
      ],
      domain: [
        '',
        [
          Validators.pattern(GlobalConstants.domainPattern)
        ]
      ]
    }, {
      validators: [
        EmailDomainCompanyDomainValidator.doesEmailDomainMatchCompanyDomain(this.userStorageService.getUserEmail())
      ],
      updateOn: 'blur'
    });
  }
}
