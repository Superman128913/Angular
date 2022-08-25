// Angular
import {Injectable} from '@angular/core';
// Libraries
import {LocalStorageService} from 'ngx-webstorage';
// Application
import {LoggerService} from '../logger.service';
import {FileShare} from '../../shared/models/file_share.model';
import {GlobalConstants} from '../../shared/global-constants';
import {UserSettings} from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FileShareStorageService {

  private fileName = 'FileShareStorageService';

  constructor(private localStorage: LocalStorageService,
              private loggerService: LoggerService) {
  }

  /**
   * Store
   **/

  public storeFileShare(object: any) {
    this.localStorage.store(GlobalConstants.fileShareId, object.fileShare.data?.id);
  }

  public storeSelectedFileShareId(fileShareId: bigint) {
    this.localStorage.store(GlobalConstants.selectedFileShareId, fileShareId);
  }

  /**
   * Clear
   **/

  // clear file share in local storage
  public clearFileShare() {
    this.localStorage.clear(GlobalConstants.fileShareId);
  }

  /**
   * Get
   **/

  public getFileShare(companyDivisionId: bigint): FileShare {
    // set company division
    const companyDivision = this.getCompanyDivisionById(companyDivisionId);
    // log company division
    this.loggerService.debug(this.fileName, 'getFileShare', 'companyDivision', companyDivision);
    // return file share
    return companyDivision.fileShare;
  }

  public getFileShares() {
    // set company divisions
    const companyDivisions = this.getCompanyDivisions();
    // set
    const fileShares = [];
    // check for company divisions
    if (companyDivisions) {
      for (const division of companyDivisions) {
        fileShares.push(division.fileShare);
      }
    }

    // log company division
    this.loggerService.debug(this.fileName, 'getFileShares', 'fileShares', fileShares);
    // return fileShares
    return fileShares;
  }

  public getFileShareId(companyDivisionId: bigint) {
    // set traceability
    const fileShare = this.getFileShare(companyDivisionId);
    // log traceability
    this.loggerService.debug(this.fileName, 'getFileShareId', 'fileShare', fileShare);
    // return file share id
    return fileShare.id;
  }

  // get default file share id
  public getDefaultFileShareId(): bigint {
    const settings: UserSettings = this.localStorage.retrieve(GlobalConstants.settings);

    // if one is not default, store first as default
    if (!settings.defaultFileShareId) {
      const companyDivisions = this.getCompanyDivisions();
      if (companyDivisions) {
        settings.defaultFileShareId = companyDivisions[0].fileShare.id;
      }
    }

    // return default
    return settings.defaultFileShareId;
  }

  // get selected file share id
  public getSelectedFileShareId() {
    // if one is not selected, store default as selected
    if (!this.localStorage.retrieve(GlobalConstants.selectedFileShareId)) {
      const fileShareId = this.getDefaultFileShareId();
      this.storeSelectedFileShareId(fileShareId);
    }

    // return selected
    return this.localStorage.retrieve(GlobalConstants.selectedFileShareId);
  }

  /** Private **/

  private getCompanyDivisions() {
    // set
    const companyDivisions = this.localStorage.retrieve(GlobalConstants.companyDivisions);
    // log
    this.loggerService.debug(this.fileName, 'getCompanyDivisions', 'companyDivisions', companyDivisions);
    // return
    return companyDivisions;
  }

  private getCompanyDivisionById(companyDivisionId: bigint) {
    // set company divisions
    const companyDivisions = this.getCompanyDivisions();

    for (const companyDivision of companyDivisions) {
      if (companyDivision.id === companyDivisionId) {
        // log company division
        this.loggerService.debug(this.fileName, 'getCompanyDivisionById', 'companyDivision', companyDivision);

        // return company division
        return companyDivision;
      }
    }
  }
}
