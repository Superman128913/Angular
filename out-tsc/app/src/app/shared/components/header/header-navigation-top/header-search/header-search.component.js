import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Libraries
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
let HeaderSearchComponent = class HeaderSearchComponent {
    constructor(router, httpHelperApiService) {
        this.router = router;
        this.httpHelperApiService = httpHelperApiService;
        this.searchTerm = new Subject();
        this.formData = new FormData();
        this.searchTerm.pipe(map((e) => e.target.value), debounceTime(2), //original 2000
        distinctUntilChanged(), filter(term => term.length > 2)).subscribe(searchterm => {
            //this.loading = true; //enable if you want loading screen
            this.formData.set('part_number', searchterm);
            this.searchEntries2(searchterm);
        });
    }
    ngOnInit() {
    }
    searchEntries(term) {
        return this.httpHelperApiService.post('search', this.formData).pipe(map(response => {
            this.searchResults = response;
        }));
    }
    searchEntries2(term) {
        //#this.formData.set("part_number", this.searchTerm);
        this.searchEntries(term).subscribe(response => {
            this.loading = false;
        }, err => {
            this.loading = false;
        });
    }
};
HeaderSearchComponent = __decorate([
    Component({
        selector: 'app-header-search',
        templateUrl: './header-search.component.html',
        styleUrls: ['./header-search.component.scss']
    })
], HeaderSearchComponent);
export { HeaderSearchComponent };
//# sourceMappingURL=header-search.component.js.map