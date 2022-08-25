import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
let LoggerService = class LoggerService {
    constructor(logger) {
        this.logger = logger;
    }
    debug(fileName, functionName, title, message) {
        this.logger.debug(fileName, functionName, title, message);
    }
    info(fileName, functionName, title, message) {
        this.logger.info(fileName, functionName, title, message);
    }
    warn(fileName, functionName, title, message) {
        this.logger.warn(fileName, functionName, title, message);
    }
    error(fileName, functionName, title, message) {
        this.logger.error(fileName, functionName, title, message);
    }
};
LoggerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoggerService);
export { LoggerService };
//# sourceMappingURL=logger.service.js.map