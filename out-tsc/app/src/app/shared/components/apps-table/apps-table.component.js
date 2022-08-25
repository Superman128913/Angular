import { __decorate } from "tslib";
// Angular
import { Component, Input } from '@angular/core';
// Application
let AppsTableComponent = class AppsTableComponent {
    constructor() {
        this.columns = [];
        this.documents = [];
        // Must be declared as "any", not as "DataTables.Settings"
        this.dtOptions = {};
        this.dtOptions = {
            scrollResize: true,
            deferRender: true,
            scrollX: true,
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
                {
                    text: '<i class="bi bi-printer"></i>Print',
                    extend: 'print',
                    extension: '.print'
                }, {
                    text: '<i class="bi bi-filetype-pdf"></i>PDF',
                    extend: 'pdf',
                    extension: '.pdf'
                }, {
                    text: '<i class="bi bi-file-earmark-excel"></i>Excel',
                    extend: 'excel',
                    extension: '.xls'
                }, {
                    text: '<i class="bi bi-filetype-csv"></i>CSV',
                    extend: 'csv',
                    extension: '.csv'
                },
            ],
            language: {
                search: '',
                searchPlaceholder: 'Search'
            },
            columns: [],
            data: [],
            drawCallback(settings) {
                const dataTable = $('#dataTable').DataTable();
                dataTable.contextualActions({
                    buttonList: {
                        containerSelector: '',
                    },
                    contextMenu: {
                        isMulti: true,
                        headerRenderer: (row) => 'Aerospree',
                    },
                    items: [
                        {
                            title: 'Send',
                            iconClass: 'bi bi-send',
                            multi: true,
                            type: 'option',
                            action: (rows) => {
                                console.log(rows);
                                console.log('=======Send action here=========');
                            }
                        },
                        {
                            title: 'Export',
                            iconClass: 'bi bi-reply',
                            multi: true,
                            type: 'option',
                            action: (rows) => {
                                console.log(rows);
                                console.log('=======Export action here=========');
                            }
                        },
                    ],
                });
            }
        };
    }
    /** Public **/
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.dtOptions.columns = changes.columns.currentValue;
        this.dtOptions.data = changes.documents.currentValue;
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
], AppsTableComponent.prototype, "columns", void 0);
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
