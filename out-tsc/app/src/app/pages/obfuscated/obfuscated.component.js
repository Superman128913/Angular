import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ObfuscatedComponent = class ObfuscatedComponent {
    constructor(activatedRoute, fileShareService, loggerService) {
        this.activatedRoute = activatedRoute;
        this.fileShareService = fileShareService;
        this.loggerService = loggerService;
        this.dtOptions = {};
        this.sharing = {};
        this.fileName = 'TraceabilityReceivedFilesComponent';
        this.colNames = [
            'File',
            'Received at',
        ];
        this.dtOptions = {};
    }
    ngOnInit() {
        this.getSharing();
    }
    getSharing() {
        const id = this.activatedRoute.snapshot.paramMap.get('uuid');
        this.fileShareService.getSharing(id)
            .subscribe(sharing => this.sharing = sharing);
    }
};
ObfuscatedComponent = __decorate([
    Component({
        selector: 'app-obfuscated',
        templateUrl: './obfuscated.component.html',
        styleUrls: ['./obfuscated.component.scss']
    })
], ObfuscatedComponent);
export { ObfuscatedComponent };
//# sourceMappingURL=obfuscated.component.js.map