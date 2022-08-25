// Angular
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
// Application
import {GlobalConstants} from '../../../global-constants';
import {UserSettingsForm} from '../../../models/user.model';
import {UserApiService} from '../../../../services/api/user-api.service';
import {LoggerService} from '../../../../services/logger.service';
import {TraceabilityStorageService} from '../../../../services/storage/traceability-storage.service';
import {FileShareStorageService} from '../../../../services/storage/file-share-storage.service';

@Component({
  selector: 'app-sidebar-division-dropdown',
  templateUrl: './sidebar-division-dropdown.component.html',
  styleUrls: ['./sidebar-division-dropdown.component.scss']
})
export class SidebarDivisionDropdownComponent implements OnInit {

  @Input() parentClass: string;
  @Input() division;
  @Input() divisions;
  @Input() defaultDivisionId: bigint;
  @Output() selectedDivisionId = new EventEmitter<bigint>();
  // public
  public companyDivisionsRegisterPath = GlobalConstants.companyDivisionsRegisterPath;
  // private
  private fileName = 'SidebarDivisionDropdownComponent';

  constructor(private router: Router,
              private userApiService: UserApiService,
              private traceabilityStorageService: TraceabilityStorageService,
              private fileShareStorageService: FileShareStorageService,
              private loggerService: LoggerService) {
  }

  ngOnInit(): void {
  }

  /** Public **/

  // set default division
  public setDefaultDivision(divisionId: bigint) {
    let userSettingsFormValue: UserSettingsForm;
    if (this.parentClass === GlobalConstants.traceabilityClass) {
      userSettingsFormValue = {
        defaultTraceabilityId: divisionId
      };
    } else if (this.parentClass === GlobalConstants.fileShareClass) {
      userSettingsFormValue = {
        defaultFileShareId: divisionId
      };
    }

    // update user settings via the api
    this.userApiService.updateUserSettings(userSettingsFormValue);
  }

  public changeSelectedDivision(divisionId: bigint) {
    // emit selectedDivisionId
    this.selectedDivisionId.emit(divisionId);

    if (this.parentClass === GlobalConstants.traceabilityClass) {
      // store selected division id in local storage
      this.traceabilityStorageService.storeSelectedTraceabilityId(divisionId);
      // TODO - refresh data instead of navigate?
      // navigate
      this.router.navigate([GlobalConstants.traceabilityDashboardPath]).then(() => {
        // log message
        this.loggerService.info(this.fileName, 'changeSelectedDivision', 'navigate', 'traceabilityDashboardPath');
      });
    } else if (this.parentClass === GlobalConstants.fileShareClass) {
      // store selected division id in local storage
      this.fileShareStorageService.storeSelectedFileShareId(divisionId);
      // TODO - refresh data instead of navigate?
      // navigate
      this.router.navigate([GlobalConstants.fileSharePath]).then(() => {
        // log message
        this.loggerService.info(this.fileName, 'changeSelectedDivision', 'navigate', 'fileSharePath');
      });
    }
  }

}
