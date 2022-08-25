"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceabilityDocumentsResolver = void 0;
// Angular
var core_1 = require("@angular/core");
// Libraries
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var TraceabilityDocumentsResolver = /** @class */ (function () {
    function TraceabilityDocumentsResolver(storageService, taasApiService, loggerService) {
        this.storageService = storageService;
        this.taasApiService = taasApiService;
        this.loggerService = loggerService;
        this.fileName = 'TraceabilityDocumentsResolver';
    }
    TraceabilityDocumentsResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var functionName = 'getTraceability';
        // set division id
        var divisionId = this.storageService.getSelectedTraceabilityDivisionId();
        // init documents
        var documents = [];
        // refresh traceability
        return this.taasApiService.getTraceability(divisionId).pipe((0, operators_1.map)(function (project) {
            // log data
            _this.loggerService.debug(_this.fileName, functionName, 'project', project);
            return project;
        }), (0, operators_1.catchError)(function (error) {
            // log error
            _this.loggerService.error(_this.fileName, functionName, 'error', error);
            // throw error
            return (0, rxjs_1.throwError)(error);
        }));
    };
    TraceabilityDocumentsResolver = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], TraceabilityDocumentsResolver);
    return TraceabilityDocumentsResolver;
}());
exports.TraceabilityDocumentsResolver = TraceabilityDocumentsResolver;
