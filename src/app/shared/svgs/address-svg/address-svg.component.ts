// Angular
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-svg',
  templateUrl: './address-svg.component.html',
  styleUrls: ['./address-svg.component.scss']
})
export class AddressSvgComponent implements OnInit {

  @Input() svgSize = '';

  constructor() { }

  ngOnInit(): void {
  }

}
