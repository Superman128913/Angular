"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(httpHelperApiService) {
        this.httpHelperApiService = httpHelperApiService;
        this.loaded = false;
        this.fullInfoVar = false;
        this.showUsers = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        // this.getProducts();
    };
    AdminComponent.prototype.updateField = function (index, field) {
        var control = this.getControl(index, field);
        if (control.valid) {
            var newArray = this.controls.at(index).value;
            this.rows[index] = newArray;
            var path = 'products/' + this.rows[index].id;
            this.httpHelperApiService.put(path, newArray);
        }
    };
    AdminComponent.prototype.getControl = function (index, field) {
        return this.controls.at(index).get(field);
    };
    AdminComponent.prototype.delete = function (id) {
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
    // public copy(i: number) {
    //     console.log('update : ' + i);
    //     this.prod = this.rows[i];
    //     console.log(this.prod);
    //     this.httpHelperApiService.post('products/', this.prod).subscribe((r) => {
    //         this.getProducts();
    //         return true;
    //     });
    // }
    AdminComponent.prototype.info = function (x) {
        console.log(x);
        this.fullInfoVar = true;
    };
    // getProducts() {
    //     this.httpHelperApiService.get('products').subscribe((data: Prod[]) => {
    //         //Set local array
    //         this.rows = data;
    //         //Sort by id
    //         this.rows.sort((a, b) => a.id > b.id ? 1 : -1);
    //         //Initialize FormGroup form
    //         this.initArrayForm();
    //         //Flag page as loaded
    //         this.loaded = true;
    //     });
    // }
    // getUsers() {
    //     this.httpHelperApiService.get('admin/users').subscribe((data: User[]) => {
    //         //Set local array
    //         this.users = data;
    //         //Sort by id
    //         this.users.sort((a, b) => a.id > b.id ? 1 : -1);
    //         //Show in console
    //         console.log(this.users);
    //         //Show to user
    //         this.showUsers = true;
    //     });
    // }
    AdminComponent.prototype.initArrayForm = function () {
        var toGroups = this.rows.map(function (entity) { return new forms_1.FormGroup({
            id: new forms_1.FormControl({ value: entity.id, disabled: false }),
            partNumber: new forms_1.FormControl(entity.partNumber),
            category: new forms_1.FormControl(entity.category)
        }); });
        this.controls = new forms_1.FormArray(toGroups);
    };
    AdminComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss']
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
