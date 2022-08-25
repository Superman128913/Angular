// Angular
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-traceability-svg',
  templateUrl: './traceability-svg.component.html',
  styleUrls: ['./traceability-svg.component.scss']
})
export class TraceabilitySvgComponent implements OnInit {

  @Input() svgSize = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
