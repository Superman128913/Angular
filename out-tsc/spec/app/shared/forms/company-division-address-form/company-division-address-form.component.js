import { __decorate } from "tslib";
// Angular
import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
let CompanyDivisionAddressFormComponent = class CompanyDivisionAddressFormComponent {
    constructor(formBuilder, companyApiService, companyStorageService) {
        this.formBuilder = formBuilder;
        this.companyApiService = companyApiService;
        this.companyStorageService = companyStorageService;
        // form variables
        this.fieldClass = 'form-control-plaintext';
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.companyDivisionAddressForm.controls;
    }
    ngOnInit() {
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
    registerCompanyDivisionAddress(companyDivisionAddressFormValue) {
        const companyDivisionAddressRegisterFormValue = {
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
    updateCompanyDivisionAddress(companyDivisionAddressFormValue) {
        const companyDivisionAddressUpdateFormValue = {
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
    deleteCompanyDivisionAddress() {
        const companyDivisionAddressDeleteFormValue = {
            id: this.companyDivisionAddress.id
        };
        // delete company division address via the API
        this.companyApiService.deleteCompanyDivisionAddress(companyDivisionAddressDeleteFormValue, this.companyDivisionId);
    }
    // enable form
    enableForm() {
        this.fieldClass = 'form-control';
        // enable form
        this.companyDivisionAddressForm.enable();
    }
    /** Private **/
    createCompanyDivisionAddressForm() {
        let formGroup;
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
        }
        else { // register
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
};
__decorate([
    Input()
], CompanyDivisionAddressFormComponent.prototype, "companyDivisionId", void 0);
__decorate([
    Input()
], CompanyDivisionAddressFormComponent.prototype, "companyDivisionAddressId", void 0);
CompanyDivisionAddressFormComponent = __decorate([
    Component({
        selector: 'app-company-division-address-form',
        templateUrl: './company-division-address-form.component.html',
        styleUrls: ['./company-division-address-form.component.scss']
    })
], CompanyDivisionAddressFormComponent);
export { CompanyDivisionAddressFormComponent };
//# sourceMappingURL=company-division-address-form.component.js.map