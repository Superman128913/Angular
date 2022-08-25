import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../../shared/global-constants';
let FileShareStorageService = class FileShareStorageService {
    constructor(localStorage, loggerService) {
        this.localStorage = localStorage;
        this.loggerService = loggerService;
        this.fileName = 'FileShareStorageService';
    }
    /**
     * Store
     **/
    storeFileShare(object) {
        var _a;
        this.localStorage.store(GlobalConstants.fileShareId, (_a = object.fileShare.data) === null || _a === void 0 ? void 0 : _a.id);
    }
    storeSelectedFileShareId(fileShareId) {
        this.localStorage.store(GlobalConstants.selectedFileShareId, fileShareId);
    }
    /**
     * Clear
     **/
    // clear file share in local storage
    clearFileShare() {
        this.localStorage.clear(GlobalConstants.fileShareId);
    }
    /**
     * Get
     **/
    getFileShare(companyDivisionId) {
        // set company division
        const companyDivision = this.getCompanyDivisionById(companyDivisionId);
        // log company division
        this.loggerService.debug(this.fileName, 'getFileShare', 'companyDivision', companyDivision);
        // return file share
        return companyDivision.fileShare;
    }
    getFileShares() {
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
    getFileShareId(companyDivisionId) {
        // set traceability
        const fileShare = this.getFileShare(companyDivisionId);
        // log traceability
        this.loggerService.debug(this.fileName, 'getFileShareId', 'fileShare', fileShare);
        // return file share id
        return fileShare.id;
    }
    // get default file share id
    getDefaultFileShareId() {
        const settings = this.localStorage.retrieve(GlobalConstants.settings);
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
    getSelectedFileShareId() {
        // if one is not selected, store default as selected
        if (!this.localStorage.retrieve(GlobalConstants.selectedFileShareId)) {
            const fileShareId = this.getDefaultFileShareId();
            this.storeSelectedFileShareId(fileShareId);
        }
        // return selected
        return this.localStorage.retrieve(GlobalConstants.selectedFileShareId);
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
FileShareStorageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], FileShareStorageService);
export { FileShareStorageService };
//# sourceMappingURL=file-share-storage.service.js.map