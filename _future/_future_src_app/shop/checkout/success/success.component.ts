import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Order} from '../../../../../src/app/shared/models/order.model';
import {OrderService} from '../../../../_future_src_app_services/order.service';
import {ProductService} from '../../../../_future_src_app_services/product.service';

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit, AfterViewInit {

    public orderDetails: Order = {};

    constructor(public productService: ProductService,
                private orderService: OrderService) {
    }

    ngOnInit(): void {
        this.orderService.checkoutItems.subscribe(response => this.orderDetails = response);
    }

    ngAfterViewInit() {

    }

}
