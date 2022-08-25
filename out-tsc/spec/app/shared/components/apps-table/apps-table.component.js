import { __decorate } from "tslib";
// Angular
import { Component, Input } from '@angular/core';
// Application
let AppsTableComponent = class AppsTableComponent {
    constructor() {
        this.colNames = [];
        this.documents = [];
        // Must be declared as "any", not as "DataTables.Settings"
        this.dtOptions = {};
        this.dtOptions = {
            scrollResize: true,
            deferRender: true,
            scrollX: true,
            scrollY: 100,
            scrollCollapse: false,
            scroller: {
                loadingIndicator: true
            },
            select: {
                style: 'multi+shift',
                items: 'row',
                info: false
            },
            // Declare the use of the extension in the dom parameter
            // https://datatables.net/reference/option/dom
            dom: '<\'row\'<\'col-8\'B><\'col-4\'form>>' +
                '<\'row\'<\'col-12\'t>>' +
                '<\'row\'<\'col-12\'>>',
            // Configure the buttons
            buttons: [
                'csv',
                'excel',
                'pdf',
                'print'
            ]
        };
    }
    /** Public **/
    ngOnInit() {
    }
    /**
     * Helper function to display file name without file extension
     *
     * @param filename
     */
    displayWithoutFileExtension(filename) {
        let value = '';
        if (filename) {
            const name = filename.split('.');
            value = name[0];
        }
        return value;
    }
};
__decorate([
    Input()
], AppsTableComponent.prototype, "colNames", void 0);
__decorate([
    Input()
], AppsTableComponent.prototype, "documents", void 0);
AppsTableComponent = __decorate([
    Component({
        selector: 'app-apps-table',
        templateUrl: './apps-table.component.html',
        styleUrls: ['./apps-table.component.scss']
    })
], AppsTableComponent);
export { AppsTableComponent };
//# sourceMappingURL=apps-table.component.js.map