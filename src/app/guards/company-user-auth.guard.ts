// Application
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
// Libraries
import {Observable} from 'rxjs';
// Application
import {UserStorageService} from '../services/storage/user-storage.service';
import {LoggerService} from '../services/logger.service';
import {GlobalConstants} from '../shared/global-constants';
import {UserApiService} from '../services/api/user-api.service';
import {NotificationService} from '../services/notification.service';
import {UserResendConfirmationForm} from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyUserAuthGuard implements CanActivate {

  private fileName = 'CompanyUserAuth';

  constructor(private router: Router,
              private userStorageService: UserStorageService,
              private userApiService: UserApiService,
              private loggerService: LoggerService,
              private notificationService: NotificationService) {
  }

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // set return value
    let bool = false;
    // user is in company
    if (this.userStorageService.isUserInOrganization()) {
      bool = true;
    } else if (!this.userStorageService.isUserConfirmed()) { // user is not confirmed
      // resend confirmation email
      const userResendConfirmationFormValue: UserResendConfirmationForm = {
        email: this.userStorageService.getUserEmail()
      };
      this.userApiService.resendUserConfirmationEmail(userResendConfirmationFormValue);

      // notification
      this.notificationService.error('Please confirm your account for access.');
    } else {
      // navigate
      this.router.navigate([GlobalConstants.companyRegisterPath]).then(() => {
        // log
        this.loggerService.info(this.fileName, 'canActivate()', 'navigate', '');
      });

      // notification
      this.notificationService.error('Please register or request to join an organization for access.');
    }
    // log
    this.loggerService.debug(this.fileName, 'canActivate()', 'return', bool);
    // return
    return bool;
  }

}
