// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../../shared/global-constants';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  public linkedInUrl = GlobalConstants.linkedInUrl;
  public ourPrincples = GlobalConstants.ourPrinciples;

  constructor() {
    console.log(this.ourPrincples);
  }

  ngOnInit(): void {
  }

}
