// Angular
import {Routes} from '@angular/router';
// Application
import {SettingComponent} from './setting.component';
import {UserAuthGuard} from '../../guards/user-auth.guard';
import {UserMfaEnabledResolver} from '../../resolvers/user-mfa-enabled.resolver';

export const SETTING_ROUTES: Routes = [
    {
        path: '',
        component: SettingComponent,
        canActivate: [
            UserAuthGuard
        ],
        resolve: {
            mfaEnabled: UserMfaEnabledResolver
        }
    }
];
