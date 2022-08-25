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
import {DragAndDropDirective} from './directives/drag-and-drop/drag-and-drop.directive';
import {CustomFormsModule} from './forms/custom-forms.module';
import {CustomSvgsModule} from './svgs/custom-svgs.module';
import {CustomModalsModule} from './modals/custom-modals.module';
import {CustomComponentsModule} from './components/custom-components.module';

@NgModule({
    declarations: [
        DragAndDropDirective
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
        CustomComponentsModule,
        CustomFormsModule,
        CustomModalsModule,
        CustomSvgsModule
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
        DragAndDropDirective,
        CustomComponentsModule,
        CustomFormsModule,
        CustomModalsModule,
        CustomSvgsModule
    ]
})
export class SharedModule {
}
