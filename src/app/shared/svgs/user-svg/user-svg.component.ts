import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-svg',
  templateUrl: './user-svg.component.html',
  styleUrls: ['./user-svg.component.scss']
})
export class UserSvgComponent implements OnInit {

  @Input() svgSize;

  constructor() { }

  ngOnInit(): void {
  }

}
