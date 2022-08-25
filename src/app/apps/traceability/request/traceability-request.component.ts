// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {TopbarMenuItem} from '../../../shared/models/topbar.model';
import {GlobalConstants} from '../../../shared/global-constants';

@Component({
    selector: 'app-traceability-request',
    templateUrl: './traceability-request.component.html',
    styleUrls: ['./traceability-request.component.scss']
})
export class TraceabilityRequestComponent implements OnInit {

    // public
    public topbarMenuItems: Array<TopbarMenuItem>;

    constructor() {
        // set menu
        this.topbarMenuItems = [
            {
                image: 'bi-reply',
                title: 'New',
                path: GlobalConstants.traceabilityRequestNewPath
            },
            {
                image: 'bi-envelope-open',
                title: 'Open',
                path: GlobalConstants.traceabilityRequestOpenPath
            },
            {
                image: 'bi-envelope',
                title: 'Closed',
                path: GlobalConstants.traceabilityRequestClosedPath
            }
        ];
    }

    ngOnInit(): void {
    }

}
