import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { GlobalConstants } from '../../global-constants';
let UserSettingsFormModalComponent = class UserSettingsFormModalComponent {
    constructor(activeModal, userApiService, loggerService, notificationService) {
        this.activeModal = activeModal;
        this.userApiService = userApiService;
        this.loggerService = loggerService;
        this.notificationService = notificationService;
        // public
        // initializing sign in form
        this.supportEmail = GlobalConstants.supportEmail;
        this.qrCodeWidth = 256;
        this.url = null;
        // private
        this.fileName = 'UserSettingsFormModalComponent';
    }
    ngOnInit() {
    }
    // this called only if user entered full code
    onCodeCompleted(code) {
        // set function name
        const functionName = 'onCodeCompleted';
        // check qr code via the API
        this.userApiService.enableMfa(code).subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // close modal
                this.closeModal(true);
                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
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
    closeModal(mfaEnabled) {
        // close modal
        this.activeModal.close(mfaEnabled);
    }
};
UserSettingsFormModalComponent = __decorate([
    Component({
        selector: 'app-user-settings-form-modal',
        templateUrl: './user-settings-form-modal.component.html',
    })
], UserSettingsFormModalComponent);
export { UserSettingsFormModalComponent };
//# sourceMappingURL=user-settings-form-modal.component.js.map