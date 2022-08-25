import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-out-svg',
  templateUrl: './sign-out-svg.component.html',
  styleUrls: ['./sign-out-svg.component.scss']
})
export class SignOutSvgComponent implements OnInit {

  @Input() svgSize = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
