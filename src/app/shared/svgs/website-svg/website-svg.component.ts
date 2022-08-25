import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-svg',
  templateUrl: './website-svg.component.html',
  styleUrls: ['./website-svg.component.scss']
})
export class WebsiteSvgComponent implements OnInit {

  @Input() svgSize = '';

  constructor() { }

  ngOnInit(): void {
  }

}
