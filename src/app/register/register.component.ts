// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../shared/global-constants';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public userStatement = GlobalConstants.userStatement;

    constructor() {
    }

    ngOnInit(): void {
    }

}
