// Angular
import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// Application
import {
  CompanyDivisionAddress,
  CompanyDivisionAddressDestroyForm,
  CompanyDivisionAddressRegisterForm,
  CompanyDivisionAddressUpdateForm
} from '../../models/company_division_address.model';
import {CompanyApiService} from '../../../services/api/company-api.service';
import {CompanyStorageService} from '../../../services/storage/company-storage.service';

@Component({
  selector: 'app-company-division-address-form',
  templateUrl: './company-division-address-form.component.html',
  styleUrls: ['./company-division-address-form.component.scss']
})
export class CompanyDivisionAddressFormComponent implements OnInit {

  // pass company division variables
  @Input() companyDivisionId;
  @Input() companyDivisionAddressId;
  // initialize company division variables
  public companyDivisionAddress: CompanyDivisionAddress;
  // initializing company division address form
  public companyDivisionAddressForm: FormGroup;
  // form variables
  public fieldClass = 'form-control-plaintext';

  constructor(private formBuilder: FormBuilder,
              private companyApiService: CompanyApiService,
              private companyStorageService: CompanyStorageService) {
  }

  /** Public **/

  // form controls
  public get formControls() {
    return this.companyDivisionAddressForm.controls;
  }

  ngOnInit(): void {
    // update
    if (this.companyDivisionAddressId) {
      // retrieve company division address from local storage
      this.companyDivisionAddress = this.companyStorageService.getCompanyDivisionAddressById(this.companyDivisionAddressId);
    }

    // create division address form
    this.companyDivisionAddressForm = this.createCompanyDivisionAddressForm();

    // update
    if (this.companyDivisionAddressId) {
      // set fields as plain text
      this.fieldClass = 'form-control-plaintext';
      // disable division address form
      this.companyDivisionAddressForm.disable();
    }
    // register
    else {
      // set fields as form control
      this.fieldClass = 'form-control';
    }
  }

  // register company division address
  public registerCompanyDivisionAddress(companyDivisionAddressFormValue) {

    const companyDivisionAddressRegisterFormValue: CompanyDivisionAddressRegisterForm = {
      address: companyDivisionAddressFormValue.address,
      additionalAddressDetails: companyDivisionAddressFormValue.additionalAddressDetails,
      city: companyDivisionAddressFormValue.city,
      zipPostalCode: companyDivisionAddressFormValue.zipPostalCode,
      stateProvinceCounty: companyDivisionAddressFormValue.stateProvinceCounty,
      country: companyDivisionAddressFormValue.country,
      // formattedAddress:
      //     companyDivisionAddressFormValue.address +
      //     ', ' +
      //     companyDivisionAddressFormValue.additionalAddressDetails +
      //     ', ' +
      //     companyDivisionAddressFormValue.city +
      //     ', ' +
      //     companyDivisionAddressFormValue.zipPostalCode +
      //     ' ' +
      //     companyDivisionAddressFormValue.stateProvinceCounty +
      //     ', ' +
      //     companyDivisionAddressFormValue.country
      companyId: this.companyStorageService.getCompanyId()
    };

    // register the company division address via the API
    this.companyApiService.registerCompanyDivisionAddress(companyDivisionAddressRegisterFormValue, this.companyDivisionId);
  }

  // update company division address
  public updateCompanyDivisionAddress(companyDivisionAddressFormValue) {

    const companyDivisionAddressUpdateFormValue: CompanyDivisionAddressUpdateForm = {
      id: this.companyDivisionAddress.id,
      address: companyDivisionAddressFormValue.address,
      additionalAddressDetails: companyDivisionAddressFormValue.additionalAddressDetails,
      city: companyDivisionAddressFormValue.city,
      zipPostalCode: companyDivisionAddressFormValue.zipPostalCode,
      stateProvinceCounty: companyDivisionAddressFormValue.stateProvinceCounty,
      country: companyDivisionAddressFormValue.country,
      // formattedAddress:
      //     companyDivisionAddressFormValue.address +
      //     ', ' +
      //     companyDivisionAddressFormValue.additionalAddressDetails +
      //     ', ' +
      //     companyDivisionAddressFormValue.city +
      //     ', ' +
      //     companyDivisionAddressFormValue.zipPostalCode +
      //     ' ' +
      //     companyDivisionAddressFormValue.stateProvinceCounty +
      //     ', ' +
      //     companyDivisionAddressFormValue.country
    };

    // update company division address via api
    this.companyApiService.updateCompanyDivisionAddress(companyDivisionAddressUpdateFormValue, this.companyDivisionId);
  }

  // delete company division address from form
  public deleteCompanyDivisionAddress() {
    const companyDivisionAddressDeleteFormValue: CompanyDivisionAddressDestroyForm = {
      id: this.companyDivisionAddress.id
    };

    // delete company division address via the API
    this.companyApiService.deleteCompanyDivisionAddress(companyDivisionAddressDeleteFormValue, this.companyDivisionId);
  }

  // enable form
  public enableForm() {
    this.fieldClass = 'form-control';
    // enable form
    this.companyDivisionAddressForm.enable();
  }

  /** Private **/

  private createCompanyDivisionAddressForm() {
    let formGroup: FormGroup;
    // update
    if (this.companyDivisionAddressId) {
      formGroup = this.formBuilder.group({
        address: [
          this.companyDivisionAddress.address, [
            Validators.required
          ]
        ],
        additionalAddressDetails: [
          this.companyDivisionAddress.additionalAddressDetails
        ],
        city: [
          this.companyDivisionAddress.city, [
            Validators.required
          ]
        ],
        zipPostalCode: [
          this.companyDivisionAddress.zipPostalCode, [
            Validators.required
          ]
        ],
        stateProvinceCounty: [
          this.companyDivisionAddress.stateProvinceCounty, [
            Validators.required
          ]
        ],
        country: [
          this.companyDivisionAddress.country, [
            Validators.required
          ]
        ]
      });
    } else { // register
      formGroup = this.formBuilder.group({
        address: [
          '', [
            Validators.required
          ]
        ],
        additionalAddressDetails: [
          ''
        ],
        city: [
          '', [
            Validators.required
          ]
        ],
        zipPostalCode: [
          '', [
            Validators.required
          ]
        ],
        stateProvinceCounty: [
          '', [
            Validators.required
          ]
        ],
        country: [
          '', [
            Validators.required
          ]
        ]
      });
    }
    // return
    return formGroup;
  }

}
