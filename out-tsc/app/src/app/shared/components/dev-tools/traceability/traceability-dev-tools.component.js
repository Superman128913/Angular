import { __decorate } from "tslib";
// Angular
import { Component, isDevMode } from '@angular/core';
let TraceabilityDevToolsComponent = class TraceabilityDevToolsComponent {
    constructor(traceabilityApiService, userStorageService, companyStorageService, traceabilityStorageService) {
        this.traceabilityApiService = traceabilityApiService;
        this.userStorageService = userStorageService;
        this.companyStorageService = companyStorageService;
        this.traceabilityStorageService = traceabilityStorageService;
    }
    ngOnInit() {
    }
    isDevMode() {
        return isDevMode();
    }
    // test create traceability request - existing user
    testCreateTraceabilityRequestExistingUser() {
        // set form values
        const traceabilityRequestCreateFormValue = {
            emails: [
                { email: 'jerome.miastkowski@aeroplicity.com' },
                { email: 'jamey.rose@aeroplicity.com' }
            ],
            partNumber: '123',
            serialNumber: '456',
            lotNumber: '789',
            message: 'This is a test message. This is a test message. This is a test message. This is a test message.' +
                'This is a test message. This is a test message. This is a test message.',
            traceabilityId: this.traceabilityStorageService.getTraceabilityId(this.companyStorageService.getCompanyId()),
            userId: this.userStorageService.getUserId()
        };
        // register company via the API
        this.traceabilityApiService.createTraceabilityRequest(traceabilityRequestCreateFormValue);
    }
    // test create traceability request - random user
    testCreateTraceabilityRequestRandomUser() {
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let hash = '';
        for (let i = 0; i < 8; i++) {
            hash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        const randomEmail = hash + '@' + hash + '.com';
        // set form values
        const traceabilityRequestCreateFormValue = {
            emails: [
                { email: randomEmail }
            ],
            partNumber: '123',
            serialNumber: '456',
            lotNumber: '789',
            message: 'This is a test message. This is a test message. This is a test message. This is a test message.' +
                'This is a test message. This is a test message. This is a test message.',
            traceabilityId: this.traceabilityStorageService.getTraceabilityId(this.companyStorageService.getCompanyId()),
            userId: this.userStorageService.getUserId()
        };
        // register company via the API
        this.traceabilityApiService.createTraceabilityRequest(traceabilityRequestCreateFormValue);
    }
};
TraceabilityDevToolsComponent = __decorate([
    Component({
        selector: 'app-traceability-dev-tools',
        templateUrl: './traceability-dev-tools.component.html',
        styleUrls: ['./traceability-dev-tools.component.scss']
    })
], TraceabilityDevToolsComponent);
export { TraceabilityDevToolsComponent };
//# sourceMappingURL=traceability-dev-tools.component.js.map