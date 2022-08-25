import { __decorate } from "tslib";
// Angular
import { Component, Input } from '@angular/core';
import { UserSettingsFormModalComponent } from '../../modals/user-settings-form-modal/user-settings-form-modal.component';
let UserSettingsFormComponent = class UserSettingsFormComponent {
    constructor(formBuilder, userApiService, companyStorageService, traceabilityStorageService, fileShareStorageService, loggerService, modalService, notificationService) {
        this.formBuilder = formBuilder;
        this.userApiService = userApiService;
        this.companyStorageService = companyStorageService;
        this.traceabilityStorageService = traceabilityStorageService;
        this.fileShareStorageService = fileShareStorageService;
        this.loggerService = loggerService;
        this.modalService = modalService;
        this.notificationService = notificationService;
        // private
        this.fileName = 'UserSettingsFormComponent';
        // set default app ids
        this.defaultTraceabilityId = this.traceabilityStorageService.getDefaultTraceabilityId();
        this.defaultFileShareId = this.fileShareStorageService.getDefaultFileShareId();
        // create user settings form
        this.userSettingsForm = this.createUserSettingsForm();
        // set all apps
        this.traceabilitys = this.traceabilityStorageService.getTraceabilitys();
        this.fileShares = this.fileShareStorageService.getFileShares();
    }
    /** Public **/
    ngOnInit() {
        // set initial mfa enabled
        // NOTE: must be done in ngOnInit
        this.updateMfaEnabled(this.mfaEnabled);
    }
    enableOrDisableMfa() {
        // set function name
        const functionName = 'enableOrDisableMfa';
        // check if mfa is enabled
        if (this.mfaEnabled) {
            // disable mfa
            this.userApiService.disableMfa().subscribe({
                next: (response) => {
                    // log data
                    this.loggerService.debug(this.fileName, functionName, 'response', response);
                    // disable mfa
                    this.updateMfaEnabled(false);
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
        else { // mfa is disabled
            // get qr url to enable mfa
            this.userApiService.getQrUrl().subscribe({
                next: (response) => {
                    // log data
                    this.loggerService.debug(this.fileName, functionName, 'response', response);
                    // open modal
                    this.openModal(response?.url);
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
    }
    getCompanyDivisionNameByTraceabilityId(traceabilityId) {
        let name;
        if (traceabilityId) {
            name = this.companyStorageService.getCompanyDivisionNameByTraceabilityId(traceabilityId);
        }
        else {
            name = 'N/A';
        }
        return name;
    }
    getTraceabilityIdByCompanyDivisionName(name) {
        return this.companyStorageService.getTraceabilityIdByCompanyDivisionName(name);
    }
    updateUserSettingsTraceabilityId(id) {
        const userSettingsFormValue = {
            defaultTraceabilityId: id
        };
        this.userApiService.updateUserSettings(userSettingsFormValue);
    }
    getCompanyDivisionNameByFileShareId(fileShareId) {
        let name;
        if (fileShareId) {
            name = this.companyStorageService.getCompanyDivisionNameByFileShareId(fileShareId);
        }
        else {
            name = 'N/A';
        }
        return name;
    }
    getFileShareIdByCompanyDivisionName(name) {
        return this.companyStorageService.getFileShareIdByCompanyDivisionName(name);
    }
    updateUserSettingsFileShareId(id) {
        const userSettingsFormValue = {
            defaultFileShareId: id
        };
        this.userApiService.updateUserSettings(userSettingsFormValue);
    }
    /** Private **/
    createUserSettingsForm() {
        return this.formBuilder.group({
            mfa: this.mfaEnabled
        });
    }
    openModal(url) {
        const modalRef = this.modalService.open(UserSettingsFormModalComponent, {
            centered: true,
            backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.url = url;
        modalRef.result.then((result) => {
            // log data
            this.loggerService.debug(this.fileName, 'openModal', 'modal result', result);
            // update mfa enabled
            this.updateMfaEnabled(result);
        });
    }
    updateMfaEnabled(result) {
        this.mfaEnabled = result;
        this.userSettingsForm.controls['mfa'].setValue(result);
        if (result === true) {
            this.enable = 'Disable';
        }
        else {
            this.enable = 'Enable';
        }
    }
};
__decorate([
    Input()
], UserSettingsFormComponent.prototype, "mfaEnabled", void 0);
UserSettingsFormComponent = __decorate([
    Component({
        selector: 'app-user-settings-form',
        templateUrl: './user-settings-form.component.html',
        styleUrls: ['./user-settings-form.component.scss']
    })
], UserSettingsFormComponent);
export { UserSettingsFormComponent };
//# sourceMappingURL=user-settings-form.component.js.map