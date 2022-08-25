// Application
import { PagesComponent } from './pages.component';
export const PAGES_ROUTES = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                // empty child route redirect
                path: '',
                pathMatch: 'full',
                redirectTo: 'about-us'
            },
            {
                // about us
                path: 'about-us',
                loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
            },
            {
                // backed by blockchain
                path: 'backed-by-blockchain',
                loadChildren: () => import('./backed-by-blockchain/backed-by-blockchain.module').then(m => m.BackedByBlockchainModule)
            },
            {
                // quality
                path: 'quality',
                loadChildren: () => import('./quality/quality.module').then(m => m.QualityModule)
            },
            {
                // careers
                path: 'careers',
                loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule)
            },
            {
                // investor-relations
                path: 'investor-relations',
                loadChildren: () => import('./investor-relations/investor-relations.module').then(m => m.InvestorRelationsModule)
            },
            {
                // press center
                path: 'press',
                loadChildren: () => import('./press/press.module').then(m => m.PressModule)
            },
            {
                // conditions of use
                path: 'conditions-of-use',
                loadChildren: () => import('./conditions-of-use/conditions-of-use.module').then(m => m.ConditionsOfUseModule)
            },
            {
                // privacy notice
                path: 'privacy-notice',
                loadChildren: () => import('./privacy-notice/privacy-notice.module').then(m => m.PrivacyNoticeModule)
            },
            {
                // cookie policy
                path: 'cookie-policy',
                loadChildren: () => import('./cookie-policy/cookie-policy.module').then(m => m.CookiePolicyModule)
            },
            {
                // obfuscated
                path: 'obfuscated/:uuid',
                loadChildren: () => import('./obfuscated/obfuscated.module').then(m => m.ObfuscatedModule)
            },
            {
                // route not found
                path: '**',
                pathMatch: 'full',
                redirectTo: ''
            }
        ]
    },
    {
        // route not found
        path: '**',
        redirectTo: ''
    }
];
//# sourceMappingURL=pages.routes.js.map