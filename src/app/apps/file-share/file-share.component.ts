// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../../shared/global-constants';
import {SidebarMenuItem} from '../../shared/models/sidebar.model';
import {Logo} from '../../shared/models/logo';

@Component({
    selector: 'app-file-share',
    templateUrl: './file-share.component.html',
    styleUrls: ['./file-share.component.scss']
})
export class FileShareComponent implements OnInit {

    // sidebar
    public fileShareWordmark: Logo = GlobalConstants.fileShareWordmarkAlabaster;
    public sidebarMenuItems: Array<SidebarMenuItem>;
    public fileShareClass = GlobalConstants.fileShareClass;

    constructor() {

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

  ngOnInit(): void {
  }

}
