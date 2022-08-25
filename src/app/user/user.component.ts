// Angular
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// Application
import {UserApiService} from '../services/api/user-api.service';
import {UserStorageService} from '../services/storage/user-storage.service';
import {GlobalConstants} from '../shared/global-constants';
import {UserResendConfirmationForm} from '../shared/models/user.model';
import {LoggerService} from '../services/logger.service';
import {CompanyUserInviteResendForm} from '../shared/models/company_user_invite.model';
import {CompanyUserRequestResendForm} from '../shared/models/company_user_request.model';
import {CompanyApiService} from '../services/api/company-api.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    // public
    public greeting = '';
    public userProfilePath = GlobalConstants.userProfilePath;
    public userProfileTitle = 'Manage your profile';
    public companyPath = GlobalConstants.companyPath;
    public companyTitle = 'Manage your organization';
    public companyNotRegisteredTitle = 'Confirm your account to register or request to join';
    public companyRegisterPath = GlobalConstants.companyRegisterPath;
    public companyRegisterTitle = 'Register or request to join your organization';
    public companyInviteTitle = 'You have been invited to join, but must accept';
    public companyRequestTitle = 'Your request to join is pending approval';
    public userSettingsPath = GlobalConstants.userSettingPath;
    public userSettingsTitle = 'Manage your settings';

    constructor(public userStorageService: UserStorageService,
                private router: Router,
                private loggerService: LoggerService,
                private userApiService: UserApiService,
                private companyApiService: CompanyApiService) {
        // generate greeting
        this.generateGreeting();
    }

    ngOnInit(): void {
    }

    /** Public **/

    public resendConfirmationEmail() {
        // set form values
        const userResendConfirmationFormValue: UserResendConfirmationForm = {
            email: this.userStorageService.getUserEmail()
        };

        // resend user confirmation email
        this.userApiService.resendUserConfirmationEmail(userResendConfirmationFormValue);
    }

    public resendCompanyUserInviteEmail() {
        // set form values
        const companyUserResendInviteFormValue: CompanyUserInviteResendForm = {
            email: this.userStorageService.getUserEmail()
        };

        // resend company user invite email
        this.companyApiService.resendCompanyUserInviteEmail(companyUserResendInviteFormValue);
    }

    public resendCompanyUserRequestEmail() {
        // set form values
        const companyUserResendRequestFormValue: CompanyUserRequestResendForm = {
            userId: this.userStorageService.getUserId()
        };

        // resend user request email
        this.companyApiService.resendCompanyUserRequestEmail(companyUserResendRequestFormValue);
    }

    /** Private **/

    private generateGreeting() {
        const myDate = new Date();
        const hrs = myDate.getHours();
        let message = '';
        const firstName = this.userStorageService.getUserFirstName();

        // set message for greeting
        if (hrs < 12) {
            message = 'Good Morning';
        } else if (hrs >= 12 && hrs <= 17) {
            message = 'Good Afternoon';
        } else {
            message = 'Good Evening';
        }

        // set greeting for display
        if (firstName === undefined || firstName === null || firstName === '') {
            this.greeting = message + '.';
        } else {
            this.greeting = message + ', ' + firstName + '.';
        }
    }

}
