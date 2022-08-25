// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../shared/shared.module';
import {BLOCKCHAIN_ROUTES} from './blockchain.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(BLOCKCHAIN_ROUTES),
        SharedModule
    ],
    exports: []
})
export class BlockchainModule {
}
