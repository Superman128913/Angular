// Application
import { SettingComponent } from './setting.component';
import { UserAuthGuard } from '../../guards/user-auth.guard';
import { UserMfaEnabledResolver } from '../../resolvers/user-mfa-enabled.resolver';
export const SETTING_ROUTES = [
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
//# sourceMappingURL=setting.routes.js.map