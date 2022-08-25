import {Component, OnInit} from '@angular/core';
import {TopbarMenuItem} from '../../../shared/models/topbar.model';

@Component({
  selector: 'app-file-share-all-files',
  templateUrl: './file-share-all-files.component.html',
  styleUrls: ['./file-share-all-files.component.scss']
})
export class FileShareAllFilesComponent implements OnInit {

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
