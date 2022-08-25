// Angular
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// Application
import {UserApiService} from '../services/api/user-api.service';
import {LoggerService} from '../services/logger.service';

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

    // private
    private fileName = 'ConfirmationComponent';

    constructor(private userApiService: UserApiService,
                private activatedRoute: ActivatedRoute,
                private loggerService: LoggerService) {
    }

    ngOnInit(): void {
        // get confirmation token from activated route
        this.activatedRoute.queryParams.subscribe(params => {
            // get confirmation token
            const confirmationToken = params['confirmation_token'];

            if (confirmationToken) {
                // log confirmation token
                this.loggerService.debug(this.fileName, 'ngOnInit', 'confirmationToken: ', confirmationToken);

                // confirmation email
                this.userApiService.confirmUserEmail(confirmationToken);
            }
        });
    }
}
