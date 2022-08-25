// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../shared/global-constants';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    public userStatement = GlobalConstants.userStatement;

    constructor() {
    }

    ngOnInit(): void {
    }

}
