// Angular
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
// Libraries
import {Observable} from 'rxjs';
// Application
import {GlobalConstants} from '../shared/global-constants';
import {NotificationService} from '../services/notification.service';
import {LoggerService} from '../services/logger.service';
import {UserApiService} from '../services/api/user-api.service';

@Injectable()
export class UserAuthGuard implements CanActivate {

    private fileName = 'UserAuthGuard';

    constructor(private router: Router,
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
        if (this.userApiService.isUserSignedIn()) {
            bool = true;
        } else {
            // navigate
            this.router.navigate([GlobalConstants.signInPath]).then(() => {
                // log
                this.loggerService.info(this.fileName, 'canActivate()', 'navigate', '');
            });

            // notification
            this.notificationService.error('Please sign in for access.');
        }
        // log
        this.loggerService.debug(this.fileName, 'canActivate()', 'return', bool);
        // return
        return bool;
    }

}
