// Angular
import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// Application
import {CompanyDivision, CompanyDivisionRegisterForm, CompanyDivisionUpdateForm} from '../../models/company_division.model';
import {CompanyApiService} from '../../../services/api/company-api.service';
import {UserStorageService} from '../../../services/storage/user-storage.service';
import {CompanyStorageService} from '../../../services/storage/company-storage.service';
import {GlobalConstants} from '../../global-constants';

@Component({
  selector: 'app-company-division-form',
  templateUrl: './company-division-form.component.html',
  styleUrls: ['./company-division-form.component.scss']
})
export class CompanyDivisionFormComponent implements OnInit {

  // pass company division variables
  @Input() companyDivisionId;
  // initialize company division variables
  public companyDivision: CompanyDivision;
  // initializing company division form
  public companyDivisionForm: FormGroup;
  // form variables
  public fieldClass = 'form-control-plaintext';

  constructor(private formBuilder: FormBuilder,
              private companyApiService: CompanyApiService,
              private userStorageService: UserStorageService,
              private companyStorageService: CompanyStorageService) {
  }

  /** Public **/

  // form controls
  public get formControls() {
    return this.companyDivisionForm.controls;
  }

  ngOnInit(): void {
    // update
    if (this.companyDivisionId) {
      // retrieve company division from local storage
      this.companyDivision = this.companyStorageService.getCompanyDivisionById(this.companyDivisionId);
    }

    // create company division form
    this.companyDivisionForm = this.createCompanyDivisionForm();

    // update
    if (this.companyDivisionId) {
      // set fields as plain text
      this.fieldClass = 'form-control-plaintext';
      // disable division form
      this.companyDivisionForm.disable();
    }
    // register
    else {
      // set fields as form control
      this.fieldClass = 'form-control';
    }
  }

  // enable form
  public enableForm() {
    this.fieldClass = 'form-control';
    // enable form
    this.companyDivisionForm.enable();
  }

  // register company division
  public registerCompanyDivision(companyDivisionFormValue) {

    const companyDivisionRegisterFormValue: CompanyDivisionRegisterForm = {
      name: companyDivisionFormValue.name,
      website: companyDivisionFormValue.website,
      email: companyDivisionFormValue.email,
      phone: companyDivisionFormValue.phone,
      fax: companyDivisionFormValue.fax,
      ein: companyDivisionFormValue.ein,
      dunsNumber: companyDivisionFormValue.dunsNumber,
      cageCode: companyDivisionFormValue.cageCode,
      about: companyDivisionFormValue.about,
      logoUrl: companyDivisionFormValue.logoUrl,
      linkedInUrl: companyDivisionFormValue.linkedInUrl,
      twitterHandle: companyDivisionFormValue.twitterHandle,
      companyId: this.companyStorageService.getCompanyId(),
      userId: this.userStorageService.getUserId()
    };

    // register the company division via the API
    this.companyApiService.registerCompanyDivision(companyDivisionRegisterFormValue);
  }

  // update company division
  public updateCompanyDivision(companyDivisionFormValue) {

    const companyDivisionUpdateFormValue: CompanyDivisionUpdateForm = {
      id: this.companyDivision.id,
      name: companyDivisionFormValue.name,
      website: companyDivisionFormValue.website,
      email: companyDivisionFormValue.email,
      phone: companyDivisionFormValue.phone,
      fax: companyDivisionFormValue.fax,
      ein: companyDivisionFormValue.ein,
      dunsNumber: companyDivisionFormValue.dunsNumber,
      cageCode: companyDivisionFormValue.cageCode,
      about: companyDivisionFormValue.about,
      logoUrl: companyDivisionFormValue.logoUrl,
      linkedInUrl: companyDivisionFormValue.linkedInUrl,
      twitterHandle: companyDivisionFormValue.twitterHandle,
      companyId: this.companyStorageService.getCompanyId(),
      userId: this.userStorageService.getUserId()
    };

    // update company division via api
    this.companyApiService.updateCompanyDivision(companyDivisionUpdateFormValue);
  }

  // delete company division from form
  public deleteCompanyDivision() {
    // delete company division via the API
    this.companyApiService.deleteCompanyDivision(this.companyDivision.id);
  }

  /** Private **/

  private createCompanyDivisionForm() {
    return this.formBuilder.group({
      name: [
        this.companyDivision?.name,
        [
          Validators.required
        ]
      ],
      website: [
        this.companyDivision?.website,
        [
          Validators.pattern(GlobalConstants.websitePattern)
        ]
      ],
      email: [
        this.companyDivision?.email,
        [
          Validators.email,
          Validators.pattern(GlobalConstants.emailPattern)
        ]
      ],
      phone: [
        this.companyDivision?.phone
      ],
      fax: [
        this.companyDivision?.fax
      ],
      ein: [
        this.companyDivision?.ein, [
          Validators.minLength(GlobalConstants.einMinLength),
          Validators.maxLength(GlobalConstants.einMaxLength),
          Validators.pattern(GlobalConstants.einPattern)
        ]
      ],
      dunsNumber: [
        this.companyDivision?.dunsNumber, [
          Validators.minLength(GlobalConstants.dunsNumberMinLength),
          Validators.maxLength(GlobalConstants.dunsNumberMaxLength),
          Validators.pattern(GlobalConstants.dunsNumberPattern)
        ]
      ],
      cageCode: [
        this.companyDivision?.cageCode, [
          Validators.minLength(GlobalConstants.cageCodeMinLength),
          Validators.maxLength(GlobalConstants.cageCodeMaxLength),
          Validators.pattern(GlobalConstants.cageCodePattern)
        ]
      ],
      about: [
        this.companyDivision?.about
      ],
      logoUrl: [
        this.companyDivision?.logoUrl
      ],
      linkedinUrl: [
        this.companyDivision?.linkedInUrl, [
          Validators.pattern(GlobalConstants.linkedInUrlPattern)
        ]
      ],
      twitterHandle: [
        this.companyDivision?.twitterHandle, [
          Validators.pattern(GlobalConstants.twitterHandlePattern)
        ]
      ]
    });
  }
}
