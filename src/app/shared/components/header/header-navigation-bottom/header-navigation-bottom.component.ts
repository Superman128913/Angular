// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../../../global-constants';
import {Logo} from '../../../models/logo';

@Component({
    selector: 'app-header-navigation-bottom',
    templateUrl: './header-navigation-bottom.component.html',
    styleUrls: ['./header-navigation-bottom.component.scss']
})
export class HeaderNavigationBottomComponent implements OnInit {

    // traceability
    public traceabilityLogo: Logo = GlobalConstants.traceabilityWordmarkAlabaster;
    public traceabilityPath = GlobalConstants.traceabilityPath;
    public traceabilityTitle = GlobalConstants.traceabilityTitle;
    // file share
    public fileShareLogo: Logo = GlobalConstants.fileShareWordmarkAlabaster;
    public fileSharePath = GlobalConstants.fileSharePath;
    public fileShareTitle = GlobalConstants.fileShareTitle;
    // contracts manager
    public contractsManagerLogo: Logo = GlobalConstants.contractsManagerWordmark;
    public contractsManagerPath = GlobalConstants.contractsManagerPath;
    public contractsManagerTitle = GlobalConstants.contractsManagerTitle;
    // blockchain
    public blockchainLogo: Logo = GlobalConstants.blockchainWordmark;
    public blockchainPath = GlobalConstants.blockchainPath;
    public blockchainTitle = GlobalConstants.blockchainTitle;
    // other
    public homePath = GlobalConstants.homePath;

    constructor() {
    }

    ngOnInit(): void {
    }

}
