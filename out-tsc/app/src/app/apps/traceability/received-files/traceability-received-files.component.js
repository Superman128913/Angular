import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TraceabilityReceivedFilesComponent = class TraceabilityReceivedFilesComponent {
    constructor(activatedRoute, loggerService) {
        this.activatedRoute = activatedRoute;
        this.loggerService = loggerService;
        this.dtOptions = {};
        this.documents = [];
        this.fileName = 'TraceabilityReceivedFilesComponent';
        this.columns = [
            {
                title: 'Sender',
                data: 'email',
            }, {
                title: 'File',
                data: 'docs',
                render: (data, type, row, meta) => {
                    if (type !== 'display')
                        return data;
                    let result = row.docs.map(doc => { var _a; return `<a href="${doc.data.attributes.url}" target="_blank">${(_a = doc.data) === null || _a === void 0 ? void 0 : _a.attributes.name}</a>`; });
                    return result.join('<br/>');
                },
            }, {
                title: 'Received At',
                data: 'createdAt',
                render: (data, type, row, meta) => {
                    if (type !== 'display')
                        return data;
                    return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(row.createdAt));
                },
            }
        ];
        // set documents from resolver
        this.documents = this.activatedRoute.snapshot.data['documents'].map(document => document.attributes);
        // log documents
        this.loggerService.debug(this.fileName, 'constructor', 'documents', this.documents);
    }
    ngOnInit() {
    }
};
TraceabilityReceivedFilesComponent = __decorate([
    Component({
        selector: 'app-traceability-received-files',
        templateUrl: './traceability-received-files.component.html',
        styleUrls: ['./traceability-received-files.component.scss']
    })
], TraceabilityReceivedFilesComponent);
export { TraceabilityReceivedFilesComponent };
//# sourceMappingURL=traceability-received-files.component.js.map