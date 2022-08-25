// Angular
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-file-share-svg',
  templateUrl: './file-share-svg.component.html',
  styleUrls: ['./file-share-svg.component.scss']
})
export class FileShareSvgComponent implements OnInit {

  @Input() svgSize = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
