import {Component, OnInit} from '@angular/core';
import {TopbarMenuItem} from '../../../shared/models/topbar.model';

@Component({
  selector: 'app-settings',
  templateUrl: './traceability-settings.component.html',
  styleUrls: ['./traceability-settings.component.scss']
})
export class TraceabilitySettingsComponent implements OnInit {

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
