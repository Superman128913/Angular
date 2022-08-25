// Angular
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

    public resetPasswordStatement = 'Better to reset and not need to than to need it and not reset';

    constructor() {
    }

    ngOnInit(): void {
    }

}
