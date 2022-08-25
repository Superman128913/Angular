// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../../shared/global-constants';
import {CompanyStorageService} from '../../services/storage/company-storage.service';

@Component({
    selector: 'app-company-division',
    templateUrl: './company-division.component.html',
    styleUrls: ['./company-division.component.scss']
})
export class CompanyDivisionComponent implements OnInit {

    // initialize company division variables
    public companyDivisionsList: Array<any>;
    // paths
    public companyDivisionsPath = GlobalConstants.companyDivisionsPath;
    public companyDivisionsRegisterPath = GlobalConstants.companyDivisionsRegisterPath;
    public companyDivisionsRegisterTitle = GlobalConstants.companyDivisionsRegisterTitle;

    constructor(private companyStorageService: CompanyStorageService) {
        // set company divisions list
        this.companyDivisionsList = this.companyStorageService.getCompanyDivisions();
    }

    /** Public **/

    ngOnInit(): void {
    }

    /** Private **/

}
