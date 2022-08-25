// Application
import { ProfileComponent } from './profile.component';
import { UserAuthGuard } from '../../guards/user-auth.guard';
export const PROFILE_ROUTES = [
    {
        path: '',
        component: ProfileComponent,
        canActivate: [
            UserAuthGuard
        ]
    }
];
//# sourceMappingURL=profile.routes.js.map