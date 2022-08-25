// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Libraries
import {NgImageSliderModule} from 'ng-image-slider';
// Application
import {HOME_ROUTES} from './home.routes';
import {SharedModule} from '../shared/shared.module';
import {AuthorizedSliderComponent} from './authorized-slider/authorized-slider.component';
import {MainSliderComponent} from './main-slider/main-slider.component';

@NgModule({
    declarations: [
        AuthorizedSliderComponent,
        MainSliderComponent
    ],
    imports: [
        RouterModule.forChild(HOME_ROUTES),
        SharedModule,
        NgImageSliderModule
    ],
    exports: [
        AuthorizedSliderComponent,
        MainSliderComponent
    ]
})
export class HomeModule {
}
