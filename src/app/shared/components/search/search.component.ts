// Angular
import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // public
  public searchTerm = new Subject<string>();

  constructor() {
    this.searchTerm.pipe(
        map((e: any) => e.target.value),
        debounceTime(2), //original 2000
        distinctUntilChanged(),
        filter(term => term.length > 2), //Minimum search length (currently 2)
    ).subscribe(searchTerm => {
    });
  }

  ngOnInit(): void {
    const dataTable = $('#dataTable').DataTable({});
    console.log('1 ', dataTable);
  }
}
