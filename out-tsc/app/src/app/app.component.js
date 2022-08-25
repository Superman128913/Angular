import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
// Libraries
import { filter, map } from 'rxjs/operators';
// Application
import { GlobalConstants } from './shared/global-constants';
let AppComponent = class AppComponent {
    constructor(router, titleService, activatedRoute) {
        this.router = router;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        const title = GlobalConstants.defaultTitle;
        this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(() => {
            let child = this.activatedRoute.firstChild;
            while (child.firstChild) {
                child = child.firstChild;
            }
            if (child.snapshot.data['title']) {
                return child.snapshot.data['title'];
            }
            return title;
        })).subscribe((title2) => {
            this.titleService.setTitle(title2);
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map