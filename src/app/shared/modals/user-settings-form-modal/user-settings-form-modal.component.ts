// Angular
import {Component, OnInit} from '@angular/core';
// Libraries
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
// Application
import {UserApiService} from '../../../services/api/user-api.service';
import {GlobalConstants} from '../../global-constants';
import {LoggerService} from '../../../services/logger.service';
import {NotificationService} from '../../../services/notification.service';

@Component({
    selector: 'app-user-settings-form-modal',
    templateUrl: './user-settings-form-modal.component.html',
})
export class UserSettingsFormModalComponent implements OnInit {

    // public
    // initializing sign in form
    public supportEmail = GlobalConstants.supportEmail;
    public qrCodeWidth = 256;
    public url: string | null = null;
    // private
    private fileName = 'UserSettingsFormModalComponent';

    constructor(public activeModal: NgbActiveModal,
                private userApiService: UserApiService,
                private loggerService: LoggerService,
                private notificationService: NotificationService) {
    }

    ngOnInit(): void {
    }

    // this called only if user entered full code
    onCodeCompleted(code: string) {
        // set function name
        const functionName = 'onCodeCompleted';

        // check qr code via the API
        this.userApiService.enableMfa(code).subscribe({
            next: (response: any) => {
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

    public closeModal(mfaEnabled: boolean) {
        // close modal
        this.activeModal.close(mfaEnabled);
    }
}
