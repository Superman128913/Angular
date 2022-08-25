// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {PAGES_ROUTES} from './pages.routes';
import {SharedModule} from '../shared/shared.module';
import {AboutUsComponent} from './about-us/about-us.component';
import {BackedByBlockchainComponent} from './backed-by-blockchain/backed-by-blockchain.component';
import {QualityComponent} from './quality/quality.component';
import {CareersComponent} from './careers/careers.component';
import {ConditionsOfUseComponent} from './conditions-of-use/conditions-of-use.component';
import {CookiePolicyComponent} from './cookie-policy/cookie-policy.component';
import {InvestorRelationsComponent} from './investor-relations/investor-relations.component';
import {PressComponent} from './press/press.component';
import {PrivacyNoticeComponent} from './privacy-notice/privacy-notice.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {CustomSvgsModule} from '../shared/svgs/custom-svgs.module';
import {ObfuscatedComponent} from './obfuscated/obfuscated.component';

@NgModule({
    declarations: [
        AboutUsComponent,
        BackedByBlockchainComponent,
        QualityComponent,
        CareersComponent,
        ConditionsOfUseComponent,
        CookiePolicyComponent,
        InvestorRelationsComponent,
        PressComponent,
        PrivacyNoticeComponent,
        ObfuscatedComponent
    ],
    imports: [
        RouterModule.forChild(PAGES_ROUTES),
        SharedModule,
        PdfViewerModule,
        CustomSvgsModule
    ],
    exports: []
})
export class PagesModule {
}
