// Angular
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
// Libraries
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
// Application
import {UserSignInForm} from '../../models/user.model';
import {UserApiService} from '../../../services/api/user-api.service';
import {GlobalConstants} from '../../global-constants';

@Component({
    selector: 'app-user-sign-in-modal',
    templateUrl: './user-sign-in-modal.component.html',
})
export class UserSignInModalComponent implements OnInit {

    // public
    // initializing sign in form
    public userSignInForm: FormGroup;
    public supportEmail = GlobalConstants.supportEmail;
    // private
    private email: string | null = null;
    private password: string | null = null;

    constructor(public activeModal: NgbActiveModal,
                private userApiService: UserApiService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        // create user sign in form
        // NOTE: must be in ngOnInit and not in constructor to get email and passwords
        this.userSignInForm = this.createUserSignInForm();
    }

    // this called only if user entered full code
    onCodeCompleted(code: string) {
        // set sign in form value
        const userSignInFormValue = this.userSignInForm.value as UserSignInForm;
        // sign in user via the API
        this.userApiService.signInUser(userSignInFormValue, code);
        // close modal
        this.activeModal.close();
    }

    /**
     * Private
     **/

    private createUserSignInForm() {
        return this.formBuilder.group({
            email: [
                this.email
            ],
            password: [
                this.password
            ],
            userType: [
                'USER'
            ]
        });
    }
}
