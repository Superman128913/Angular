// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {OBFUSCATED_ROUTES} from './obfuscated.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        RouterModule.forChild(OBFUSCATED_ROUTES),
        SharedModule
    ]
})
export class ObfuscatedModule {
}
