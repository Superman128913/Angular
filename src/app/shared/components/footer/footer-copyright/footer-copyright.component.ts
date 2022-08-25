// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../../../global-constants';

@Component({
    selector: 'app-footer-copyright',
    templateUrl: './footer-copyright.component.html',
    styleUrls: ['./footer-copyright.component.scss']
})
export class FooterCopyrightComponent implements OnInit {

    public copyrightYear: number = new Date().getFullYear();
    // paths
    public conditionsOfUsePath = GlobalConstants.conditionsOfUsePath;
    public privacyNoticePath = GlobalConstants.privacyNoticePath;

    constructor() {
    }

    ngOnInit(): void {
    }

}
