import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../../shared/global-constants';
let TraceabilityStorageService = class TraceabilityStorageService {
    constructor(localStorage, loggerService) {
        this.localStorage = localStorage;
        this.loggerService = loggerService;
        this.fileName = 'TraceabilityStorageService';
    }
    /**
     * Store
     **/
    storeTraceability(object) {
        this.localStorage.store(GlobalConstants.traceabilityId, object.traceability.data.id);
    }
    storeSelectedTraceabilityId(traceabilityId) {
        this.localStorage.store(GlobalConstants.selectedTraceabilityId, traceabilityId);
    }
    /**
     * Clear
     **/
    // clear traceability in local storage
    clearTraceability() {
        this.localStorage.clear(GlobalConstants.traceabilityId);
    }
    /**
     * Get
     **/
    getTraceability(companyDivisionId) {
        // set company division
        const companyDivision = this.getCompanyDivisionById(companyDivisionId);
        // log company division
        this.loggerService.debug(this.fileName, 'getTraceability', 'companyDivision', companyDivision);
        // return traceability
        return companyDivision.traceability;
    }
    getTraceabilitys() {
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
    getTraceabilityId(companyDivisionId) {
        // set traceability
        const traceability = this.getTraceability(companyDivisionId);
        // log traceability
        this.loggerService.debug(this.fileName, 'getTraceabilityId', 'traceability', traceability);
        // return traceability id
        return traceability.id;
    }
    // get default traceability id
    getDefaultTraceabilityId() {
        const settings = this.localStorage.retrieve(GlobalConstants.settings);
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
    getSelectedTraceabilityId() {
        // if one is not selected, store default as selected
        if (!this.localStorage.retrieve(GlobalConstants.selectedTraceabilityId)) {
            const traceabilityId = this.getDefaultTraceabilityId();
            this.storeSelectedTraceabilityId(traceabilityId);
        }
        // return selected
        return this.localStorage.retrieve(GlobalConstants.selectedTraceabilityId);
    }
    /** Private **/
    getCompanyDivisions() {
        // set
        const companyDivisions = this.localStorage.retrieve(GlobalConstants.companyDivisions);
        // log
        this.loggerService.debug(this.fileName, 'getCompanyDivisions', 'companyDivisions', companyDivisions);
        // return
        return companyDivisions;
    }
    getCompanyDivisionById(companyDivisionId) {
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
};
TraceabilityStorageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TraceabilityStorageService);
export { TraceabilityStorageService };
//# sourceMappingURL=traceability-storage.service.js.map