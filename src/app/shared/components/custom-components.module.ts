// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
// Libraries
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {NgImageSliderModule} from 'ng-image-slider';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {BreadcrumbModule} from 'xng-breadcrumb';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {DataTablesModule} from 'angular-datatables';
// Application
// Header
import {HeaderComponent} from './header/header.component';
import {HeaderNavigationTopComponent} from './header/header-navigation-top/header-navigation-top.component';
import {
    HeaderNavigationBottomComponent
} from './header/header-navigation-bottom/header-navigation-bottom.component';
import {HeaderSearchComponent} from './header/header-navigation-top/header-search/header-search.component';
import {HeaderMenuComponent} from './header/header-menu/header-menu.component';
// Footer
import {FooterComponent} from './footer/footer.component';
import {FooterCopyrightComponent} from './footer/footer-copyright/footer-copyright.component';
import {FooterContentComponent} from './footer/footer-content/footer-content.component';
import {FooterScrollToTopComponent} from './footer/footer-scroll-to-top/footer-scroll-to-top.component';
//
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {AppsSectionComponent} from './apps-section/apps-section.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {TopbarComponent} from './topbar/topbar.component';
import {ProgressComponent} from './progress/progress.component';
import {PdfViewerComponent} from './pdf-viewer/pdf-viewer.component';
import {AppsTableComponent} from './apps-table/apps-table.component';
import {SidebarUserDropdownComponent} from './sidebar/sidebar-user-dropdown/sidebar-user-dropdown.component';
import {
    SidebarDivisionDropdownComponent
} from './sidebar/sidebar-division-dropdown/sidebar-division-dropdown.component';
import {SearchComponent} from './search/search.component';
import {UserDevToolsComponent} from "./dev-tools/user/user-dev-tools.component";
import {CompanyDevToolsComponent} from "./dev-tools/company/company-dev-tools.component";
import {TraceabilityDevToolsComponent} from "./dev-tools/traceability/traceability-dev-tools.component";
import {CustomSvgsModule} from "../svgs/custom-svgs.module";

@NgModule({
    declarations: [
        AppsSectionComponent,
        AppsTableComponent,
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
        PdfViewerComponent,
        ProgressComponent,
        SearchComponent,
        // sidebar
        SidebarComponent,
        SidebarUserDropdownComponent,
        SidebarDivisionDropdownComponent,
        TopbarComponent
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
        CustomSvgsModule
    ],
    exports: [
        AppsSectionComponent,
        AppsTableComponent,
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
        PdfViewerComponent,
        ProgressComponent,
        SearchComponent,
        // sidebar
        SidebarComponent,
        SidebarUserDropdownComponent,
        SidebarDivisionDropdownComponent,
        TopbarComponent
    ]
})
export class CustomComponentsModule {
}
