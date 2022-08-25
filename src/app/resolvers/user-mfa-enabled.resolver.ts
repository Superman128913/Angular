// Angular
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
// Libraries
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
// Application
import {LoggerService} from '../services/logger.service';
import {UserApiService} from '../services/api/user-api.service';
import {UserStorageService} from '../services/storage/user-storage.service';
import {UserOTPRequirementForm} from '../shared/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserMfaEnabledResolver implements Resolve<any> {

    private fileName = 'UserMfaEnabledResolver';

    constructor(private userApiService: UserApiService,
                private userStorageService: UserStorageService,
                private loggerService: LoggerService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        // function name
        const functionName = 'resolve';

        const newEmail: string = this.userStorageService.getUserEmail();
        // set otp requirement form value
        const userOTPRequirementFormValue: UserOTPRequirementForm = {
            email: newEmail
        };

        return this.userApiService.checkUserOTPRequirement(
            userOTPRequirementFormValue
        ).pipe(
            map((project: any) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'project', project);

                // return data
                return project.mfaEnabled;
            }));
    }
}
