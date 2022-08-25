// Angular
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-email-svg',
  templateUrl: './email-svg.component.html',
  styleUrls: ['./email-svg.component.scss']
})
export class EmailSvgComponent implements OnInit {

  @Input() svgSize = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
