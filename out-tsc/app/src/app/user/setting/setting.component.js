import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let SettingComponent = class SettingComponent {
    constructor(activatedRoute, loggerService) {
        this.activatedRoute = activatedRoute;
        this.loggerService = loggerService;
        // private
        this.fileName = 'SettingComponent';
        // set mfa enabled from resolver
        this.mfaEnabled = this.activatedRoute.snapshot.data['mfaEnabled'];
        // log mfa enabled
        this.loggerService.debug(this.fileName, 'constructor', 'mfaEnabled', this.mfaEnabled);
    }
    ngOnInit() {
    }
};
SettingComponent = __decorate([
    Component({
        selector: 'app-setting',
        templateUrl: './setting.component.html',
        styleUrls: ['./setting.component.scss']
    })
], SettingComponent);
export { SettingComponent };
//# sourceMappingURL=setting.component.js.map