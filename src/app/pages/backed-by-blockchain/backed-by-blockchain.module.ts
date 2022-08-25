// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {BACKED_BY_BLOCKCHAIN_ROUTES} from './backed-by-blockchain.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        RouterModule.forChild(BACKED_BY_BLOCKCHAIN_ROUTES),
        SharedModule
    ]
})
export class BackedByBlockchainModule {
}
