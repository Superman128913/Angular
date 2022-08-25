import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../shared/shared.module';
import { TRACEABLILTY_RECEIVED_FILES_ROUTES } from './traceability-received-files.routes';
let TraceabilityReceivedFilesModule = class TraceabilityReceivedFilesModule {
};
TraceabilityReceivedFilesModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(TRACEABLILTY_RECEIVED_FILES_ROUTES),
            SharedModule
        ],
        exports: []
    })
], TraceabilityReceivedFilesModule);
export { TraceabilityReceivedFilesModule };
//# sourceMappingURL=traceability-received-files.module.js.map