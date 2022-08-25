import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
let StorageService = class StorageService {
    constructor(localStorage, loggerService, traceabilityStorageService, fileShareStorageService) {
        this.localStorage = localStorage;
        this.loggerService = loggerService;
        this.traceabilityStorageService = traceabilityStorageService;
        this.fileShareStorageService = fileShareStorageService;
        this.fileName = 'StorageService';
    }
};
StorageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StorageService);
export { StorageService };
//# sourceMappingURL=storage.service.js.map