// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {TopbarMenuItem} from '../../../shared/models/topbar.model';

@Component({
  selector: 'app-traceability-dashboard',
  templateUrl: './traceability-dashboard.component.html',
  styleUrls: ['./traceability-dashboard.component.scss']
})
export class TraceabilityDashboardComponent implements OnInit {

  // topbar
  public topbarMenuItems: Array<TopbarMenuItem>;

  constructor() {
    // set menu
    this.topbarMenuItems = [
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
