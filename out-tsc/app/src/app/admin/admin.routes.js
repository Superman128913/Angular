// Application
import { AdminComponent } from './admin.component';
import { AdminAuthGuard } from '../guards/admin-auth.guard';
export const ADMIN_ROUTES = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [
            AdminAuthGuard
        ]
    }
];
//# sourceMappingURL=admin.routes.js.map