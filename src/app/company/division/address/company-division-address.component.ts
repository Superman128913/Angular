// Angular
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoggerService} from '../../../services/logger.service';
import {GlobalConstants} from '../../../shared/global-constants';

// Application

@Component({
    selector: 'app-company-division-address',
    templateUrl: './company-division-address.component.html',
    styleUrls: ['./company-division-address.component.scss']
})
export class CompanyDivisionAddressComponent implements OnInit {

    // initialize company division variables
    public companyDivisionId;
    public companyDivisionAddressId;
    // private
    private fileName = 'CompanyDivisionAddressComponent';

    constructor(private activatedRoute: ActivatedRoute,
                private loggerService: LoggerService) {
        // get division id from the route
        this.activatedRoute.paramMap.subscribe(params => {
            // set company division id
            this.companyDivisionId = params.get(GlobalConstants.companyDivisionId);
            // log company division id
            this.loggerService.debug(this.fileName, 'constructor', 'companyDivisionId', this.companyDivisionId);
            // set company division address id
            this.companyDivisionAddressId = params.get(GlobalConstants.id);
            // log company division address id
            this.loggerService.debug(this.fileName, 'constructor', 'companyDivisionAddressId', this.companyDivisionAddressId);
        });
    }

    /** Public **/

    ngOnInit(): void {
    }

    /** Private **/

}
