// Angular
import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// Application
import {SidebarMenuItem} from '../../models/sidebar.model';
import {GlobalConstants} from '../../global-constants';
import {Logo} from '../../models/logo';
import {UserStorageService} from '../../../services/storage/user-storage.service';
import {CompanyStorageService} from '../../../services/storage/company-storage.service';
import {TraceabilityStorageService} from '../../../services/storage/traceability-storage.service';
import {FileShareStorageService} from '../../../services/storage/file-share-storage.service';
import {CompanyDivision} from '../../models/company_division.model';
import {UserApiService} from '../../../services/api/user-api.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    // input
    @Input() parentClass: string;
    @Input() logo!: Logo;
    @Input() menu: Array<SidebarMenuItem> = [];
    // logo
    public defaultLogo = GlobalConstants.defaultLogo;
    // divisions
    public divisions: Array<CompanyDivision>;
    public defaultDivisionId: bigint;
    public selectedDivisionId: bigint;
    // paths
    public homePath = GlobalConstants.homePath;
    public traceabilityPath = GlobalConstants.traceabilityPath;
    public fileSharePath = GlobalConstants.fileSharePath;
    public blockchainPath = GlobalConstants.blockchainPath;
    public contractsManagerPath = GlobalConstants.contractsManagerPath;
    //
    public copyrightYear: number = new Date().getFullYear();

    constructor(public router: Router,
                private companyStorageService: CompanyStorageService,
                private userApiService: UserApiService,
                private userStorageService: UserStorageService,
                private traceabilityStorageService: TraceabilityStorageService,
                private fileShareStorageService: FileShareStorageService) {
        // set divisions variable
        this.divisions = this.companyStorageService.getCompanyDivisions();
    }

    ngOnInit(): void {
        if (this.parentClass === GlobalConstants.traceabilityClass) {
            this.defaultDivisionId = this.traceabilityStorageService.getDefaultTraceabilityId();
        } else if (this.parentClass === GlobalConstants.fileShareClass) {
            this.defaultDivisionId = this.fileShareStorageService.getDefaultFileShareId();
        }
        // set selectedDivisionId
        this.setSelectedDivisionId(this.defaultDivisionId);
    }

    /** Public **/

    public setSelectedDivisionId(divisionId: bigint) {
        // set selectedDivisionId
        this.selectedDivisionId = divisionId;
    }

}
