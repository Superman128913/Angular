import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
// Application
import { SerialLotNumberValidator } from '../../validators/serial-lot-number.validator';
import { GlobalConstants } from '../../global-constants';
let TraceabilityRequestNewFormComponent = class TraceabilityRequestNewFormComponent {
    // public emails: string[] = [];
    // addOnBlur = true;
    // readonly separatorKeysCodes = [ENTER, COMMA] as const;
    // public rForm2: FormGroup;
    // public emailAlert: 'Please fill username';
    // public messageAlert: 'Please fill in request message';
    // public sendAlert: string;
    // public sendError: false;
    constructor(formBuilder, userStorageService, traceabilityStorageService, loggerService, notificationService, traceabilityApiService) {
        this.formBuilder = formBuilder;
        this.userStorageService = userStorageService;
        this.traceabilityStorageService = traceabilityStorageService;
        this.loggerService = loggerService;
        this.notificationService = notificationService;
        this.traceabilityApiService = traceabilityApiService;
        this.emailPlaceholder = GlobalConstants.emailPlaceholder;
        // private
        this.fileName = 'TraceabilityRequestNewFormComponent';
        // create form
        this.traceabilityRequestNewForm = this.createTraceabilityRequestNewForm();
        // add email
        this.addEmail();
        // this.rForm2 = formBuilder.group({
        //   files: [null, Validators.required]
        // });
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.traceabilityRequestNewForm.controls;
    }
    get emails() {
        return this.formControls['emails'];
    }
    ngOnInit() {
    }
    addEmail() {
        const emailFormGroup = this.formBuilder.group({
            email: [
                '',
                [
                    Validators.email,
                    Validators.pattern(GlobalConstants.emailPattern)
                ]
            ]
        });
        this.emails.push(emailFormGroup);
    }
    removeEmail(emailIndex) {
        this.emails.removeAt(emailIndex);
    }
    // create traceability request
    createTraceabilityRequest(traceabilityRequestCreateFormValue) {
        // set division id
        const companyDivisionId = this.traceabilityStorageService.getSelectedTraceabilityId();
        // add values
        traceabilityRequestCreateFormValue.traceabilityId = this.traceabilityStorageService.getTraceabilityId(companyDivisionId);
        traceabilityRequestCreateFormValue.userId = this.userStorageService.getUserId();
        // remove blank emails
        for (const [index, emailArray] of traceabilityRequestCreateFormValue.emails.entries()) {
            if (emailArray.email === '') {
                traceabilityRequestCreateFormValue.emails.splice(index, 1);
            }
        }
        // create traceability request
        this.traceabilityApiService.createTraceabilityRequest(traceabilityRequestCreateFormValue);
    }
    /** Private **/
    createTraceabilityRequestNewForm() {
        return this.formBuilder.group({
            emails: this.formBuilder.array([]),
            partNumber: [
                '',
                Validators.required
            ],
            serialNumber: [
                ''
            ],
            lotNumber: [
                ''
            ],
            poNumber: [
                ''
            ],
            message: [
                ''
            ]
        }, {
            validators: [
                SerialLotNumberValidator.serialOrLotNumberRequired
            ],
            updateOn: 'blur'
        });
    }
};
TraceabilityRequestNewFormComponent = __decorate([
    Component({
        selector: 'app-traceability-request-new-form',
        templateUrl: './traceability-request-new-form.component.html',
        styleUrls: ['./traceability-request-new-form.component.scss']
    })
], TraceabilityRequestNewFormComponent);
export { TraceabilityRequestNewFormComponent };
//# sourceMappingURL=traceability-request-new-form.component.js.map