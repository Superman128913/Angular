import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../shared/global-constants';
let AdminAuthGuard = class AdminAuthGuard {
    constructor(authTokenService, userApiService, router, loggerService) {
        this.authTokenService = authTokenService;
        this.userApiService = userApiService;
        this.router = router;
        this.loggerService = loggerService;
    }
    canActivate(route, state) {
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
            }
            else {
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
        }
        else {
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
};
AdminAuthGuard = __decorate([
    Injectable()
], AdminAuthGuard);
export { AdminAuthGuard };
//# sourceMappingURL=admin-auth.guard.js.map