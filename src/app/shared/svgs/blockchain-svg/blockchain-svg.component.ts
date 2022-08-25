// Angular
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blockchain-svg',
  templateUrl: './blockchain-svg.component.html',
  styleUrls: ['./blockchain-svg.component.scss']
})
export class BlockchainSvgComponent implements OnInit {

  @Input() svgSize = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
