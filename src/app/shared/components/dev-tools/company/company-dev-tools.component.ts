// Angular
import {Component, EventEmitter, Input, isDevMode, OnInit, Output} from '@angular/core';
// Application
import {CompanyRegistrationForm} from '../../../models/company.model';
import {CompanyUserInviteCreateForm} from '../../../models/company_user_invite.model';
import {CompanyApiService} from '../../../../services/api/company-api.service';
import {LoggerService} from '../../../../services/logger.service';
import {UserStorageService} from '../../../../services/storage/user-storage.service';
import {CompanyStorageService} from '../../../../services/storage/company-storage.service';
import {CompanyDomainRegisterForm} from '../../../models/company_domain.model';
import {CompanyDivisionRegisterForm} from '../../../models/company_division.model';
import {
  CompanyDivisionAddressDestroyForm,
  CompanyDivisionAddressRegisterForm
} from '../../../models/company_division_address.model';

@Component({
  selector: 'app-company-dev-tools',
  templateUrl: './company-dev-tools.component.html',
  styleUrls: ['./company-dev-tools.component.scss']
})
export class CompanyDevToolsComponent implements OnInit {

  @Input() companyDivisionId;
  @Input() companyDivision;
  @Input() companyDivisionAddress;
  @Output() addCompanyDomainItem = new EventEmitter<any>();
  @Output() registerCompanyDomain = new EventEmitter<any>();
  // private
  private fileName = 'CompanyDevToolsComponent';

  constructor(private companyApiService: CompanyApiService,
              private loggerService: LoggerService,
              private userStorageService: UserStorageService,
              private companyStorageService: CompanyStorageService) {
  }

  ngOnInit(): void {
  }

  public isDevMode() {
    return isDevMode();
  }


  // test register seed company
  public testRegisterSeedCompany() {
    const newName = 'Aeroplicity';
    const newDomain = 'aeroplicity.com';
    const newEmail = 'jamey.rose@aeroplicity.com';

    // set form values
    const companyRegistrationFormValue: CompanyRegistrationForm = {
      name: newName,
      domain: newDomain
    };

    // register company via the API
    this.companyApiService.registerCompany(companyRegistrationFormValue);
  }

  // test register company
  public testRegisterCompany() {
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
    const companyRegistrationFormValue: CompanyRegistrationForm = {
      name: nameHash,
      domain: domainHash
    };

    // register company via the API
    this.companyApiService.registerCompany(companyRegistrationFormValue);
  }

  public testDeleteCompany() {
    // set company id
    const companyId = this.companyStorageService.getCompanyId();
    // delete company via the api
    this.companyApiService.deleteCompany(companyId);
  }

  /**
   * Company Domain
   */

  public testRegisterSeedCompanyDomain() {
    // newDomain
    const newDomain = 'aeroplicity.com';
    // userEmail
    const userEmail = this.userStorageService.getUserEmail();

    // set form values
    const companyDomainFormValue: CompanyDomainRegisterForm = {
      unconfirmedDomain: newDomain,
      companyId: this.companyStorageService.getCompanyId()
    };

    // call registerCompanyDomain via output
    this.registerCompanyDomain.emit(companyDomainFormValue);
  }

  public testRegisterCompanyDomain() {
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
    const companyDomainFormValue: CompanyDomainRegisterForm = {
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

  public testRegisterCompanyDivision() {
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
    const companyDivisionRegisterFormValue: CompanyDivisionRegisterForm = {
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
  public testDeleteCompanyDivision() {
    // delete company division address via the API
    this.companyApiService.deleteCompanyDivision(this.companyDivision.id);
  }

  /**
   * Company Division Address
   */

  // register company division address
  public testRegisterCompanyDivisionAddress() {
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
    const companyDivisionAddressRegisterFormValue: CompanyDivisionAddressRegisterForm = {
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
  public testDeleteCompanyDivisionAddress() {
    const companyDivisionAddressDeleteFormValue: CompanyDivisionAddressDestroyForm = {
      id: this.companyDivisionAddress.id
    };

    // delete company division address via the API
    this.companyApiService.deleteCompanyDivisionAddress(companyDivisionAddressDeleteFormValue, this.companyDivisionAddress.companyDivisionId);
  }

  /**
   * Company User Invites
   */

  public testCreateCompanyUserInvite() {
    const functionName = 'testInviteCompanyUser';

    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let hash = '';
    for (let i = 0; i < 10; i++) {
      hash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    const emailHash = hash + '@aeroplicity.com';

    // set form values
    const inviteCompanyUserFormValue: CompanyUserInviteCreateForm = {
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
}
