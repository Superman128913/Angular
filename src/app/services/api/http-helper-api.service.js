"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpHelperApiService = void 0;
// Angular
var core_1 = require("@angular/core");
// Application
var environment_1 = require("src/environments/environment");
var HttpHelperApiService = /** @class */ (function () {
    function HttpHelperApiService(httpClient) {
        this.httpClient = httpClient;
    }
    // GET method
    HttpHelperApiService.prototype.get = function (path, options) {
        var endpoint = environment_1.environment.apiUrl + path; // TODO - filter for hacks?
        return this.httpClient.get(endpoint, options);
    };
    // POST method
    HttpHelperApiService.prototype.post = function (path, body, options) {
        var endpoint = environment_1.environment.apiUrl + path; // TODO - filter for hacks?
        return this.httpClient.post(endpoint, body, options);
    };
    // PUT method
    HttpHelperApiService.prototype.put = function (path, body, options) {
        var endpoint = environment_1.environment.apiUrl + path; // TODO - filter for hacks?
        return this.httpClient.put(endpoint, body, options);
    };
    // DELETE method
    HttpHelperApiService.prototype.delete = function (path, body) {
        var endpoint = environment_1.environment.apiUrl + path; // TODO - filter for hacks?
        return this.httpClient.delete(endpoint, body);
    };
    // HEAD method
    HttpHelperApiService.prototype.head = function (url, options) {
        return this.httpClient.head(url, options);
    };
    HttpHelperApiService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], HttpHelperApiService);
    return HttpHelperApiService;
}());
exports.HttpHelperApiService = HttpHelperApiService;
