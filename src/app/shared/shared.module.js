"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
// Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
// Libraries
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var core_2 = require("@ngx-translate/core");
var ng_lazyload_image_1 = require("ng-lazyload-image");
var ng_image_slider_1 = require("ng-image-slider");
var ngx_owl_carousel_o_1 = require("ngx-owl-carousel-o");
var ngx_webstorage_1 = require("ngx-webstorage");
var ngx_skeleton_loader_1 = require("ngx-skeleton-loader");
var xng_breadcrumb_1 = require("xng-breadcrumb");
var ng2_pdf_viewer_1 = require("ng2-pdf-viewer");
var angular_datatables_1 = require("angular-datatables");
// Application
// Header
var header_component_1 = require("./components/header/header.component");
var header_navigation_top_component_1 = require("./components/header/header-navigation-top/header-navigation-top.component");
var header_navigation_bottom_component_1 = require("./components/header/header-navigation-bottom/header-navigation-bottom.component");
var header_search_component_1 = require("./components/header/header-navigation-top/header-search/header-search.component");
var header_menu_component_1 = require("./components/header/header-menu/header-menu.component");
// Footer
var footer_component_1 = require("./components/footer/footer.component");
var footer_copyright_component_1 = require("./components/footer/footer-copyright/footer-copyright.component");
var footer_content_component_1 = require("./components/footer/footer-content/footer-content.component");
var footer_scroll_to_top_component_1 = require("./components/footer/footer-scroll-to-top/footer-scroll-to-top.component");
//
var breadcrumb_component_1 = require("./components/breadcrumb/breadcrumb.component");
var apps_section_component_1 = require("./components/apps-section/apps-section.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var topbar_component_1 = require("./components/topbar/topbar.component");
var drag_and_drop_directive_1 = require("./directives/drag-and-drop/drag-and-drop.directive");
var progress_component_1 = require("./components/progress/progress.component");
var pdf_viewer_component_1 = require("./components/pdf-viewer/pdf-viewer.component");
var document_upload_form_component_1 = require("./forms/document-upload-form/document-upload-form.component");
var user_sign_in_form_component_1 = require("./forms/user-sign-in-form/user-sign-in-form.component");
var user_reset_password_form_component_1 = require("./forms/user-reset-password-form/user-reset-password-form.component");
var user_register_form_component_1 = require("./forms/user-register-form/user-register-form.component");
var user_profile_form_component_1 = require("./forms/user-profile-form/user-profile-form.component");
var user_change_password_form_component_1 = require("./forms/user-change-password-form/user-change-password-form.component");
var company_user_invite_form_component_1 = require("./forms/company-user-invite-form/company-user-invite-form.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                // app-section
                apps_section_component_1.AppsSectionComponent,
                // breadcrumb
                breadcrumb_component_1.BreadcrumbComponent,
                // footer
                footer_component_1.FooterComponent,
                footer_copyright_component_1.FooterCopyrightComponent,
                footer_content_component_1.FooterContentComponent,
                footer_scroll_to_top_component_1.FooterScrollToTopComponent,
                // header
                header_component_1.HeaderComponent,
                header_menu_component_1.HeaderMenuComponent,
                header_navigation_top_component_1.HeaderNavigationTopComponent,
                header_navigation_bottom_component_1.HeaderNavigationBottomComponent,
                header_search_component_1.HeaderSearchComponent,
                sidebar_component_1.SidebarComponent,
                topbar_component_1.TopbarComponent,
                drag_and_drop_directive_1.DragAndDropDirective,
                progress_component_1.ProgressComponent,
                pdf_viewer_component_1.PdfViewerComponent,
                document_upload_form_component_1.DocumentUploadFormComponent,
                user_sign_in_form_component_1.UserSignInFormComponent,
                user_reset_password_form_component_1.UserResetPasswordFormComponent,
                user_register_form_component_1.UserRegisterFormComponent,
                user_profile_form_component_1.UserProfileFormComponent,
                user_change_password_form_component_1.UserChangePasswordFormComponent,
                company_user_invite_form_component_1.CompanyUserInviteFormComponent
            ],
            imports: [
                router_1.RouterModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule,
                ngx_owl_carousel_o_1.CarouselModule,
                ng_lazyload_image_1.LazyLoadImageModule,
                ngx_skeleton_loader_1.NgxSkeletonLoaderModule,
                core_2.TranslateModule,
                ng_image_slider_1.NgImageSliderModule,
                ngx_webstorage_1.NgxWebstorageModule,
                xng_breadcrumb_1.BreadcrumbModule,
                ng2_pdf_viewer_1.PdfViewerModule,
                angular_datatables_1.DataTablesModule
            ],
            exports: [
                // Header
                header_component_1.HeaderComponent,
                // Footer
                footer_component_1.FooterComponent,
                // Sidebar
                sidebar_component_1.SidebarComponent,
                //
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule,
                ngx_owl_carousel_o_1.CarouselModule,
                ng_lazyload_image_1.LazyLoadImageModule,
                ngx_skeleton_loader_1.NgxSkeletonLoaderModule,
                core_2.TranslateModule,
                breadcrumb_component_1.BreadcrumbComponent,
                apps_section_component_1.AppsSectionComponent,
                topbar_component_1.TopbarComponent,
                drag_and_drop_directive_1.DragAndDropDirective,
                progress_component_1.ProgressComponent,
                pdf_viewer_component_1.PdfViewerComponent,
                document_upload_form_component_1.DocumentUploadFormComponent,
                user_sign_in_form_component_1.UserSignInFormComponent,
                user_reset_password_form_component_1.UserResetPasswordFormComponent,
                user_register_form_component_1.UserRegisterFormComponent,
                user_profile_form_component_1.UserProfileFormComponent,
                user_change_password_form_component_1.UserChangePasswordFormComponent,
                company_user_invite_form_component_1.CompanyUserInviteFormComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
