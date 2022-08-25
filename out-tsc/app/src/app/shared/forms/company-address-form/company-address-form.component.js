import { __decorate } from "tslib";
// Angular
import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
let CompanyAddressFormComponent = class CompanyAddressFormComponent {
    constructor(formBuilder, companyApiService, storageService) {
        this.formBuilder = formBuilder;
        this.companyApiService = companyApiService;
        this.storageService = storageService;
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
            this.companyDivisionAddress = this.storageService.getCompanyDivisionAddressById(this.companyDivisionAddressId);
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
    // register or update company division address
    registerOrUpdateCompanyDivisionAddress(companyDivisionAddressFormValue) {
        // update
        if (this.companyDivisionAddressId) {
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
                //     companyDivisionAddressFormValue.country,
                companyDivisionId: this.companyDivisionId
            };
            // update company division address via api
            this.companyApiService.updateCompanyDivisionAddress(companyDivisionAddressUpdateFormValue);
        }
        // register
        else {
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
                //     companyDivisionAddressFormValue.country,
                companyDivisionId: this.companyDivisionId
            };
            // register the company division address via the API
            this.companyApiService.registerCompanyDivisionAddress(companyDivisionAddressRegisterFormValue);
        }
    }
    // delete company division address from form
    deleteCompanyDivisionAddress() {
        // delete company division address via the API
        this.companyApiService.deleteCompanyDivision(this.companyDivisionAddress.id);
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
], CompanyAddressFormComponent.prototype, "companyDivisionId", void 0);
__decorate([
    Input()
], CompanyAddressFormComponent.prototype, "companyDivisionAddressId", void 0);
CompanyAddressFormComponent = __decorate([
    Component({
        selector: 'app-company-address-form',
        templateUrl: './company-address-form.component.html',
        styleUrls: ['./company-address-form.component.scss']
    })
], CompanyAddressFormComponent);
export { CompanyAddressFormComponent };
//# sourceMappingURL=company-address-form.component.js.map