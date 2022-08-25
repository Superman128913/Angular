import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
let NotificationService = class NotificationService {
    constructor(toastrService) {
        this.toastrService = toastrService;
    }
    success(message, title) {
        this.toastrService.success(message, title);
    }
    warning(message, title) {
        this.toastrService.warning(message, title);
    }
    error(message, title) {
        this.toastrService.error(message, title);
    }
};
NotificationService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NotificationService);
export { NotificationService };
//# sourceMappingURL=notification.service.js.map