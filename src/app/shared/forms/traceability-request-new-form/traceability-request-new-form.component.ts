// Angular
import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
// Application
import {SerialLotNumberValidator} from '../../validators/serial-lot-number.validator';
import {GlobalConstants} from '../../global-constants';
import {TraceabilityRequestCreateForm} from '../../models/traceability.model';
import {UserStorageService} from '../../../services/storage/user-storage.service';
import {TraceabilityStorageService} from '../../../services/storage/traceability-storage.service';
import {TraceabilityApiService} from '../../../services/api/traceability-api.service';
import {LoggerService} from '../../../services/logger.service';
import {NotificationService} from '../../../services/notification.service';

@Component({
    selector: 'app-traceability-request-new-form',
    templateUrl: './traceability-request-new-form.component.html',
    styleUrls: ['./traceability-request-new-form.component.scss']
})
export class TraceabilityRequestNewFormComponent implements OnInit {

    // public
    public traceabilityRequestNewForm: FormGroup;
    public emailPlaceholder = GlobalConstants.emailPlaceholder;
    // private
    private fileName = 'TraceabilityRequestNewFormComponent';

    // public emails: string[] = [];

    // addOnBlur = true;
    // readonly separatorKeysCodes = [ENTER, COMMA] as const;

    // public rForm2: FormGroup;
    // public emailAlert: 'Please fill username';
    // public messageAlert: 'Please fill in request message';
    // public sendAlert: string;
    // public sendError: false;

    constructor(private formBuilder: FormBuilder,
                private userStorageService: UserStorageService,
                private traceabilityStorageService: TraceabilityStorageService,
                private loggerService: LoggerService,
                private notificationService: NotificationService,
                private traceabilityApiService: TraceabilityApiService) {
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
    public get formControls() {
        return this.traceabilityRequestNewForm.controls;
    }

    public get emails() {
        return this.formControls['emails'] as FormArray;
    }

    ngOnInit(): void {
    }

    public addEmail() {
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

    public removeEmail(emailIndex: number) {
        this.emails.removeAt(emailIndex);
    }

    // create traceability request
    public createTraceabilityRequest(traceabilityRequestCreateFormValue: TraceabilityRequestCreateForm) {
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

    private createTraceabilityRequestNewForm() {
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
}
