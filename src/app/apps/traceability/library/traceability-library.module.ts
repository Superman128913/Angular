// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Libraries
import {DataTablesModule} from 'angular-datatables';
// Application
import {SharedModule} from '../../../shared/shared.module';
import {TRACEABILITY_LIBRARY_ROUTES} from './traceability-library.routes';


import {DragDropModule} from '@angular/cdk/drag-drop';

import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {A11yModule} from '@angular/cdk/a11y';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(TRACEABILITY_LIBRARY_ROUTES),
        SharedModule,
        DataTablesModule,
        A11yModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule
       
    ],
    exports: []
})
export class TraceabilityLibraryModule {
}
