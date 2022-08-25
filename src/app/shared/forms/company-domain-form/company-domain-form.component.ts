// Angular
import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
// Application
import {CompanyApiService} from '../../../services/api/company-api.service';
import {LoggerService} from '../../../services/logger.service';
import {UserStorageService} from '../../../services/storage/user-storage.service';
import {CompanyStorageService} from '../../../services/storage/company-storage.service';
import {GlobalConstants} from '../../global-constants';
import {
  CompanyDomain,
  CompanyDomainDeleteForm,
  CompanyDomainRegisterForm,
  CompanyDomainResendConfirmationForm
} from '../../models/company_domain.model';

@Component({
  selector: 'app-company-domain-form',
  templateUrl: './company-domain-form.component.html',
  styleUrls: ['./company-domain-form.component.scss']
})
export class CompanyDomainFormComponent implements OnInit {

  // initialize company domain registration form
  public companyDomainsForm: FormGroup;
  // private
  private fileName = 'CompanyDomainFormComponent';

  constructor(public companyApiService: CompanyApiService,
              public loggerService: LoggerService,
              private formBuilder: FormBuilder,
              private userStorageService: UserStorageService,
              private companyStorageService: CompanyStorageService) {
    // create company domains form
    this.companyDomainsForm = this.createCompanyDomainsForm();

    // set company domains list
    const companyDomainsList = this.companyStorageService.getCompanyDomains();

    // create domain items
    if (companyDomainsList.length > 0) {
      for (const companyDomain of companyDomainsList) {
        // log company domain
        this.loggerService.debug(this.fileName, 'constructor', 'companyDomain', companyDomain);

        // create company domain item with company domain
        // this.addCompanyDomainItem(companyDomain);
        this.addCompanyDomain(companyDomain);
      }
    }
    // create blank domain item
    this.addCompanyDomain();
  }

  /** Public **/

  // form controls
  public get formControls() {
    return this.companyDomainsForm.controls;
  }

  public get companyDomains() {
    return this.formControls[GlobalConstants.companyDomains] as FormArray;
  }

  ngOnInit(): void {
  }

  public addCompanyDomain(companyDomainFormValue?: CompanyDomain) {
    let domain;
    if (companyDomainFormValue?.domain) {
      domain = companyDomainFormValue?.domain;
    } else if (companyDomainFormValue?.unconfirmedDomain) {
      domain = companyDomainFormValue?.unconfirmedDomain;
    }

    const domainFormGroup = this.formBuilder.group({
      domain: [
        {
          value: domain,
          disabled: companyDomainFormValue?.confirmed === true || companyDomainFormValue?.confirmed === false
        },
        [
          Validators.required,
          Validators.pattern(GlobalConstants.domainPattern)
        ]
      ],
      confirmed: [
        companyDomainFormValue?.confirmed
      ],
      added: [
        !companyDomainFormValue // true if companyDomainFormValue is there, false otherwise
      ]
    });

    // push form group
    this.companyDomains.push(domainFormGroup);
  }

  public removeCompanyDomain(index: number) {
    // remove at index
    this.companyDomains.removeAt(index);
  }

  // register company domain
  public registerCompanyDomain(companyDomain: CompanyDomain) {
    // function name
    const functionName = 'registerCompanyDomain';

    const companyDomainRegisterFormValue: CompanyDomainRegisterForm = {
      unconfirmedDomain: companyDomain.domain,
      companyId: this.companyStorageService.getCompanyId()
    };

    // log value
    this.loggerService.debug(this.fileName, functionName, 'companyDomainRegisterFormValue', companyDomainRegisterFormValue);

    // register company domain via the API
    // subscribe to dynamically update the domains array
    this.companyApiService.registerCompanyDomain(companyDomainRegisterFormValue).subscribe({
      next: (next: any) => {
        // log data
        this.loggerService.debug(this.fileName, functionName, 'next', next);

        // get index
        const index = this.companyDomains.value.findIndex((x: CompanyDomain) => x.domain === companyDomainRegisterFormValue.unconfirmedDomain);
        // remove domain in array
        this.removeCompanyDomain(index);

        console.log(companyDomain);

        companyDomain.domain = null;
        companyDomain.unconfirmedDomain = companyDomainRegisterFormValue.unconfirmedDomain;
        companyDomain.confirmed = false;
        companyDomain.added = true;

        // add company domain
        this.addCompanyDomain(companyDomain);

        // create blank domain item
        this.addCompanyDomain();
      },
      error: (error) => {
        // log error
        this.loggerService.error(this.fileName, functionName, 'error', error);
      },
      complete: () => {
        // log message
        this.loggerService.info(this.fileName, functionName, 'complete', '');
      }
    });
  }

  // delete company domain
  public deleteCompanyDomain(index: number,
                             domain: string) {
    // function name
    const functionName = 'deleteCompanyDomain';

    // get company domain id
    const companyDomainsList = this.companyStorageService.getCompanyDomains();

    // log data
    this.loggerService.debug(this.fileName, functionName, 'companyDomainsList', companyDomainsList);

    let companyDomainId;
    // iterate through company domains for singular company domain
    for (const companyDomain of companyDomainsList) {
      if (companyDomain.domain === domain) {
        // set company domain id variable
        companyDomainId = companyDomain.id;
      } else if (companyDomain.unconfirmedDomain === domain) {
        // set company domain id variable
        companyDomainId = companyDomain.id;
      }
      // log data
      this.loggerService.debug(this.fileName, functionName, 'companyDomainId', companyDomainId);
    }

    const companyDomainDeleteFormValue: CompanyDomainDeleteForm = {
      id: companyDomainId
    };

    // delete company domain via the API
    // subscribe to dynamically update the domains array
    this.companyApiService.deleteCompanyDomain(companyDomainDeleteFormValue).subscribe({
      next: (next: any) => {
        // log data
        this.loggerService.debug(this.fileName, functionName, 'next', next);

        // remove domain in array
        this.removeCompanyDomain(index);

        // when no domains are present add an empty company domain item
        if (this.companyDomains.length === 0) {

          // create blank domain item
          this.addCompanyDomain();
        }
      },
      error: (error) => {
        // log error
        this.loggerService.error(this.fileName, functionName, 'error', error);
      },
      complete: () => {
        // log message
        this.loggerService.info(this.fileName, functionName, 'complete', '');
      }
    });
  }

  // resend company domain confirmation email
  public resendCompanyDomainConfirmationEmail(newDomain: string) {
    // set form values
    const companyDomainResendConfirmationFormValue: CompanyDomainResendConfirmationForm = {
      unconfirmedDomain: newDomain
    };

    // resend confirmation company domain via the API
    this.companyApiService.resendCompanyDomainConfirmationEmail(companyDomainResendConfirmationFormValue);
  }

  /** Private **/

  private createCompanyDomainsForm() {
    return this.formBuilder.group({
      companyDomains: this.formBuilder.array([])
    });
  }
}
