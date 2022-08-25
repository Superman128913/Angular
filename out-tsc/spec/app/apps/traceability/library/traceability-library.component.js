import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let TraceabilityLibraryComponent = class TraceabilityLibraryComponent {
    constructor(activatedRoute, loggerService) {
        this.activatedRoute = activatedRoute;
        this.loggerService = loggerService;
        this.documents = [];
        this.fileName = 'TraceabilityLibraryComponent';
        // set menu
        this.menu = [
            {
                image: 'bi bi-printer',
                title: 'Print',
                path: ''
            },
            {
                image: 'bi bi-filetype-pdf',
                title: 'PDF',
                path: ''
            },
            {
                image: 'bi bi-file-earmark-excel',
                title: 'Excel',
                path: ''
            },
            {
                image: 'bi bi-filetype-csv',
                title: 'CSV',
                path: ''
            }
        ];
        this.colNames = [
            'Name',
            'Part #',
            'Serial #',
            'Lot #',
            'PO #',
            'Status'
        ];
        // set documents from resolver
        this.documents = this.activatedRoute.snapshot.data['documents'];
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