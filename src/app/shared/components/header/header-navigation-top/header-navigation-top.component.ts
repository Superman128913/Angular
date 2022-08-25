// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {User} from '../../../models/user.model';
import {UserApiService} from '../../../../services/api/user-api.service';
import {GlobalConstants} from '../../../global-constants';
import {Logo} from '../../../models/logo';
import {UserStorageService} from '../../../../services/storage/user-storage.service';

@Component({
    selector: 'app-header-navigation-top',
    templateUrl: './header-navigation-top.component.html',
    styleUrls: ['./header-navigation-top.component.scss']
})
export class HeaderNavigationTopComponent implements OnInit {

    // logo
    public invertedLogo: Logo = GlobalConstants.invertedWordmark;
    public shortLogo: Logo = GlobalConstants.defaultLogo;
    // message
    public message = '';
    // paths
    public homePath = GlobalConstants.homePath;
    public companyPath = GlobalConstants.companyPath;
    public userPath = GlobalConstants.userPath;
    public registerPath = GlobalConstants.registerPath;
    public signInPath = GlobalConstants.signInPath;
    // user
    private user!: User;

    constructor(public userApiService: UserApiService,
                public userStorageService: UserStorageService) {
        // this.user = this.localStorage.retrieve('user');
        // this.generateMessage();
    }

    ngOnInit(): void {
    }

    private generateMessage() {
        // set message for display
        if (this.user.firstName !== undefined) {
            this.message = 'Hello ' + this.user.firstName;
        } else {
            this.message = '';
        }
    }
}
