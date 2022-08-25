"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
// Angular
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
// Libraries
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var angular_token_1 = require("angular-token");
var ngx_logger_1 = require("ngx-logger");
var ngx_toastr_1 = require("ngx-toastr");
var ngx_webstorage_1 = require("ngx-webstorage");
var xng_breadcrumb_1 = require("xng-breadcrumb");
var ng2_pdf_viewer_1 = require("ng2-pdf-viewer");
// Application
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var environment_1 = require("src/environments/environment");
var shared_module_1 = require("./shared/shared.module");
var company_component_1 = require("./company/company.component");
var admin_component_1 = require("./admin/admin.component");
var taas_component_1 = require("./taas/taas.component");
var interceptor_service_1 = require("./services/interceptor.service");
var admin_auth_guard_1 = require("./guards/admin-auth.guard");
var user_auth_guard_1 = require("./guards/user-auth.guard");
var register_component_1 = require("./register/register.component");
var sign_in_component_1 = require("./sign-in/sign-in.component");
var reset_password_component_1 = require("./reset-password/reset-password.component");
var home_component_1 = require("./home/home.component");
var home_module_1 = require("./home/home.module");
var user_component_1 = require("./user/user.component");
var quality_component_1 = require("./quality/quality.component");
var pages_component_1 = require("./pages/pages.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                pages_component_1.PagesComponent,
                register_component_1.RegisterComponent,
                sign_in_component_1.SignInComponent,
                reset_password_component_1.ResetPasswordComponent,
                user_component_1.UserComponent,
                company_component_1.CompanyComponent,
                admin_component_1.AdminComponent,
                taas_component_1.TaasComponent,
                quality_component_1.QualityComponent
            ],
            imports: [
                // Angular
                platform_browser_1.BrowserModule.withServerTransition({
                    appId: 'serverApp'
                }),
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(app_routes_1.APP_ROUTES, {
                    initialNavigation: 'enabled',
                    useHash: false,
                    anchorScrolling: 'enabled',
                    scrollPositionRestoration: 'enabled',
                    relativeLinkResolution: 'legacy'
                }),
                // Libraries
                // https://github.com/neroniaky/angular-token
                angular_token_1.AngularTokenModule.forRoot({
                    apiBase: environment_1.environment.apiUrl,
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
                ng_bootstrap_1.NgbModule,
                // https://github.com/scttcper/ngx-toastr
                ngx_toastr_1.ToastrModule.forRoot({
                    maxOpened: 1,
                    timeOut: 5000,
                    positionClass: 'toast-top-full-width',
                    progressBar: true,
                    enableHtml: true
                }),
                ngx_webstorage_1.NgxWebstorageModule.forRoot(),
                ngx_logger_1.LoggerModule.forRoot({
                    // serverLoggingUrl: `${environment.server}api/logs`,
                    level: environment_1.environment.logLevel,
                    serverLogLevel: environment_1.environment.serverLogLevel,
                    disableConsoleLogging: false
                }),
                // https://github.com/udayvunnam/xng-breadcrumb
                xng_breadcrumb_1.BreadcrumbModule,
                // https://github.com/VadimDez/ng2-pdf-viewer
                ng2_pdf_viewer_1.PdfViewerModule,
                // Application
                shared_module_1.SharedModule,
                home_module_1.HomeModule
            ],
            providers: [
                angular_token_1.AngularTokenModule,
                admin_auth_guard_1.AdminAuthGuard,
                user_auth_guard_1.UserAuthGuard,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: interceptor_service_1.InterceptorService,
                    multi: true
                }
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
