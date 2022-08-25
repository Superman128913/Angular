import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-in-svg',
  templateUrl: './sign-in-svg.component.html',
  styleUrls: ['./sign-in-svg.component.scss']
})
export class SignInSvgComponent implements OnInit {

  @Input() svgSize = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
