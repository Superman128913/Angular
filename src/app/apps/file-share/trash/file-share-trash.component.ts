import {Component, OnInit} from '@angular/core';
import {TopbarMenuItem} from '../../../shared/models/topbar.model';

@Component({
  selector: 'app-file-share-trash',
  templateUrl: './file-share-trash.component.html',
  styleUrls: ['./file-share-trash.component.scss']
})
export class FileShareTrashComponent implements OnInit {

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
