"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderSearchComponent = void 0;
// Angular
var core_1 = require("@angular/core");
// Libraries
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var HeaderSearchComponent = /** @class */ (function () {
    function HeaderSearchComponent(router, httpHelperApiService) {
        var _this = this;
        this.router = router;
        this.httpHelperApiService = httpHelperApiService;
        this.searchTerm = new rxjs_1.Subject();
        this.formData = new FormData();
        this.searchTerm.pipe((0, operators_1.map)(function (e) { return e.target.value; }), (0, operators_1.debounceTime)(2), //original 2000
        (0, operators_1.distinctUntilChanged)(), (0, operators_1.filter)(function (term) { return term.length > 2; })).subscribe(function (searchterm) {
            //this.loading = true; //enable if you want loading screen
            _this.formData.set('part_number', searchterm);
            _this._searchEntries(searchterm);
        });
    }
    HeaderSearchComponent.prototype.ngOnInit = function () {
    };
    HeaderSearchComponent.prototype.searchEntries = function (term) {
        var _this = this;
        return this.httpHelperApiService.post('search', this.formData).pipe((0, operators_1.map)(function (response) {
            _this.searchResults = response;
        }));
    };
    HeaderSearchComponent.prototype._searchEntries = function (term) {
        var _this = this;
        //#this.formData.set("part_number", this.searchTerm);
        this.searchEntries(term).subscribe(function (response) {
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
        });
    };
    HeaderSearchComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-header-search',
            templateUrl: './header-search.component.html',
            styleUrls: ['./header-search.component.scss']
        })
    ], HeaderSearchComponent);
    return HeaderSearchComponent;
}());
exports.HeaderSearchComponent = HeaderSearchComponent;
