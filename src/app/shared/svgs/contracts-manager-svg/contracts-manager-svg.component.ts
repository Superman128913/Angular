// Angular
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contracts-manager-svg',
  templateUrl: './contracts-manager-svg.component.html',
  styleUrls: ['./contracts-manager-svg.component.scss']
})
export class ContractsManagerSvgComponent implements OnInit {

  @Input() svgSize = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
