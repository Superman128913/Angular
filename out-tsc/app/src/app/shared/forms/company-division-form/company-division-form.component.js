import { __decorate } from "tslib";
// Angular
import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { GlobalConstants } from '../../global-constants';
let CompanyDivisionFormComponent = class CompanyDivisionFormComponent {
    constructor(formBuilder, companyApiService, userStorageService, companyStorageService) {
        this.formBuilder = formBuilder;
        this.companyApiService = companyApiService;
        this.userStorageService = userStorageService;
        this.companyStorageService = companyStorageService;
        // form variables
        this.fieldClass = 'form-control-plaintext';
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.companyDivisionForm.controls;
    }
    ngOnInit() {
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
    enableForm() {
        this.fieldClass = 'form-control';
        // enable form
        this.companyDivisionForm.enable();
    }
    // register company division
    registerCompanyDivision(companyDivisionFormValue) {
        const companyDivisionRegisterFormValue = {
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
    updateCompanyDivision(companyDivisionFormValue) {
        const companyDivisionUpdateFormValue = {
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
    deleteCompanyDivision() {
        // delete company division via the API
        this.companyApiService.deleteCompanyDivision(this.companyDivision.id);
    }
    /** Private **/
    createCompanyDivisionForm() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return this.formBuilder.group({
            name: [
                (_a = this.companyDivision) === null || _a === void 0 ? void 0 : _a.name,
                [
                    Validators.required
                ]
            ],
            website: [
                (_b = this.companyDivision) === null || _b === void 0 ? void 0 : _b.website,
                [
                    Validators.pattern(GlobalConstants.websitePattern)
                ]
            ],
            email: [
                (_c = this.companyDivision) === null || _c === void 0 ? void 0 : _c.email,
                [
                    Validators.email,
                    Validators.pattern(GlobalConstants.emailPattern)
                ]
            ],
            phone: [
                (_d = this.companyDivision) === null || _d === void 0 ? void 0 : _d.phone
            ],
            fax: [
                (_e = this.companyDivision) === null || _e === void 0 ? void 0 : _e.fax
            ],
            ein: [
                (_f = this.companyDivision) === null || _f === void 0 ? void 0 : _f.ein,
                [
                    Validators.minLength(GlobalConstants.einMinLength),
                    Validators.maxLength(GlobalConstants.einMaxLength),
                    Validators.pattern(GlobalConstants.einPattern)
                ]
            ],
            dunsNumber: [
                (_g = this.companyDivision) === null || _g === void 0 ? void 0 : _g.dunsNumber,
                [
                    Validators.minLength(GlobalConstants.dunsNumberMinLength),
                    Validators.maxLength(GlobalConstants.dunsNumberMaxLength),
                    Validators.pattern(GlobalConstants.dunsNumberPattern)
                ]
            ],
            cageCode: [
                (_h = this.companyDivision) === null || _h === void 0 ? void 0 : _h.cageCode,
                [
                    Validators.minLength(GlobalConstants.cageCodeMinLength),
                    Validators.maxLength(GlobalConstants.cageCodeMaxLength),
                    Validators.pattern(GlobalConstants.cageCodePattern)
                ]
            ],
            about: [
                (_j = this.companyDivision) === null || _j === void 0 ? void 0 : _j.about
            ],
            logoUrl: [
                (_k = this.companyDivision) === null || _k === void 0 ? void 0 : _k.logoUrl
            ],
            linkedinUrl: [
                (_l = this.companyDivision) === null || _l === void 0 ? void 0 : _l.linkedInUrl,
                [
                    Validators.pattern(GlobalConstants.linkedInUrlPattern)
                ]
            ],
            twitterHandle: [
                (_m = this.companyDivision) === null || _m === void 0 ? void 0 : _m.twitterHandle,
                [
                    Validators.pattern(GlobalConstants.twitterHandlePattern)
                ]
            ]
        });
    }
};
__decorate([
    Input()
], CompanyDivisionFormComponent.prototype, "companyDivisionId", void 0);
CompanyDivisionFormComponent = __decorate([
    Component({
        selector: 'app-company-division-form',
        templateUrl: './company-division-form.component.html',
        styleUrls: ['./company-division-form.component.scss']
    })
], CompanyDivisionFormComponent);
export { CompanyDivisionFormComponent };
//# sourceMappingURL=company-division-form.component.js.map