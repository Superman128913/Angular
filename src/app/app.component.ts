// Angular
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
// Libraries
import {filter, map} from 'rxjs/operators';
// Application
import {GlobalConstants} from './shared/global-constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(public router: Router,
                private titleService: Title,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        const title = GlobalConstants.defaultTitle;
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let child = this.activatedRoute.firstChild;
                while (child.firstChild) {
                    child = child.firstChild;
                }
                if (child.snapshot.data['title']) {
                    return child.snapshot.data['title'];
                }
                return title;
            })
        ).subscribe((title2: string) => {
            this.titleService.setTitle(title2);
        });
    }
}
