import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import * as $ from 'jquery';
let SearchComponent = class SearchComponent {
    constructor() {
        // public
        this.searchTerm = new Subject();
        this.searchTerm.pipe(map((e) => e.target.value), debounceTime(2), //original 2000
        distinctUntilChanged(), filter(term => term.length > 2)).subscribe(searchTerm => {
        });
    }
    ngOnInit() {
        const dataTable = $('#dataTable').DataTable({});
        console.log('1 ', dataTable);
    }
};
SearchComponent = __decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.scss']
    })
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=search.component.js.map