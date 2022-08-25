import { __decorate } from "tslib";
// Angular
import { Component, EventEmitter, Input, isDevMode, Output } from '@angular/core';
let CompanyDevToolsComponent = class CompanyDevToolsComponent {
    constructor(companyApiService, loggerService, userStorageService, companyStorageService) {
        this.companyApiService = companyApiService;
        this.loggerService = loggerService;
        this.userStorageService = userStorageService;
        this.companyStorageService = companyStorageService;
        this.addCompanyDomainItem = new EventEmitter();
        this.registerCompanyDomain = new EventEmitter();
        // private
        this.fileName = 'CompanyDevToolsComponent';
    }
    ngOnInit() {
    }
    isDevMode() {
        return isDevMode();
    }
    // test register seed company
    testRegisterSeedCompany() {
        const newName = 'Aeroplicity';
        const newDomain = 'aeroplicity.com';
        const newEmail = 'jamey.rose@aeroplicity.com';
        // set form values
        const companyRegistrationFormValue = {
            name: newName,
            domain: newDomain
        };
        // register company via the API
        this.companyApiService.registerCompany(companyRegistrationFormValue);
    }
    // test register company
    testRegisterCompany() {
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let nameHash = '';
        for (let i = 0; i < 6; i++) {
            nameHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        let domainHash = '';
        for (let i = 0; i < 6; i++) {
            domainHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        domainHash += '.com';
        // set form values
        const companyRegistrationFormValue = {
            name: nameHash,
            domain: domainHash
        };
        // register company via the API
        this.companyApiService.registerCompany(companyRegistrationFormValue);
    }
    testDeleteCompany() {
        // set company id
        const companyId = this.companyStorageService.getCompanyId();
        // delete company via the api
        this.companyApiService.deleteCompany(companyId);
    }
    /**
     * Company Domain
     */
    testRegisterSeedCompanyDomain() {
        // newDomain
        const newDomain = 'aeroplicity.com';
        // userEmail
        const userEmail = this.userStorageService.getUserEmail();
        // set form values
        const companyDomainFormValue = {
            unconfirmedDomain: newDomain,
            companyId: this.companyStorageService.getCompanyId()
        };
        // call registerCompanyDomain via output
        this.registerCompanyDomain.emit(companyDomainFormValue);
    }
    testRegisterCompanyDomain() {
        // domainHash
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let domainHash = '';
        for (let i = 0; i < 6; i++) {
            domainHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        domainHash += '.com';
        // emailHash
        let emailHash = '';
        for (let i = 0; i < 6; i++) {
            emailHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        emailHash = emailHash + '@' + domainHash;
        // set form values
        const companyDomainFormValue = {
            unconfirmedDomain: domainHash,
            companyId: this.companyStorageService.getCompanyId()
        };
        // call addDomainItem via output
        this.addCompanyDomainItem.emit();
        // call registerCompanyDomain via output
        this.registerCompanyDomain.emit(companyDomainFormValue);
    }
    /**
     * Company Division
     */
    testRegisterCompanyDivision() {
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let nameHash = '';
        for (let i = 0; i < 12; i++) {
            nameHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        let einHash = '';
        for (let i = 0; i < 9; i++) {
            einHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        let dunsNumberHash = '';
        for (let i = 0; i < 9; i++) {
            dunsNumberHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        let cageCodeHash = '';
        for (let i = 0; i < 5; i++) {
            cageCodeHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        // set form values
        const companyDivisionRegisterFormValue = {
            name: nameHash,
            website: '',
            email: '',
            phone: '',
            fax: '',
            logoUrl: '',
            linkedInUrl: '',
            twitterHandle: '',
            ein: einHash,
            dunsNumber: dunsNumberHash,
            cageCode: cageCodeHash,
            about: '',
            companyId: this.companyStorageService.getCompanyId(),
            userId: this.userStorageService.getUserId()
        };
        // register company division via the API
        this.companyApiService.registerCompanyDivision(companyDivisionRegisterFormValue);
    }
    // delete company division from form
    testDeleteCompanyDivision() {
        // delete company division address via the API
        this.companyApiService.deleteCompanyDivision(this.companyDivision.id);
    }
    /**
     * Company Division Address
     */
    // register company division address
    testRegisterCompanyDivisionAddress() {
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let addressHash = '';
        for (let i = 0; i < 12; i++) {
            addressHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        let cityHash = '';
        for (let i = 0; i < 9; i++) {
            cityHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        let stateProvinceCountyHash = '';
        for (let i = 0; i < 9; i++) {
            stateProvinceCountyHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        let zipPostalCodeHash = '';
        for (let i = 0; i < 9; i++) {
            zipPostalCodeHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        let countryHash = '';
        for (let i = 0; i < 5; i++) {
            countryHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        // set form values
        const companyDivisionAddressRegisterFormValue = {
            address: addressHash,
            additionalAddressDetails: '',
            city: cityHash,
            zipPostalCode: zipPostalCodeHash,
            stateProvinceCounty: stateProvinceCountyHash,
            country: countryHash,
            // formattedAddress:
            //     addressHash +
            //     ', ' +
            //     cityHash +
            //     ', ' +
            //     zipPostalCodeHash +
            //     ' ' +
            //     stateProvinceCountyHash +
            //     ', ' +
            //     countryHash
            companyId: this.companyStorageService.getCompanyId()
        };
        // register company division via the API
        this.companyApiService.registerCompanyDivisionAddress(companyDivisionAddressRegisterFormValue, this.companyDivisionAddress.companyDivisionId);
    }
    // delete company division address from form
    testDeleteCompanyDivisionAddress() {
        const companyDivisionAddressDeleteFormValue = {
            id: this.companyDivisionAddress.id
        };
        // delete company division address via the API
        this.companyApiService.deleteCompanyDivisionAddress(companyDivisionAddressDeleteFormValue, this.companyDivisionAddress.companyDivisionId);
    }
    /**
     * Company User Invites
     */
    testCreateCompanyUserInvite() {
        const functionName = 'testInviteCompanyUser';
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let hash = '';
        for (let i = 0; i < 10; i++) {
            hash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        const emailHash = hash + '@aeroplicity.com';
        // set form values
        const inviteCompanyUserFormValue = {
            email: emailHash,
            administrator: true,
            // add user id to the value
            companyId: this.companyStorageService.getCompanyId()
        };
        // log
        this.loggerService.debug(this.fileName, functionName, 'inviteCompanyUserFormValue', inviteCompanyUserFormValue);
        // create company user invite
        this.companyApiService.createCompanyUserInvite(inviteCompanyUserFormValue);
    }
};
__decorate([
    Input()
], CompanyDevToolsComponent.prototype, "companyDivisionId", void 0);
__decorate([
    Input()
], CompanyDevToolsComponent.prototype, "companyDivision", void 0);
__decorate([
    Input()
], CompanyDevToolsComponent.prototype, "companyDivisionAddress", void 0);
__decorate([
    Output()
], CompanyDevToolsComponent.prototype, "addCompanyDomainItem", void 0);
__decorate([
    Output()
], CompanyDevToolsComponent.prototype, "registerCompanyDomain", void 0);
CompanyDevToolsComponent = __decorate([
    Component({
        selector: 'app-company-dev-tools',
        templateUrl: './company-dev-tools.component.html',
        styleUrls: ['./company-dev-tools.component.scss']
    })
], CompanyDevToolsComponent);
export { CompanyDevToolsComponent };
//# sourceMappingURL=company-dev-tools.component.js.map