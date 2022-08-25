// Angular
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// Application
import {CompanyDivision} from '../../../shared/models/company_division.model';
import {CompanyDivisionAddress} from '../../../shared/models/company_division_address.model';
import {LoggerService} from '../../../services/logger.service';
import {GlobalConstants} from '../../../shared/global-constants';
import {CompanyStorageService} from '../../../services/storage/company-storage.service';

@Component({
    selector: 'app-company-division-update',
    templateUrl: './company-division-update.component.html',
    styleUrls: ['./company-division-update.component.scss']
})
export class CompanyDivisionUpdateComponent implements OnInit {

    // public
    public companyDivision: CompanyDivision;
    public companyDivisionAddresses: CompanyDivisionAddress[];
    // private
    private fileName = 'CompanyDivisionUpdateComponent';

    constructor(private activatedRoute: ActivatedRoute,
                private loggerService: LoggerService,
                private companyStorageService: CompanyStorageService) {
        let companyDivisionId;

        // get company division id from the route
        this.activatedRoute.paramMap.subscribe(params => {
            // set company division id
            companyDivisionId = params.get(GlobalConstants.id);
            // log company division id
            this.loggerService.info(this.fileName, 'constructor', 'companyDivisionId', companyDivisionId);
        });

        // retrieve company division from local storage
        this.companyDivision = this.companyStorageService.getCompanyDivisionById(companyDivisionId);

        // set company division addresses
        this.companyDivisionAddresses =
            this.companyStorageService.getCompanyDivisionAddressesByCompanyDivisionId(companyDivisionId);
    }

    /** Public **/

    ngOnInit(): void {
    }

    /** Private **/

}
