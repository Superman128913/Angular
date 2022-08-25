"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionRightSidebarComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CollectionRightSidebarComponent = /** @class */ (function () {
    function CollectionRightSidebarComponent(httpHelperApiService, route, router, viewScroller, productService, fb) {
        var _this = this;
        this.httpHelperApiService = httpHelperApiService;
        this.route = route;
        this.router = router;
        this.viewScroller = viewScroller;
        this.productService = productService;
        this.fb = fb;
        this.grid = 'col-xl-3 col-md-6';
        this.layoutView = 'grid-view';
        this.products = [];
        this.brands = [];
        this.colors = [];
        this.size = [];
        this.minPrice = 0;
        this.maxPrice = 1000;
        this.tags = [];
        this.pageNo = 1;
        this.paginate = {}; // Pagination use only
        this.mobileSidebar = false;
        this.loaded = false;
        this.reactiveForm = new forms_1.FormGroup({
            id: new forms_1.FormControl(''),
            partNumber: new forms_1.FormControl(''),
            category: new forms_1.FormControl('')
        });
        this.rows = [];
        // Get Query params..
        this.route.queryParams.subscribe(function (params) {
            _this.brands = params.brand ? params.brand.split(',') : [];
            _this.colors = params.color ? params.color.split(',') : [];
            _this.size = params.size ? params.size.split(',') : [];
            _this.minPrice = params.minPrice ? params.minPrice : _this.minPrice;
            _this.maxPrice = params.maxPrice ? params.maxPrice : _this.maxPrice;
            _this.tags = __spreadArray(__spreadArray(__spreadArray([], _this.brands, true), _this.colors, true), _this.size, true); // All Tags Array
            _this.category = params.category ? params.category : null;
            _this.sortBy = params.sortBy ? params.sortBy : 'ascending';
            _this.pageNo = params.page ? params.page : _this.pageNo;
            // Get Filtered Products..
            _this.productService.filterProducts(_this.tags).subscribe(function (response) {
                // Sorting Filter
                _this.products = _this.productService.sortProducts(response, _this.sortBy);
                // Category Filter
                if (params.category) {
                    _this.products = _this.products.filter(function (item) { return item.type === _this.category; });
                }
                // Price Filter
                _this.products = _this.products.filter(function (item) { return item.price >= _this.minPrice && item.price <= _this.maxPrice; });
                // Paginate Products
                _this.paginate = _this.productService.getPager(_this.products.length, +_this.pageNo); // get paginate object from service
                _this.products = _this.products.slice(_this.paginate.startIndex, _this.paginate.endIndex + 1); // get current page of items
            });
        });
    }
    CollectionRightSidebarComponent.prototype.getProducts = function () {
        var _this = this;
        this.httpHelperApiService.get('products').subscribe(function (data) {
            //Set local array
            _this.rows = data;
            //Sort by id
            _this.rows.sort(function (a, b) { return a.id > b.id ? 1 : -1; });
            //Initialize FormGroup form
            _this.initArrayForm();
            //Flag page as loaded
            _this.loaded = true;
        });
    };
    CollectionRightSidebarComponent.prototype.initArrayForm = function () {
        var toGroups = this.rows.map(function (entity) { return new forms_1.FormGroup({
            id: new forms_1.FormControl({ value: entity.id, disabled: false }),
            partNumber: new forms_1.FormControl(entity.partNumber),
            category: new forms_1.FormControl(entity.category)
        }); });
        this.controls = new forms_1.FormArray(toGroups);
    };
    CollectionRightSidebarComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    CollectionRightSidebarComponent.prototype.delete = function (id) {
        var _this = this;
        console.log('delete : ' + id);
        var path = 'products/' + id;
        this.httpHelperApiService.delete(path).subscribe(function (r) {
            _this.rows = _this.rows.filter(function (p, i) {
                if (Number(id) === p.id) {
                    return false;
                }
                return true;
            }, _this.rows);
        });
    };
    CollectionRightSidebarComponent.prototype.update = function () {
        var id = this.reactiveForm.value.id;
        var change = this.reactiveForm.value['part_number_' + id];
        console.log('update : ' + id);
        var path = 'products/' + id;
        this.httpHelperApiService.put(path, change);
    };
    CollectionRightSidebarComponent.prototype.copy = function (i) {
        var _this = this;
        console.log('update : ' + i);
        this.prod = this.rows[i];
        console.log(this.prod);
        this.httpHelperApiService.post('products/', this.prod).subscribe(function (r) {
            _this.getProducts();
            return true;
        });
    };
    CollectionRightSidebarComponent.prototype.info = function (x) {
        console.log(x);
    };
    CollectionRightSidebarComponent.prototype.getControl = function (index, field) {
        return this.controls.at(index).get(field);
    };
    CollectionRightSidebarComponent.prototype.updateField = function (index, field) {
        var control = this.getControl(index, field);
        if (control.valid) {
            var newArray = this.controls.at(index).value;
            this.rows[index] = newArray;
            var path = 'products/' + this.rows[index].id;
            var result = this.httpHelperApiService.put(path, newArray);
        }
    };
    // ----- ORIGINAL ----- //
    // Append filter value to Url
    CollectionRightSidebarComponent.prototype.updateFilter = function (tags) {
        var _this = this;
        tags.page = null; // Reset Pagination
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: tags,
            queryParamsHandling: 'merge',
            skipLocationChange: false // do trigger navigation
        }).finally(function () {
            _this.viewScroller.setOffset([120, 120]);
            _this.viewScroller.scrollToAnchor('products'); // Anchore Link
        });
    };
    // SortBy Filter
    CollectionRightSidebarComponent.prototype.sortByFilter = function (value) {
        var _this = this;
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { sortBy: value ? value : null },
            queryParamsHandling: 'merge',
            skipLocationChange: false // do trigger navigation
        }).finally(function () {
            _this.viewScroller.setOffset([120, 120]);
            _this.viewScroller.scrollToAnchor('products'); // Anchore Link
        });
    };
    // Remove Tag
    CollectionRightSidebarComponent.prototype.removeTag = function (tag) {
        var _this = this;
        this.brands = this.brands.filter(function (val) { return val !== tag; });
        this.colors = this.colors.filter(function (val) { return val !== tag; });
        this.size = this.size.filter(function (val) { return val !== tag; });
        var params = {
            brand: this.brands.length ? this.brands.join(',') : null,
            color: this.colors.length ? this.colors.join(',') : null,
            size: this.size.length ? this.size.join(',') : null
        };
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: params,
            queryParamsHandling: 'merge',
            skipLocationChange: false // do trigger navigation
        }).finally(function () {
            _this.viewScroller.setOffset([120, 120]);
            _this.viewScroller.scrollToAnchor('products'); // Anchore Link
        });
    };
    // Clear Tags
    CollectionRightSidebarComponent.prototype.removeAllTags = function () {
        var _this = this;
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {},
            skipLocationChange: false // do trigger navigation
        }).finally(function () {
            _this.viewScroller.setOffset([120, 120]);
            _this.viewScroller.scrollToAnchor('products'); // Anchore Link
        });
    };
    // product Pagination
    CollectionRightSidebarComponent.prototype.setPage = function (page) {
        var _this = this;
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { page: page },
            queryParamsHandling: 'merge',
            skipLocationChange: false // do trigger navigation
        }).finally(function () {
            _this.viewScroller.setOffset([120, 120]);
            _this.viewScroller.scrollToAnchor('products'); // Anchore Link
        });
    };
    // Change Grid Layout
    CollectionRightSidebarComponent.prototype.updateGridLayout = function (value) {
        this.grid = value;
    };
    // Change Layout View
    CollectionRightSidebarComponent.prototype.updateLayoutView = function (value) {
        this.layoutView = value;
        if (value === 'list-view') {
            this.grid = 'col-lg-12';
        }
        else {
            this.grid = 'col-xl-3 col-md-6';
        }
    };
    // Mobile sidebar
    CollectionRightSidebarComponent.prototype.toggleMobileSidebar = function () {
        this.mobileSidebar = !this.mobileSidebar;
    };
    CollectionRightSidebarComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-collection-right-sidebar',
            templateUrl: './collection-right-sidebar.component.html',
            styleUrls: ['./collection-right-sidebar.component.scss']
        })
    ], CollectionRightSidebarComponent);
    return CollectionRightSidebarComponent;
}());
exports.CollectionRightSidebarComponent = CollectionRightSidebarComponent;
