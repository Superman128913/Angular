import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let TraceabilityRequestFormComponent = class TraceabilityRequestFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.rForm = formBuilder.group({
            email: [null, Validators.required],
            requestMessage: [null, Validators.required],
        });
        this.rForm2 = formBuilder.group({
            files: [null, Validators.required]
        });
    }
    ngOnInit() {
    }
    addRequest(post) {
        console.log(post);
    }
};
TraceabilityRequestFormComponent = __decorate([
    Component({
        selector: 'app-traceability-request-new-form',
        templateUrl: './traceability-request-new-form.component.html',
        styleUrls: ['./traceability-request-new-form.component.scss']
    })
], TraceabilityRequestFormComponent);
export { TraceabilityRequestFormComponent };
//# sourceMappingURL=traceability-request-new-form.component.js.map
