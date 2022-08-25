import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// Libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularTokenModule } from 'angular-token';
import { LoggerModule } from 'ngx-logger';
import { ToastrModule } from 'ngx-toastr';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { PdfViewerModule } from 'ng2-pdf-viewer';
// Application
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { CompanyComponent } from './company/company.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { UserAuthGuard } from './guards/user-auth.guard';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { UserComponent } from './user/user.component';
import { PagesComponent } from './pages/pages.component';
import { environment } from '../environments/environment';
import { AppsComponent } from './apps/apps.component';
import { SvgsModule } from './shared/svgs/svgs.module';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HomeComponent,
            PagesComponent,
            RegisterComponent,
            SignInComponent,
            ResetPasswordComponent,
            ConfirmationComponent,
            UserComponent,
            CompanyComponent,
            AdminComponent,
            AppsComponent,
            // NotificationComponent
        ],
        imports: [
            // Angular
            BrowserModule.withServerTransition({
                appId: 'serverApp'
            }),
            BrowserAnimationsModule,
            HttpClientModule,
            RouterModule.forRoot(APP_ROUTES, {
                initialNavigation: 'enabled',
                useHash: false,
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled',
                relativeLinkResolution: 'legacy'
            }),
            // Libraries
            // https://github.com/neroniaky/angular-token
            AngularTokenModule.forRoot({
                apiBase: environment.apiUrl,
                signInRedirect: '/sign-in',
                userTypes: [
                    {
                        name: 'ADMIN',
                        path: 'admin'
                    },
                    {
                        name: 'USER',
                        path: ''
                    }
                ]
            }),
            // https://github.com/ng-bootstrap/ng-bootstrap
            NgbModule,
            // https://github.com/scttcper/ngx-toastr
            ToastrModule.forRoot({
                // toastComponent: NotificationComponent,
                maxOpened: 1,
                timeOut: 5000,
                positionClass: 'toast-bottom-right',
                progressBar: true,
                enableHtml: true,
                preventDuplicates: true
            }),
            NgxWebstorageModule.forRoot(),
            LoggerModule.forRoot({
                // serverLoggingUrl: `${environment.server}api/logs`,
                level: environment.logLevel,
                serverLogLevel: environment.serverLogLevel,
                disableConsoleLogging: false
            }),
            // https://github.com/udayvunnam/xng-breadcrumb
            BreadcrumbModule,
            // https://github.com/VadimDez/ng2-pdf-viewer
            PdfViewerModule,
            // Application
            SharedModule,
            HomeModule,
            SvgsModule
        ],
        providers: [
            AngularTokenModule,
            AdminAuthGuard,
            UserAuthGuard
            // ,
            // {
            //     provide: HTTP_INTERCEPTORS,
            //     useClass: InterceptorService,
            //     multi: true
            // }
        ],
        bootstrap: [
            AppComponent
        ],
        // entryComponents: [NotificationComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map