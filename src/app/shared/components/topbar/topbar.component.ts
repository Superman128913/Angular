// Angular
import {Component, Input, OnInit} from '@angular/core';
// Application
import {TopbarMenuItem} from '../../models/topbar.model';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  // input
  @Input() menu: Array<TopbarMenuItem> = [];
  @Input() searchBar;

  constructor() {
  }

  ngOnInit(): void {
  }

}
