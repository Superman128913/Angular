// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../shared/global-constants';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

    // paths
    companyDivisionsPath = GlobalConstants.companyDivisionsPath;
    companyUsersPath = GlobalConstants.companyUsersPath;
    companyDomainsPath = GlobalConstants.companyDomainsPath;
    companySettingsPath = GlobalConstants.companySettingsPath;

    constructor() {
    }

    ngOnInit(): void {
    }

}
