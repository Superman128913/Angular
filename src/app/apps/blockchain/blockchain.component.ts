// Angular
import {Component, OnInit} from '@angular/core';
// Application
import {GlobalConstants} from '../../shared/global-constants';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {

  public blockchainSolutionsEmail = GlobalConstants.blockchainSolutionsEmail;

  constructor() {
  }

  ngOnInit(): void {
  }

}
