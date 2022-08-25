// Angular
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-linkedin-svg',
  templateUrl: './linkedin-svg.component.html',
  styleUrls: ['./linkedin-svg.component.scss']
})
export class LinkedinSvgComponent implements OnInit {

  @Input() svgSize = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
