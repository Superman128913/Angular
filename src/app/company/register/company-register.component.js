"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRegisterComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var global_constants_1 = require("../../shared/global-constants");
var CompanyRegisterComponent = /** @class */ (function () {
    function CompanyRegisterComponent(companyApiService, formBuilder, localStorage, storageService, loggerService) {
        this.companyApiService = companyApiService;
        this.formBuilder = formBuilder;
        this.localStorage = localStorage;
        this.storageService = storageService;
        this.loggerService = loggerService;
        // create company registration form
        this.companyRegistrationForm = this.createCompanyRegistrationForm();
        //      console.log(this.companyDomainsArray.value + len + hold)
        //         this.companyRegistrationForm.valueChanges.subscribe(checked => {
        //             if (checked.domain) {
        //               console.log(checked.domain)
        //                 console.log(this.companyRegistrationForm);
        //              this.companyRegistrationForm.controls.get('email').setValidators([
        //                 this.companyRegistrationForm.get('email').setValidators([
        //                     Validators.email,
        //                     Validators.pattern('^[A-Za-z0-9._%+-]+@' + checked.domain)
        //                 ]);
        //                 this.companyRegistrationForm.controls.updateValueAndValidity;
        //             }
        //         });
        // subscribe to domain value changes
        // this.form.domain.valueChanges.subscribe(value => {
        //     this.form.email.updateValueAndValidity();
        // });
        // // subscribe to email value changes
        // this.form.email.valueChanges.subscribe(value => {
        //     this.form.domain.updateValueAndValidity();
        // });
        // this.userService.validateToken().subscribe(data => {
        //     this.currentUserData = this.userService.currentUserData();
        //     console.log('currentUserData: ', this.currentUserData);
        //     if (this.currentUserData) {
        //         this.userId = this.currentUserData.id;
        //         this.userCompanyId = this.currentUserData.company_id;
        //         this.validateEmail();
        //     }
        //     this.form.patchValue({userId: this.userId});
        //     // console.log(this.apiService.isUserSignedIn())
        //     // console.log(this.currentUserData.id)
        // });
    }
    Object.defineProperty(CompanyRegisterComponent.prototype, "f", {
        /** Public **/
        // convenience getter for easy access to form fields
        get: function () {
            return this.companyRegistrationForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    CompanyRegisterComponent.prototype.ngOnInit = function () {
    };
    // register company
    CompanyRegisterComponent.prototype.registerCompany = function (companyRegistrationFormValue) {
        // add user id to the value
        companyRegistrationFormValue.userId = this.storageService.getUserId();
        // log company registration form value
        this.loggerService.debug('companyRegisterComponent', 'registerCompany', 'companyRegistrationFormValue', companyRegistrationFormValue);
        // register the user via the API
        this.companyApiService.registerCompany(companyRegistrationFormValue);
    };
    // dev mode helpers
    CompanyRegisterComponent.prototype.isDevMode = function () {
        return (0, core_1.isDevMode)();
    };
    // test register seed company
    CompanyRegisterComponent.prototype.testRegisterSeedCompany = function () {
        var newName = 'Aeroplicity';
        var newDomain = 'aeroplicity.com';
        var newEmail = 'jamey.rose@aeroplicity.com';
        // set form values
        var companyRegistrationFormValue = {
            name: newName,
            domain: newDomain,
            email: newEmail,
            // add user id to the value
            userId: this.storageService.getUserId()
        };
        // register company via the API
        this.companyApiService.registerCompany(companyRegistrationFormValue);
    };
    // test register company
    CompanyRegisterComponent.prototype.testRegisterCompany = function () {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var nameHash = '';
        for (var i = 0; i < 6; i++) {
            nameHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        var domainHash = '';
        for (var i = 0; i < 6; i++) {
            domainHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        domainHash += '.com';
        // set form values
        var companyRegistrationFormValue = {
            name: nameHash,
            domain: domainHash,
            email: 'abc@' + domainHash,
            // add user id to the value
            userId: this.storageService.getUserId()
        };
        // register company via the API
        this.companyApiService.registerCompany(companyRegistrationFormValue);
    };
    // validateEmail() {
    //     const str = this.currentUserData.uid;
    //     //var check = this.form.value.domain
    //     const pos = str.indexOf('@') + 1;
    //     const sub = str.substring(pos);
    //     if (sub.indexOf > -1) {
    //         return false;
    //     }
    //     console.log('Sub: ', sub);
    //
    //     this.apiService.get('company_domains_by_domain?domain=' + sub).subscribe((domain: Domain) => {
    //         //Set local array
    //         console.log('Data: ', domain);
    //         if (domain) {
    //             if (domain.companyId !== undefined) {
    //                 console.log('Email belongs to company ID: ' + domain.companyId);
    //                 this.emailCompanyId = domain.companyId;
    //                 this.getDivisionList();
    //             } else {
    //                 console.log('Email does not belong to a company ID');
    //                 this.loaded = true;
    //             }
    //         }
    //     });
    // }
    //
    // validateEmail2() {
    //     const str = this.currentUserData.uid;
    //     const check = this.form.value.domain;
    //     const pos = str.indexOf('@') + 1;
    //     const sub = str.substring(pos);
    //     if (sub.indexOf > -1) {
    //         return false;
    //     }
    //     console.log('Sub: ', sub);
    //     if (sub === check) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    //
    // getDivisionList() {
    //     this.apiService.get('company_divisions_by_company/' + this.emailCompanyId).subscribe((r: [CompanyDivision]) => {
    //         //this.getProducts(); Do something next?
    //         //console.log("Success?")
    //         console.log(r);
    //         r.sort((a, b) => a.name > b.name ? 1 : -1); //Sort by name
    //         this.divisionList = r;
    //         this.loaded = true;
    //     });
    // }
    //
    // joinDivision(divisionId) { //Join division level/role later - for now join company
    //     //Do stuff
    //     console.log(this.emailCompanyId);
    //
    //     // var userForm = new FormGroup({
    //     //   id: new FormControl(''),
    //     //   company_id: new FormControl(''),
    //     // });
    //
    //     //userForm.patchValue({id: this.user_id, company_id: this.email_company_id})
    //     let userForm: any = [];
    //     // userForm.push({
    //     //   id: this.user_id,
    //     //   company_id: this.email_company_id
    //     // })
    //     userForm = {companyId: this.emailCompanyId};
    //     console.log('userForm: ', userForm);
    //     //userForm.id = this.user_id;
    //     //userForm.company_id = this.email_company_id
    //     //return false;
    //     this.apiService.put('users/' + this.userId, userForm).subscribe((r: User) => {
    //         //this.getProducts(); Do something next?
    //         //console.log("Success?")
    //         console.log('Response: ', r);
    //         this.router.navigate(['/company/dashboard']);
    //         //if (r.name) this.router.navigate(['/company/dashboard']);
    //         //else console.log("Something went wrong")
    //     });
    // }
    //
    // getControl(index: number, field: string): FormControl {
    //     return this.controls.at(index).get(field) as FormControl;
    // }
    //
    // public create(form) {
    //     //this.company
    //     //console.log(this.company);
    //     this.apiService.post('companies/', form).subscribe((r) => {
    //         //this.getProducts(); Do something next?
    //         //console.log("Success?")
    //         console.log('Post results: ', r);
    //         this.router.navigate(['/company/dashboard']);
    //         return true;
    //     });
    //     //return true;
    // }
    //
    // onFormSubmit() {
    //     this.submitted = true;
    //
    //     // stop here if form is invalid
    //     if (this.form.invalid) {
    //         return;
    //     }
    //
    //
    //     // console.log(this.form.controls.name.value);
    //     console.log('Raw form: ', this.form.value);
    //     //var res = false;
    //     //console.log(this.user_id);
    //
    //     if (this.validateEmail2()) {
    //         this.create(this.form.value);
    //     } else {
    //         return console.log('Domain does not match user\'s email');
    //     }
    //     //console.log(res)
    //
    //     //Do stuff
    //     // this.apiService.post('company/', this.models).subscribe((r)=>{
    //     //   //more stuff?
    //     //   return true;
    //     // });
    // }
    /** Private **/
    CompanyRegisterComponent.prototype.createCompanyRegistrationForm = function () {
        return this.formBuilder.group({
            name: [
                '', [
                    forms_1.Validators.required
                ]
            ],
            domain: [
                '', [
                    forms_1.Validators.pattern(global_constants_1.GlobalConstants.domainPattern)
                    // conditionalValidator(
                    //     () => this.companyRegistrationForm.value.email,
                    //     Validators.required,
                    //     'requiredError'
                    // )
                ]
            ],
            email: [
                '', [
                    forms_1.Validators.email,
                    forms_1.Validators.pattern(global_constants_1.GlobalConstants.emailPattern)
                    // conditionalValidator(
                    //     () => this.companyRegistrationForm.get('domain').value,
                    //     Validators.required,
                    //     'requiredError'
                    // )
                ]
            ]
        }, { validators: doesEmailDomainMatchCompanyDomain });
    };
    CompanyRegisterComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-company-register',
            templateUrl: './company-register.component.html',
            styleUrls: ['./company-register.component.scss']
        })
    ], CompanyRegisterComponent);
    return CompanyRegisterComponent;
}());
exports.CompanyRegisterComponent = CompanyRegisterComponent;
// TODO - move to external function
function doesEmailDomainMatchCompanyDomain(control) {
    var domain = control.value.domain;
    var email = control.value.email;
    var pos = email.indexOf('@') + 1;
    var sub = email.substring(pos);
    if (control.value && domain !== sub) {
        return { emailMatches: false };
    }
    // must return null for validator to work
    return null;
}
function conditionalValidator(predicate, validator, errorNamespace) {
    console.log(predicate());
    return function (formControl) {
        if (!formControl.parent) {
            return null;
        }
        var error = null;
        if (predicate()) {
            error = validator(formControl);
        }
        if (errorNamespace && error) {
            var customError = {};
            customError[errorNamespace] = error;
            error = customError;
        }
        console.log(error);
        return error;
    };
}
