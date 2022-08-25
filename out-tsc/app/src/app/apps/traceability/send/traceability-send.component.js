import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let TraceabilitySendComponent = class TraceabilitySendComponent {
    constructor(activatedRoute, loggerService) {
        this.activatedRoute = activatedRoute;
        this.loggerService = loggerService;
        this.dtOptions = {};
        this.documents = [];
        this.fileName = 'TraceabilitySendComponent';
        this.columns = [
            {
                title: 'File',
                data: 'docs',
                render: (data, type, row, meta) => {
                    if (type !== 'display')
                        return data;
                    let result = row.docs.map(doc => { var _a; return `<a href="${doc.data.attributes.url}" target="_blank">${(_a = doc.data) === null || _a === void 0 ? void 0 : _a.attributes.name}</a>`; });
                    return result.join('<br/>');
                },
            }, {
                title: 'Receiver',
                data: 'email',
            }, {
                title: 'Sent At',
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
TraceabilitySendComponent = __decorate([
    Component({
        selector: 'app-traceability-send',
        templateUrl: './traceability-send.component.html',
        styleUrls: ['./traceability-send.component.scss']
    })
], TraceabilitySendComponent);
export { TraceabilitySendComponent };
//# sourceMappingURL=traceability-send.component.js.map