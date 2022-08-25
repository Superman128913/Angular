// Angular
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// Libraries
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
// Application
import {HttpHelperApiService} from '../../../../../services/api/http-helper-api.service';

@Component({
    selector: 'app-header-search',
    templateUrl: './header-search.component.html',
    styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {

    loading: boolean | undefined;
    searchTerm = new Subject<string>();
    searchResults: any;
    formData: any = new FormData();

    constructor(private router: Router,
                public httpHelperApiService: HttpHelperApiService) {
        this.searchTerm.pipe(
            map((e: any) => e.target.value),
            debounceTime(2), //original 2000
            distinctUntilChanged(),
            filter(term => term.length > 2), //Minimum search length (currently 2)
        ).subscribe(searchterm => {
            //this.loading = true; //enable if you want loading screen
            this.formData.set('part_number', searchterm);
            this.searchEntries2(searchterm);
        });
    }

    ngOnInit(): void {
    }

    searchEntries(term: any): Observable<any> {
        return this.httpHelperApiService.post('search', this.formData).pipe(
            map(response => {
                this.searchResults = response;
            })
        );
    }

    searchEntries2(term: any) {
        //#this.formData.set("part_number", this.searchTerm);
        this.searchEntries(term).subscribe(response => {
            this.loading = false;
        }, err => {
            this.loading = false;
        });
    }

}
