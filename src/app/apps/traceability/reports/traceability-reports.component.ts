import {Component, OnInit} from '@angular/core';
import {TopbarMenuItem} from '../../../shared/models/topbar.model';

@Component({
  selector: 'app-traceability-reports',
  templateUrl: './traceability-reports.component.html',
  styleUrls: ['./traceability-reports.component.scss']
})
export class TraceabilityReportsComponent implements OnInit {

  // topbar
  public menu: Array<TopbarMenuItem>;

  constructor() {
    // set menu
    this.menu = [
      {
        image: '',
        title: '',
        path: ''
      }
    ];
  }

  ngOnInit(): void {
  }

}
