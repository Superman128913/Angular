// Angular
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
// Libraries
import {AngularTokenService} from 'angular-token';
import {map} from 'rxjs/operators';
// Application
import {LoggerService} from '../services/logger.service';
import {GlobalConstants} from '../shared/global-constants';
import {Observable} from "rxjs";
import {UserApiService} from "../services/api/user-api.service";

@Injectable()
export class AdminAuthGuard implements CanActivate {

    constructor(private authTokenService: AngularTokenService,
                private userApiService: UserApiService,
                private router: Router,
                private loggerService: LoggerService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // set return value
        let bool = false;
        // user is in company
        if (this.userApiService.isUserSignedIn()) {
            bool = true;
                        // user type is ADMIN
                        if (this.userApiService.currentUserType('ADMIN')) {
                            // log message
                            this.loggerService.info('AdminAuthGuard', 'canActivate()', 'admin', 'logged in');
                            return true;
                        } else {
                            // log message
                            this.loggerService.info('AdminAuthGuard', 'canActivate()', 'admin', 'not logged in');
                            // navigate to home
                            this.router.navigate([GlobalConstants.homePath]).then(() => {
                                // log message
                                this.loggerService.info('AdminAuthGuard', 'canActivate()', 'navigate', '');
                            });
                            return false;
                        }
                    // } else {
                    //     // log message
                    //     this.loggerService.info('AdminAuthGuard', 'canActivate()', 'admin', 'not logged in');
                    //
                    //     // navigate to home
                    //     this.router.navigate([GlobalConstants.homePath]).then(() => {
                    //         // log message
                    //         this.loggerService.info('AdminAuthGuard', 'canActivate()', 'navigate', '');
                    //     });
                    //     return false;
                    // }
        } else {
            // log message
            this.loggerService.info('AdminAuthGuard', 'canActivate()', 'user', 'not logged in');

            // navigate to home
            this.router.navigate([GlobalConstants.homePath]).then(() => {
                // log message
                this.loggerService.info('AdminAuthGuard', 'canActivate()', 'navigate', '');
            });
            return false;
        }
    }

}
