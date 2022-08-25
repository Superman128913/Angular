// Angular
import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
// Libraries
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
// Application
import {CompanyStorageService} from '../../../services/storage/company-storage.service';
import {TraceabilityStorageService} from '../../../services/storage/traceability-storage.service';
import {FileShareStorageService} from '../../../services/storage/file-share-storage.service';
import {UserApiService} from '../../../services/api/user-api.service';
import {UserSettingsForm} from '../../models/user.model';
import {LoggerService} from '../../../services/logger.service';
import {UserSettingsFormModalComponent} from '../../modals/user-settings-form-modal/user-settings-form-modal.component';
import {NotificationService} from '../../../services/notification.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {

  // public
  @Input() mfaEnabled;
  // initializing company settings form
  public userSettingsForm: FormGroup;
  public enable: string;
  public defaultTraceabilityId: bigint;
  public traceabilitys;
  public defaultFileShareId: bigint;
  public fileShares;
  // private
  private fileName = 'UserSettingsFormComponent';

  constructor(private formBuilder: FormBuilder,
              private userApiService: UserApiService,
              private companyStorageService: CompanyStorageService,
              private traceabilityStorageService: TraceabilityStorageService,
              private fileShareStorageService: FileShareStorageService,
              private loggerService: LoggerService,
              private modalService: NgbModal,
              private notificationService: NotificationService) {
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

  ngOnInit(): void {
    // set initial mfa enabled
    // NOTE: must be done in ngOnInit
    this.updateMfaEnabled(this.mfaEnabled);
  }

  public enableOrDisableMfa() {
    // set function name
    const functionName = 'enableOrDisableMfa';

    // check if mfa is enabled
    if (this.mfaEnabled) {
      // disable mfa
      this.userApiService.disableMfa().subscribe({
        next: (response: any) => {
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
    } else { // mfa is disabled
      // get qr url to enable mfa
      this.userApiService.getQrUrl().subscribe({
        next: (response: any) => {
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

  public getCompanyDivisionNameByTraceabilityId(traceabilityId: bigint): string {
    let name: string;
    if (traceabilityId) {
      name = this.companyStorageService.getCompanyDivisionNameByTraceabilityId(traceabilityId);
    } else {
      name = 'N/A';
    }
    return name;
  }

  public getTraceabilityIdByCompanyDivisionName(name: string): bigint {
    return this.companyStorageService.getTraceabilityIdByCompanyDivisionName(name);
  }

  public updateUserSettingsTraceabilityId(id: bigint) {
    const userSettingsFormValue: UserSettingsForm = {
      defaultTraceabilityId: id
    };

    this.userApiService.updateUserSettings(userSettingsFormValue);
  }

  public getCompanyDivisionNameByFileShareId(fileShareId: bigint): string {
    let name: string;
    if (fileShareId) {
      name = this.companyStorageService.getCompanyDivisionNameByFileShareId(fileShareId);
    } else {
      name = 'N/A';
    }
    return name;
  }

  public getFileShareIdByCompanyDivisionName(name: string): bigint {
    return this.companyStorageService.getFileShareIdByCompanyDivisionName(name);
  }

  public updateUserSettingsFileShareId(id: bigint) {
    const userSettingsFormValue: UserSettingsForm = {
      defaultFileShareId: id
    };

    this.userApiService.updateUserSettings(userSettingsFormValue);
  }

  /** Private **/

  private createUserSettingsForm() {
    return this.formBuilder.group({
      mfa: this.mfaEnabled
    });
  }

  private openModal(url: string) {
    const modalRef: NgbModalRef = this.modalService.open(UserSettingsFormModalComponent,
        {
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

  private updateMfaEnabled(result: boolean) {
    this.mfaEnabled = result;
    this.userSettingsForm.controls['mfa'].setValue(result);

    if (result === true) {
      this.enable = 'Disable';
    } else {
      this.enable = 'Enable';
    }
  }
}
