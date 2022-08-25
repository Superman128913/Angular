import {Component, OnInit} from '@angular/core';
import {TopbarMenuItem} from '../../../shared/models/topbar.model';

@Component({
  selector: 'app-file-share-dashboard',
  templateUrl: './file-share-dashboard.component.html',
  styleUrls: ['./file-share-dashboard.component.scss']
})
export class FileShareDashboardComponent implements OnInit {

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
