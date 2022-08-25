import {
    AfterViewInit,
    Component,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    PLATFORM_ID,
    TemplateRef,
    ViewChild
} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../../../../_future_src_app_services/product.service';
import {Product} from '../../../../_future_src_app/shop/product/shared/product.model';
import {CompanyApiService} from '../../../../../src/app/services/api/company-api.service';

@Component({
    selector: 'app-product-admin-modal',
    templateUrl: './product-admin-modal.component.html',
    styleUrls: ['./product-admin-modal.component.scss']
})
export class ProductAdminModalComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input() product: Product;
    @Input() currency: any;
    @Input() row: Product;

    @ViewChild('ProductAdminModal', {static: false}) ProductAdminModal: TemplateRef<any>;

    public closeResult: string;
    public modalOpen = false;
    public products: any;

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
                private modalService: NgbModal,
                private productService: ProductService,
                public apiService: CompanyApiService) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    showProduct(x) {
        console.log(x);
        return true;
    }

    openModal(product) {
        //const status = await this.showProduct(product);
        const status = true;
        if (status) {
            this.modalOpen = true;
            if (isPlatformBrowser(this.platformId)) { // For SSR
                this.modalService.open(this.ProductAdminModal, {
                    size: 'lg',
                    ariaLabelledBy: 'Cart-Modal',
                    centered: true,
                    windowClass: 'theme-modal cart-modal CartModal'
                }).result.then((result) => {
                    `Result ${result}`;
                }, (reason) => {
                    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                });
            }
        }
    }

    ngOnDestroy() {
        if (this.modalOpen) {
            this.modalService.dismissAll();
        }
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

}
