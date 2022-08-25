import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let TraceabilityLibraryComponent = class TraceabilityLibraryComponent {
    constructor(activatedRoute, loggerService) {
        this.activatedRoute = activatedRoute;
        this.loggerService = loggerService;
        this.documents = [];
        this.fileName = 'TraceabilityLibraryComponent';
        this.columns = [
            {
                title: 'ID',
                data: 'id',
                class: 'hidden',
            }, {
                title: 'Name',
                data: 'name',
            }, {
                title: 'Part #',
                data: 'partNumber',
            }, {
                title: 'Serial #',
                data: 'serialNumber',
            }, {
                title: 'Lot #',
                data: 'lotNumber',
            }, {
                title: 'PO #',
                data: 'poNumber',
            }, {
                title: 'Status',
                data: 'status',
            },
        ];
        // set documents from resolver
        this.documents = this.activatedRoute.snapshot.data['documents'].map(document => document.data.attributes);
        // log documents
        this.loggerService.debug(this.fileName, 'constructor', 'documents', this.documents);
    }
    /** Public **/
    ngOnInit() {
    }
};
TraceabilityLibraryComponent = __decorate([
    Component({
        selector: 'app-traceability-library',
        templateUrl: './traceability-library.component.html',
        styleUrls: ['./traceability-library.component.scss']
    })
], TraceabilityLibraryComponent);
export { TraceabilityLibraryComponent };
//# sourceMappingURL=traceability-library.component.js.map