import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../../shared/global-constants';
let FileShareComponent = class FileShareComponent {
    constructor() {
        // sidebar
        this.fileShareWordmark = GlobalConstants.fileShareWordmarkAlabaster;
        this.fileShareClass = GlobalConstants.fileShareClass;
        this.sidebarMenuItems = [
            // dashboard
            {
                image: 'bi bi-files',
                title: 'Dashboard',
                path: GlobalConstants.fileShareDashboardPath
            },
            // all files
            {
                image: 'bi bi-folder',
                title: 'All Files',
                path: GlobalConstants.fileShareAllFilesPath
            },
            // recent files
            {
                image: 'bi bi-clock',
                title: 'Recent Files',
                path: GlobalConstants.fileShareRecentFilesPath
            },
            // send files
            {
                image: 'bi bi-send',
                title: 'Send Files',
                path: GlobalConstants.fileShareSendFilesPath
            },
            // request files
            {
                image: 'bi bi-reply',
                title: 'Request Files',
                path: GlobalConstants.fileShareRequestFilesPath
            },
            // reports
            {
                image: 'bi bi-file-bar-graph',
                title: 'Reports',
                path: GlobalConstants.fileShareReportsPath
            },
            // trash
            {
                image: 'bi bi-trash2',
                title: 'Trash',
                path: GlobalConstants.fileShareTrashPath
            },
            // settings
            {
                image: 'bi bi-gear',
                title: 'Settings',
                path: GlobalConstants.fileShareSettingsPath
            }
        ];
    }
    ngOnInit() {
    }
};
FileShareComponent = __decorate([
    Component({
        selector: 'app-file-share',
        templateUrl: './file-share.component.html',
        styleUrls: ['./file-share.component.scss']
    })
], FileShareComponent);
export { FileShareComponent };
//# sourceMappingURL=file-share.component.js.map