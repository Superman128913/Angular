// Angular
import {Routes} from '@angular/router';
// Application
import {BlockchainComponent} from './blockchain.component';

export const BLOCKCHAIN_ROUTES: Routes = [
    {
        path: '',
        component: BlockchainComponent
    },
    {
        // route not found
        path: '**',
        redirectTo: ''
    }
];
