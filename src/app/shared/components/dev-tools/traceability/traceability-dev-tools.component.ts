// Angular
import {Component, isDevMode, OnInit} from '@angular/core';
import {TraceabilityRequestCreateForm} from '../../../models/traceability.model';
import {TraceabilityApiService} from '../../../../services/api/traceability-api.service';
import {UserStorageService} from '../../../../services/storage/user-storage.service';
import {CompanyStorageService} from '../../../../services/storage/company-storage.service';
import {TraceabilityStorageService} from '../../../../services/storage/traceability-storage.service';

@Component({
    selector: 'app-traceability-dev-tools',
    templateUrl: './traceability-dev-tools.component.html',
    styleUrls: ['./traceability-dev-tools.component.scss']
})
export class TraceabilityDevToolsComponent implements OnInit {

    constructor(private traceabilityApiService: TraceabilityApiService,
                private userStorageService: UserStorageService,
                private companyStorageService: CompanyStorageService,
                private traceabilityStorageService: TraceabilityStorageService) {
    }

    ngOnInit(): void {
    }

    public isDevMode() {
        return isDevMode();
    }

    // test create traceability request - existing user
    public testCreateTraceabilityRequestExistingUser() {
        // set form values
        const traceabilityRequestCreateFormValue: TraceabilityRequestCreateForm = {
            emails: [
                {email: 'jerome.miastkowski@aeroplicity.com'},
                {email: 'jamey.rose@aeroplicity.com'}
            ],
            partNumber: '123',
            serialNumber: '456',
            lotNumber: '789',
            message: 'This is a test message. This is a test message. This is a test message. This is a test message.' +
                'This is a test message. This is a test message. This is a test message.',
            traceabilityId: this.traceabilityStorageService.getTraceabilityId(this.companyStorageService.getCompanyId()),
            userId: this.userStorageService.getUserId()
        };

        // register company via the API
        this.traceabilityApiService.createTraceabilityRequest(traceabilityRequestCreateFormValue);
    }

    // test create traceability request - random user
    public testCreateTraceabilityRequestRandomUser() {
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let hash = '';
        for (let i = 0; i < 8; i++) {
            hash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        const randomEmail = hash + '@' + hash + '.com';

        // set form values
        const traceabilityRequestCreateFormValue: TraceabilityRequestCreateForm = {
            emails: [
                {email: randomEmail}
            ],
            partNumber: '123',
            serialNumber: '456',
            lotNumber: '789',
            message: 'This is a test message. This is a test message. This is a test message. This is a test message.' +
                'This is a test message. This is a test message. This is a test message.',
            traceabilityId: this.traceabilityStorageService.getTraceabilityId(this.companyStorageService.getCompanyId()),
            userId: this.userStorageService.getUserId()
        };

        // register company via the API
        this.traceabilityApiService.createTraceabilityRequest(traceabilityRequestCreateFormValue);
    }
}
