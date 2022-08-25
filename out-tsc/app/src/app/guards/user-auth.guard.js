import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
// Application
import { GlobalConstants } from '../shared/global-constants';
let UserAuthGuard = class UserAuthGuard {
    constructor(router, userApiService, loggerService, notificationService) {
        this.router = router;
        this.userApiService = userApiService;
        this.loggerService = loggerService;
        this.notificationService = notificationService;
        this.fileName = 'UserAuthGuard';
    }
    canActivate(route, state) {
        // set return value
        let bool = false;
        // user is in company
        if (this.userApiService.isUserSignedIn()) {
            bool = true;
        }
        else {
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
};
UserAuthGuard = __decorate([
    Injectable()
], UserAuthGuard);
export { UserAuthGuard };
//# sourceMappingURL=user-auth.guard.js.map