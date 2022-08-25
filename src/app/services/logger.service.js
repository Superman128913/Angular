"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
// Angular
var core_1 = require("@angular/core");
var LoggerService = /** @class */ (function () {
    function LoggerService(logger) {
        this.logger = logger;
    }
    LoggerService.prototype.debug = function (fileName, functionName, title, message) {
        this.logger.debug(fileName, functionName, title, message);
    };
    LoggerService.prototype.info = function (fileName, functionName, title, message) {
        this.logger.info(fileName, functionName, title, message);
    };
    LoggerService.prototype.warn = function (fileName, functionName, title, message) {
        this.logger.warn(fileName, functionName, title, message);
    };
    LoggerService.prototype.error = function (fileName, functionName, title, message) {
        this.logger.error(fileName, functionName, title, message);
    };
    LoggerService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], LoggerService);
    return LoggerService;
}());
exports.LoggerService = LoggerService;
