// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {PROFILE_ROUTES} from './profile.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(PROFILE_ROUTES),
      SharedModule
  ],
  exports: []
})
export class ProfileModule {
}
