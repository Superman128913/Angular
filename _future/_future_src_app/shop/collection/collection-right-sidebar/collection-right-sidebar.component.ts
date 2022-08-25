import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {ProductService} from '../../../../_future_src_app_services/product.service';
import {Prod, Product} from '../../product/shared/product.model';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpHelperApiService} from '../../../../../src/app/services/api/http-helper-api.service';

@Component({
    selector: 'app-collection-right-sidebar',
    templateUrl: './collection-right-sidebar.component.html',
    styleUrls: ['./collection-right-sidebar.component.scss']
})
export class CollectionRightSidebarComponent implements OnInit {

    public grid = 'col-xl-3 col-md-6';
    public layoutView = 'grid-view';
    public products: Product[] = [];
    public brands: any[] = [];
    public colors: any[] = [];
    public size: any[] = [];
    public minPrice = 0;
    public maxPrice = 1000;
    public tags: any[] = [];
    public category: string;
    public pageNo = 1;
    public paginate: any = {}; // Pagination use only
    public sortBy: string; // Sorting Order
    public mobileSidebar = false;

    productFormGroup: FormGroup;
    public prod: Prod;
    pn: string;
    id: number;
    form: FormGroup;
    controls: FormArray;
    loaded = false;
    public rows: Array<Prod>;
    reactiveForm = new FormGroup({
        id: new FormControl(''),
        partNumber: new FormControl(''),
        category: new FormControl('')
    });

    constructor(public httpHelperApiService: HttpHelperApiService,
                private route: ActivatedRoute,
                private router: Router,
                private viewScroller: ViewportScroller,
                public productService: ProductService,
                private fb: FormBuilder) {

        this.rows = [];

        // Get Query params..
        this.route.queryParams.subscribe(params => {

            this.brands = params.brand ? params.brand.split(',') : [];
            this.colors = params.color ? params.color.split(',') : [];
            this.size = params.size ? params.size.split(',') : [];
            this.minPrice = params.minPrice ? params.minPrice : this.minPrice;
            this.maxPrice = params.maxPrice ? params.maxPrice : this.maxPrice;
            this.tags = [...this.brands, ...this.colors, ...this.size]; // All Tags Array

            this.category = params.category ? params.category : null;
            this.sortBy = params.sortBy ? params.sortBy : 'ascending';
            this.pageNo = params.page ? params.page : this.pageNo;

            // Get Filtered Products..
            this.productService.filterProducts(this.tags).subscribe(response => {

                // Sorting Filter
                this.products = this.productService.sortProducts(response, this.sortBy);

                // Category Filter
                if (params.category) {
                    this.products = this.products.filter(item => item.type === this.category);
                }

                // Price Filter
                this.products = this.products.filter(item => item.price >= this.minPrice && item.price <= this.maxPrice);

                // Paginate Products
                this.paginate = this.productService.getPager(this.products.length, +this.pageNo);     // get paginate object from service
                this.products = this.products.slice(this.paginate.startIndex, this.paginate.endIndex + 1); // get current page of items

            });
        });
    }

    getProducts() {
        this.httpHelperApiService.get('products').subscribe((data: Prod[]) => {
            //Set local array
            this.rows = data;
            //Sort by id
            this.rows.sort((a, b) => a.id > b.id ? 1 : -1);
            //Initialize FormGroup form
            this.initArrayForm();
            //Flag page as loaded
            this.loaded = true;
        });
    }

    initArrayForm() {
        const toGroups = this.rows.map(entity => new FormGroup({
            id: new FormControl({value: entity.id, disabled: false}),
            partNumber: new FormControl(entity.partNumber),
            category: new FormControl(entity.category)
        }));
        this.controls = new FormArray(toGroups);
    }

    ngOnInit() {
        this.getProducts();
    }

    public delete(id: string) {
        console.log('delete : ' + id);
        const path = 'products/' + id;
        this.httpHelperApiService.delete(path).subscribe((r) => {
            this.rows = this.rows.filter((p, i) => {
                if (Number(id) === p.id) {
                    return false;
                }
                return true;
            }, this.rows);
        });
    }

    public update() {
        const id = this.reactiveForm.value.id;
        const change = this.reactiveForm.value['part_number_' + id];
        console.log('update : ' + id);
        const path = 'products/' + id;
        this.httpHelperApiService.put(path, change);
    }

    public copy(i: number) {
        console.log('update : ' + i);
        this.prod = this.rows[i];
        console.log(this.prod);
        this.httpHelperApiService.post('products/', this.prod).subscribe((r) => {
            this.getProducts();
            return true;
        });
    }

    public info(x) {
        console.log(x);
    }

    getControl(index: number, field: string): FormControl {
        return this.controls.at(index).get(field) as FormControl;
    }

    updateField(index: number, field: string) {
        const control = this.getControl(index, field);
        if (control.valid) {
            const newArray = this.controls.at(index).value;
            this.rows[index] = newArray;
            const path = 'products/' + this.rows[index].id;
            const result = this.httpHelperApiService.put(path, newArray);

        }
    }

    // ----- ORIGINAL ----- //
    // Append filter value to Url
    updateFilter(tags: any) {
        tags.page = null; // Reset Pagination
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: tags,
            queryParamsHandling: 'merge', // preserve the existing query params in the route
            skipLocationChange: false  // do trigger navigation
        }).finally(() => {
            this.viewScroller.setOffset([120, 120]);
            this.viewScroller.scrollToAnchor('products'); // Anchore Link
        });
    }

    // SortBy Filter
    sortByFilter(value) {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {sortBy: value ? value : null},
            queryParamsHandling: 'merge', // preserve the existing query params in the route
            skipLocationChange: false  // do trigger navigation
        }).finally(() => {
            this.viewScroller.setOffset([120, 120]);
            this.viewScroller.scrollToAnchor('products'); // Anchore Link
        });
    }

    // Remove Tag
    removeTag(tag) {

        this.brands = this.brands.filter(val => val !== tag);
        this.colors = this.colors.filter(val => val !== tag);
        this.size = this.size.filter(val => val !== tag);

        const params = {
            brand: this.brands.length ? this.brands.join(',') : null,
            color: this.colors.length ? this.colors.join(',') : null,
            size: this.size.length ? this.size.join(',') : null
        };

        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: params,
            queryParamsHandling: 'merge', // preserve the existing query params in the route
            skipLocationChange: false  // do trigger navigation
        }).finally(() => {
            this.viewScroller.setOffset([120, 120]);
            this.viewScroller.scrollToAnchor('products'); // Anchore Link
        });
    }

    // Clear Tags
    removeAllTags() {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {},
            skipLocationChange: false  // do trigger navigation
        }).finally(() => {
            this.viewScroller.setOffset([120, 120]);
            this.viewScroller.scrollToAnchor('products'); // Anchore Link
        });
    }

    // product Pagination
    setPage(page: number) {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {page},
            queryParamsHandling: 'merge', // preserve the existing query params in the route
            skipLocationChange: false  // do trigger navigation
        }).finally(() => {
            this.viewScroller.setOffset([120, 120]);
            this.viewScroller.scrollToAnchor('products'); // Anchore Link
        });
    }

    // Change Grid Layout
    updateGridLayout(value: string) {
        this.grid = value;
    }

    // Change Layout View
    updateLayoutView(value: string) {
        this.layoutView = value;
        if (value === 'list-view') {
            this.grid = 'col-lg-12';
        } else {
            this.grid = 'col-xl-3 col-md-6';
        }
    }

    // Mobile sidebar
    toggleMobileSidebar() {
        this.mobileSidebar = !this.mobileSidebar;
    }

}
