import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { GlobalConstants } from '../../global-constants';
let TraceabilityShareFormComponent = class TraceabilityShareFormComponent {
    constructor(formBuilder, FileShareApiService) {
        this.formBuilder = formBuilder;
        this.FileShareApiService = FileShareApiService;
        this.emailPlaceholder = GlobalConstants.emailPlaceholder;
        // private
        this.fileName = 'TraceabilityShareFormComponent';
        this.traceabilityShareForm = this.createTraceabilityShareForm();
        this.addEmail();
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
    // form controls
    get formControls() {
        return this.traceabilityShareForm.controls;
    }
    get emails() {
        return this.formControls['emails'];
    }
    handleShareFiles(formValue) {
        const rows = $('#dataTable').DataTable().rows({ selected: true });
        if (rows.count() < 1) {
            alert("Please select at least one file to share.");
            return;
        }
        let data = rows.data();
        let documentIds = [];
        for (var i = 0; i < data.length; i++)
            documentIds.push(data[i][0]);
        this.FileShareApiService.shareFiles({
            emails: formValue.emails,
            documentIds: documentIds,
        });
    }
    createTraceabilityShareForm() {
        return this.formBuilder.group({
            emails: this.formBuilder.array([]),
        }, {
            validators: [],
            updateOn: 'blur'
        });
    }
};
TraceabilityShareFormComponent = __decorate([
    Component({
        selector: 'app-traceability-share-form',
        templateUrl: './traceability-share-form.component.html',
        styleUrls: ['./traceability-share-form.component.scss']
    })
], TraceabilityShareFormComponent);
export { TraceabilityShareFormComponent };
//# sourceMappingURL=traceability-share-form.component.js.map