import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Toast } from 'ngx-toastr';
let NotificationComponent = class NotificationComponent extends Toast {
    // constructor is only necessary when not using AoT
    constructor(toastrService, toastPackage) {
        super(toastrService, toastPackage);
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
    }
    action(event) {
        event.stopPropagation();
        this.toastPackage.triggerAction();
        return false;
    }
};
NotificationComponent = __decorate([
    Component({
        selector: 'app-notification',
        templateUrl: './notification.component.html',
        styleUrls: ['./notification.component.scss'],
        animations: [
            trigger('flyInOut', [
                state('inactive', style({
                    opacity: 0,
                })),
                transition('inactive => active', animate('400ms ease-out', keyframes([
                    style({
                        transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
                        opacity: 0,
                    }),
                    style({
                        transform: 'skewX(20deg)',
                        opacity: 1,
                    }),
                    style({
                        transform: 'skewX(-5deg)',
                        opacity: 1,
                    }),
                    style({
                        transform: 'none',
                        opacity: 1,
                    }),
                ]))),
                transition('active => removed', animate('400ms ease-out', keyframes([
                    style({
                        opacity: 1,
                    }),
                    style({
                        transform: 'translate3d(100%, 0, 0) skewX(30deg)',
                        opacity: 0,
                    }),
                ]))),
            ]),
        ]
    })
], NotificationComponent);
export { NotificationComponent };
//# sourceMappingURL=notification.component.js.map