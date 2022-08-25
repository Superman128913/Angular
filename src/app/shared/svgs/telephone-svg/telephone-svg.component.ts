// Angular
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-telephone-svg',
  templateUrl: './telephone-svg.component.html',
  styleUrls: ['./telephone-svg.component.scss']
})
export class TelephoneSvgComponent implements OnInit {

  @Input() svgSize = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
