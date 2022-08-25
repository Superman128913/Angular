import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
// Application
import { environment } from '../../../environments/environment';
let HttpHelperApiService = class HttpHelperApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // GET method
    get(path, options) {
        const endpoint = environment.apiUrl + path;
        return this.httpClient.get(endpoint, options);
    }
    // POST method
    post(path, body, options) {
        const endpoint = environment.apiUrl + path;
        return this.httpClient.post(endpoint, body, options);
    }
    // PUT method
    put(path, body, options) {
        const endpoint = environment.apiUrl + path;
        return this.httpClient.put(endpoint, body, options);
    }
    // DELETE method
    delete(path, body) {
        const endpoint = environment.apiUrl + path;
        return this.httpClient.delete(endpoint, body);
    }
    // HEAD method
    head(url, options) {
        return this.httpClient.head(url, options);
    }
};
HttpHelperApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HttpHelperApiService);
export { HttpHelperApiService };
//# sourceMappingURL=http-helper-api.service.js.map