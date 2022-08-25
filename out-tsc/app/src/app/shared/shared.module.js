import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataTablesModule } from 'angular-datatables';
// Application
// Header
import { HeaderComponent } from './components/header/header.component';
import { HeaderNavigationTopComponent } from './components/header/header-navigation-top/header-navigation-top.component';
import { HeaderNavigationBottomComponent } from './components/header/header-navigation-bottom/header-navigation-bottom.component';
import { HeaderSearchComponent } from './components/header/header-navigation-top/header-search/header-search.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
// Footer
import { FooterComponent } from './components/footer/footer.component';
import { FooterCopyrightComponent } from './components/footer/footer-copyright/footer-copyright.component';
import { FooterContentComponent } from './components/footer/footer-content/footer-content.component';
import { FooterScrollToTopComponent } from './components/footer/footer-scroll-to-top/footer-scroll-to-top.component';
// Forms
import { CustomFormsModule } from './forms/custom-forms.module';
// SVGs
import { SvgsModule } from './svgs/svgs.module';
import { AddressSvgComponent } from './svgs/address-svg/address-svg.component';
import { CitySvgComponent } from './svgs/city-svg/city-svg.component';
import { CartSvgComponent } from './svgs/cart-svg/cart-svg.component';
import { CompanyDivisionAddressAddSvgComponent } from './svgs/company-division-address-add-svg/company-division-address-add-svg.component';
import { AddressDetailsSvgComponent } from './svgs/address-details-svg/address-details-svg.component';
import { CageCodeSvgComponent } from './svgs/cage-code-svg/cage-code-svg.component';
import { DunsNumberSvgComponent } from './svgs/duns-number-svg/duns-number-svg.component';
import { EinSvgComponent } from './svgs/ein-svg/ein-svg.component';
import { FaxSvgComponent } from './svgs/fax-svg/fax-svg.component';
import { PhoneSvgComponent } from './svgs/phone-svg/phone-svg.component';
import { CompanyDivisionRegisterSvgComponent } from './svgs/company-division-register-svg/company-division-register-svg.component';
import { WebsiteSvgComponent } from './svgs/website-svg/website-svg.component';
import { OrdersSvgComponent } from './svgs/orders-svg/orders-svg.component';
import { PaymentsSvgComponent } from './svgs/payments-svg/payments-svg.component';
import { CompanySvgComponent } from './svgs/company-svg/company-svg.component';
import { ContractsManagerSvgComponent } from './svgs/contracts-manager-svg/contracts-manager-svg.component';
import { CountrySvgComponent } from './svgs/country-svg/country-svg.component';
import { EmailSvgComponent } from './svgs/email-svg/email-svg.component';
import { FileShareSvgComponent } from './svgs/file-share-svg/file-share-svg.component';
import { LinkedinSvgComponent } from './svgs/linkedin-svg/linkedin-svg.component';
import { PasswordSvgComponent } from './svgs/password-svg/password-svg.component';
import { SettingsSvgComponent } from './svgs/settings-svg/settings-svg.component';
import { StateProvinceCountySvgComponent } from './svgs/state-province-county-svg/state-province-county-svg.component';
import { TraceabilitySvgComponent } from './svgs/traceability-svg/traceability-svg.component';
import { TwitterSvgComponent } from './svgs/twitter-svg/twitter-svg.component';
import { UserFirstNameSvgComponent } from './svgs/user-first-name-svg/user-first-name-svg.component';
import { UserImageSvgComponent } from './svgs/user-image-svg/user-image-svg.component';
import { UserLastNameSvgComponent } from './svgs/user-last-name-svg/user-last-name-svg.component';
import { UserSvgComponent } from './svgs/user-svg/user-svg.component';
import { UserTitleSvgComponent } from './svgs/user-title-svg/user-title-svg.component';
import { UsersSvgComponent } from './svgs/users-svg/users-svg.component';
import { ZipPostalCodeSvgComponent } from './svgs/zip-postal-code-svg/zip-postal-code-svg.component';
//
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AppsSectionComponent } from './components/apps-section/apps-section.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DragAndDropDirective } from './directives/drag-and-drop/drag-and-drop.directive';
import { ProgressComponent } from './components/progress/progress.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { UserDevToolsComponent } from './components/dev-tools/user/user-dev-tools.component';
import { CompanyDevToolsComponent } from './components/dev-tools/company/company-dev-tools.component';
import { TraceabilityDevToolsComponent } from './components/dev-tools/traceability/traceability-dev-tools.component';
import { AppsTableComponent } from './components/apps-table/apps-table.component';
import { CustomModalsModule } from './modals/custom-modals.module';
import { SidebarUserDropdownComponent } from './components/sidebar/sidebar-user-dropdown/sidebar-user-dropdown.component';
import { SidebarDivisionDropdownComponent } from './components/sidebar/sidebar-division-dropdown/sidebar-division-dropdown.component';
import { SearchComponent } from './components/search/search.component';
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        declarations: [
            // app-section
            AppsSectionComponent,
            // breadcrumb
            BreadcrumbComponent,
            // footer
            FooterComponent,
            FooterCopyrightComponent,
            FooterContentComponent,
            FooterScrollToTopComponent,
            // header
            HeaderComponent,
            HeaderMenuComponent,
            HeaderNavigationTopComponent,
            HeaderNavigationBottomComponent,
            HeaderSearchComponent,
            SidebarComponent,
            TopbarComponent,
            DragAndDropDirective,
            ProgressComponent,
            PdfViewerComponent,
            AppsTableComponent,
            SidebarUserDropdownComponent,
            SidebarDivisionDropdownComponent,
            SearchComponent
        ],
        imports: [
            RouterModule,
            CommonModule,
            NgbModule,
            CarouselModule,
            LazyLoadImageModule,
            NgxSkeletonLoaderModule,
            TranslateModule,
            NgImageSliderModule,
            NgxWebstorageModule,
            BreadcrumbModule,
            PdfViewerModule,
            DataTablesModule,
            CustomFormsModule,
            CustomModalsModule,
            SvgsModule
        ],
        exports: [
            // Angular
            CommonModule,
            // Libraries
            NgbModule,
            TranslateModule,
            LazyLoadImageModule,
            NgImageSliderModule,
            CarouselModule,
            NgxWebstorageModule,
            NgxSkeletonLoaderModule,
            DataTablesModule,
            // Application
            CustomFormsModule,
            CustomModalsModule,
            // Header
            HeaderComponent,
            // Footer
            FooterComponent,
            // Sidebar
            SidebarComponent,
            //
            BreadcrumbComponent,
            PdfViewerComponent,
            AppsSectionComponent,
            TopbarComponent,
            DragAndDropDirective,
            ProgressComponent,
            UserDevToolsComponent,
            CompanyDevToolsComponent,
            TraceabilityDevToolsComponent,
            // SVGs
            AddressSvgComponent,
            CitySvgComponent,
            CartSvgComponent,
            CompanyDivisionAddressAddSvgComponent,
            AddressDetailsSvgComponent,
            CageCodeSvgComponent,
            DunsNumberSvgComponent,
            EinSvgComponent,
            FaxSvgComponent,
            PhoneSvgComponent,
            CompanyDivisionRegisterSvgComponent,
            WebsiteSvgComponent,
            OrdersSvgComponent,
            PaymentsSvgComponent,
            CompanySvgComponent,
            ContractsManagerSvgComponent,
            CountrySvgComponent,
            EmailSvgComponent,
            CountrySvgComponent,
            EmailSvgComponent,
            FileShareSvgComponent,
            LinkedinSvgComponent,
            PasswordSvgComponent,
            SettingsSvgComponent,
            StateProvinceCountySvgComponent,
            TraceabilitySvgComponent,
            TwitterSvgComponent,
            UserFirstNameSvgComponent,
            UserImageSvgComponent,
            UserLastNameSvgComponent,
            UserSvgComponent,
            UserTitleSvgComponent,
            UsersSvgComponent,
            ZipPostalCodeSvgComponent,
            AppsTableComponent
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map