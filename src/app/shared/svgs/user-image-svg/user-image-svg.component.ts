import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-image-svg',
  templateUrl: './user-image-svg.component.html',
  styleUrls: ['./user-image-svg.component.scss']
})
export class UserImageSvgComponent implements OnInit {

  @Input() svgSize = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
