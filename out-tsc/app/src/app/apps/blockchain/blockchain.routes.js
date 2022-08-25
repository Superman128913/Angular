// Application
import { BlockchainComponent } from './blockchain.component';
export const BLOCKCHAIN_ROUTES = [
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
//# sourceMappingURL=blockchain.routes.js.map