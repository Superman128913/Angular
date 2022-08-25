// Angular
import {Injectable} from '@angular/core';
// Libraries
import {LocalStorageService} from 'ngx-webstorage';
// Application
import {LoggerService} from '../logger.service';
import {GlobalConstants} from '../../shared/global-constants';
import {Traceability} from '../../shared/models/traceability.model';
import {UserSettings} from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class TraceabilityStorageService {

  private fileName = 'TraceabilityStorageService';

  constructor(private localStorage: LocalStorageService,
              private loggerService: LoggerService) {
  }

  /**
   * Store
   **/

  public storeTraceability(object: any) {
    this.localStorage.store(GlobalConstants.traceabilityId, object.traceability.data.id);
  }

  public storeSelectedTraceabilityId(traceabilityId: bigint) {
    this.localStorage.store(GlobalConstants.selectedTraceabilityId, traceabilityId);
  }

  /**
   * Clear
   **/

  // clear traceability in local storage
  public clearTraceability() {
    this.localStorage.clear(GlobalConstants.traceabilityId);
  }

  /**
   * Get
   **/

  public getTraceability(companyDivisionId: bigint): Traceability {
    // set company division
    const companyDivision = this.getCompanyDivisionById(companyDivisionId);
    // log company division
    this.loggerService.debug(this.fileName, 'getTraceability', 'companyDivision', companyDivision);
    // return traceability
    return companyDivision.traceability;
  }

  public getTraceabilitys() {
    // set company divisions
    const companyDivisions = this.getCompanyDivisions();
    // set
    const traceabilitys = [];
    // check for company divisions
    if (companyDivisions) {
      for (const division of companyDivisions) {
        traceabilitys.push(division.traceability);
      }
    }
    // log company division
    this.loggerService.debug(this.fileName, 'getTraceabilitys', 'traceabilitys', traceabilitys);
    // return traceabilitys
    return traceabilitys;
  }

  public getTraceabilityId(companyDivisionId: bigint): bigint {
    // set traceability
    const traceability = this.getTraceability(companyDivisionId);
    // log traceability
    this.loggerService.debug(this.fileName, 'getTraceabilityId', 'traceability', traceability);
    // return traceability id
    return traceability.id;
  }

  // get default traceability id
  public getDefaultTraceabilityId(): bigint {
    const settings: UserSettings = this.localStorage.retrieve(GlobalConstants.settings);

    // if one is not default, store first as default
    if (!settings.defaultTraceabilityId) {
      const companyDivisions = this.getCompanyDivisions();
      if (companyDivisions) {
        settings.defaultTraceabilityId = companyDivisions[0].traceability.id;
      }
    }

    // return default
    return settings.defaultTraceabilityId;
  }

  // get selected traceability division id
  public getSelectedTraceabilityId(): bigint {
    // if one is not selected, store default as selected
    if (!this.localStorage.retrieve(GlobalConstants.selectedTraceabilityId)) {
      const traceabilityId = this.getDefaultTraceabilityId();
      this.storeSelectedTraceabilityId(traceabilityId);
    }

    // return selected
    return this.localStorage.retrieve(GlobalConstants.selectedTraceabilityId);
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
