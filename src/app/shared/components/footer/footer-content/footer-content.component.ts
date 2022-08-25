// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../../../global-constants';
import {Logo} from '../../../models/logo';

@Component({
    selector: 'app-footer-content',
    templateUrl: './footer-content.component.html',
    styleUrls: ['./footer-content.component.scss']
})
export class FooterContentComponent implements OnInit {

    // logo
    public invertedLogo: Logo = GlobalConstants.invertedWordmark;
    public shortLogo: Logo = GlobalConstants.defaultLogo;
    //
    public tagLine = GlobalConstants.tagLine;
    public missionStatement = GlobalConstants.missionStatement;
    public linkedInUrl = GlobalConstants.linkedInUrl;
    public twitterUrl = GlobalConstants.twitterUrl;
    // paths
    public homePath = GlobalConstants.homePath;
    public aboutUsPath = GlobalConstants.aboutUsPath;
    public backedByBlockchainPath = GlobalConstants.backedByBlockchainPath;
    public qualityPath = GlobalConstants.qualityPath;
    public locationsPath = GlobalConstants.locationsPath;
    public careersPath = GlobalConstants.careersPath;
    public investorRelationsPath = GlobalConstants.investorRelationsPath;
    public pressPath = GlobalConstants.pressPath;
    public traceabilityPath = GlobalConstants.traceabilityPath;
    public fileSharePath = GlobalConstants.fileSharePath;
    public contractsManagerPath = GlobalConstants.contractsManagerPath;
    public blockchainPath = GlobalConstants.blockchainPath;

    constructor() {
    }

    ngOnInit(): void {
    }

}
