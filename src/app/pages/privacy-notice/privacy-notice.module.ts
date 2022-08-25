// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {PRIVACY_NOTICE_ROUTES} from './privacy-notice.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        RouterModule.forChild(PRIVACY_NOTICE_ROUTES),
        SharedModule
    ]
})
export class PrivacyNoticeModule {
}
