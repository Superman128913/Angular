// Angular
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-twitter-svg',
  templateUrl: './twitter-svg.component.html',
  styleUrls: ['./twitter-svg.component.scss']
})
export class TwitterSvgComponent implements OnInit {

  @Input() svgSize = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
