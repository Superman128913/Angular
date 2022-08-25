// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../../shared/global-constants';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {

  public pressEmail = GlobalConstants.pressEmail;

  constructor() {
  }

  ngOnInit(): void {
  }

}
