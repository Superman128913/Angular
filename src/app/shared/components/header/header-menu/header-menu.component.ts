// Angular
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// Application
import {Menu, NavService} from '../../../../../../_future/_future_src_app_services/nav.service';
import {CompanyApiService} from '../../../../services/api/company-api.service';
import {UserApiService} from '../../../../services/api/user-api.service';

@Component({
    selector: 'app-header-menu',
    templateUrl: './header-menu.component.html',
    styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

    public menuItems!: Menu[];

    constructor(private router: Router,
                public navServices: NavService,
                public apiService: CompanyApiService,
                public userApiService: UserApiService) {
        this.navServices.items.subscribe(menuItems => this.menuItems = menuItems);
        this.router.events.subscribe((event) => {
            this.navServices.mainMenuToggle = false;
        });
        if (this.userApiService.currentUserType('ADMIN')) {
            this.navServices.adminitems.subscribe(menuItems => this.menuItems = this.menuItems.concat(menuItems));
        } else {
            this.navServices.items.subscribe(menuItems => this.menuItems = menuItems);
        }
    }

    ngOnInit(): void {
    }

    mainMenuToggle(): void {
        this.navServices.mainMenuToggle = !this.navServices.mainMenuToggle;
    }

    // Click Toggle menu (Mobile)
    toggleNavActive(item: any) {
        item.active = !item.active;
    }

}
