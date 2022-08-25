// Application
import { VerifyComponent } from './verify.component';
import { UserAuthGuard } from '../../guards/user-auth.guard';
export const VERIFY_ROUTES = [
    {
        path: '',
        component: VerifyComponent,
        canActivate: [
            UserAuthGuard
        ]
    }
];
//# sourceMappingURL=verify.routes.js.map