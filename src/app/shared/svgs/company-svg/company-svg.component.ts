// Angular
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-svg',
  templateUrl: './company-svg.component.html',
  styleUrls: ['./company-svg.component.scss']
})
export class CompanySvgComponent implements OnInit {

  @Input() svgSize = '';

  constructor() { }

  ngOnInit(): void {
  }

}
