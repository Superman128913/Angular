// Order Model
// name?: type = OPTIONAL
import {Product} from '../../../../_future/_future_src_app/shop/product/shared/product.model';

export class Order implements OrderAPI {
    shippingDetails?: any;
    product?: Product;
    orderId?: any;
    totalAmount?: any;

    constructor() {
    }
}

interface OrderAPI {
    shippingDetails?: any;
    product?: Product;
    orderId?: any;
    totalAmount?: any;
}
